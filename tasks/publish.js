const Q = require("q");
const gulp = require("gulp");
var exec = require("child_process").exec;

module.exports = {
    task: () => {
        function executeCommand(command, args) {
            args = args || {};

            return Q.promise(function (resolve, reject) {
                exec(command, {
                    cwd: args.cwd
                }, function (err, stdout, stderr) {
                    if (err)
                        reject(err);

                    if (stdout)
                        console.log(stdout);

                    if (stderr)
                        console.error(stderr);

                    resolve();
                });
            });
        }

        function build(args) {
            return executeCommand(`npm publish`);
        }

        function run(done) {
            build()
            .then(() => {
                done();
            }).catch(err => {
                throw err;
            })
        }
        return gulp.task("publish", ["clean", "lint", "copy"], run);
    }
}