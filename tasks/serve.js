const gulp = require("gulp");
const connect = require('gulp-connect');
const cors = require('cors');

module.exports = {
    task: () => {
        function run() {
            connect.server({
                root: `${__dirname}/../lib`,
                port: 8080,
                livereload: false,
                open: false,
                middleware: (connect, opt) => [cors()],
            });
        }

        return gulp.task('serve', run);
    }
}

