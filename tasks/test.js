const gulp = require("gulp");
const mocha = require('gulp-mocha');
const tsNode = require('ts-node/register');

module.exports = {
    task: (done) => {
        function run() {
            gulp.src('test/**/*-spec.ts', { read: false })
                .pipe(mocha({
                    compilers: {
                        ts: tsNode
                    }, reporter: 'spec'
                }));
        }

        return gulp.task('test', run);
    }
}