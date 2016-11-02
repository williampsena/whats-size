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
            args = args || {};
            args.ts = args.ts || "";

            return executeCommand(`tsc ${args.ts} --pretty`, args);
        }

        function runClientWebPack() {
            return executeCommand("webpack");
        }

        function runServer() {
            return build({
                cwd: './src'
            });
        }

        function run(done) {
            runServer()
            .then(runClientWebPack)
            .then(() => {
                done();
            }).catch(err => {
                throw err;
            })
        }
        return gulp.task("build", ["clean", "lint", "copy"], run);
    }
}