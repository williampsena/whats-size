const gulp = require("gulp");
const nsp = require('gulp-nsp');

module.exports = {
    task: () => {
        function run(done) {
            nsp("package.json", done);
        }
        return gulp.task("nsp", ["clean", "build", "copy"], run);
    }
}