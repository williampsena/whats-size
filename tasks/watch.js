const gulp = require("gulp");
var watch = require("gulp-watch");

module.exports = {
    task: () => {
        function run(done) {
            return watch(["src/**/*", "test/**/*"], { ignoreInitial: false })
                .pipe(gulp.dest("lib"));
        }

        return gulp.task("watch", ["build"], run);
    }
}