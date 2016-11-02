const gulp = require("gulp");
const del = require('del');
 
module.exports = {
    task: () => {
        function run(done) {
            del(["lib/**/*"]).then(paths => {
                done();
            });
        }

        return gulp.task('clean', run);
    }
}