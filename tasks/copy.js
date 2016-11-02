const gulp = require("gulp");

module.exports = {
    task: () => {
        function run() {
            gulp.src(["./src/dist/**/*"]).pipe(gulp.dest("./lib"));
        }

        return gulp.task("copy", ['lint'], run);
    }
}