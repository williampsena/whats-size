const gulp = require("gulp");
const tslint = require("gulp-tslint");
 
module.exports = {
    task: () => {
        function run() {
            gulp.src("src/**/*.ts")
                .pipe(tslint({
                    force: true,
                    formatter: "verbose"
                }))
                .pipe(tslint.report());
        }

        return gulp.task('lint', ['clean'], run);
    }
}