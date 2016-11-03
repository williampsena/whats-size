const gulp = require("gulp");
const typedoc = require("gulp-typedoc");

module.exports = {
    task: () => {
        function run() {

            return gulp
                .src(["src/**/*.ts"])
                .pipe(typedoc({
                    module: "commonjs",
                    target: "es6",
                    out: "docs/",
                    name: "Whats Size"
                }))
        }

        return gulp.task("doc", [], run);
    }
}