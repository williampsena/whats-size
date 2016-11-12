const gulp = require("gulp");
const fs = require("fs");
const exceltojson = require("xls-to-json");
const Q = require("q");
 
module.exports = {
    task: () => {
        function prepareModel(datas, getKey) {
            var output = {};

            datas.forEach(data => {
                var key = getKey(data);

                if (key) {
                    delete data.description;
                    output[key] = data;
                }
            });

            return output;
        }

        function getSize(sheetname, callback) {
            return Q.Promise(function (resolve, reject) {
                exceltojson({
                    input: "./src/sizes.xls",
                    output: null,
                    sheet: sheetname
                }, function (err, result) {
                    if (err) {
                        console.error(err);
                        throw err;
                    }

                    var model = {
                        key: sheetname,
                        description: result[0].description,
                        brl: prepareModel(result, (d) => d.brl),
                        usa: prepareModel(result, (d) => d.usa),
                        eur: prepareModel(result, (d) => d.eur)
                    };

                    resolve(model);
                });
            });
        }

        function run(done) {
            var sheets = [
                "simple",
                "women_coats_dress",
                "women_blouse",
                "women_shoes",
                "men_shirt",
                "men_shoes",
                "men_suit",
                "kids_clothes",
                "kids_shoes"
            ];

            var promiseSizes = [];

            sheets.forEach(sheetname => {
                promiseSizes.push(getSize(sheetname));
            });

            Q.allSettled(promiseSizes).then(models => {
                var sizes = {};

                models.forEach(model => {
                    sizes[model.value.key] = model.value;
                });

                fs.writeFileSync('./src/db/sizes.json', JSON.stringify(sizes, null, 4), 'utf8');
                done();
            }).catch(err => {
                console.error(err);
            })
        }

        return gulp.task('database', run);
    }
}