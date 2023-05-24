const shelljs = require('shelljs')
const fs = require('fs')

const loadPackageJson = () =>
    JSON.parse(fs.readFileSync('./package.json', { encoding: 'utf8' }))

function cleanPackageJson(packageJson) {
    delete packageJson.scripts
    delete packageJson.prettier
}

function fixPaths(packageJson) {
    packageJson['module'] = 'index.js'
    packageJson['types'] = '@types/index.d.ts'
}

function savePackageJson(packageJson) {
    fs.writeFileSync(
        './lib/package.json',
        JSON.stringify(packageJson, null, 4),
        {
            encoding: 'utf8',
        }
    )
}

function copyAssets() {
    shelljs.cp('-r', './src/db', './lib/db')
    shelljs.cp('./README.md', './lib')
}

function removeAssets() {
    shelljs.rm('-rf', ['./lib/**/*.spec.js', './lib/**/*.spec.d.ts', './__mocks__'])
}

const packageJson = loadPackageJson()

cleanPackageJson(packageJson)
fixPaths(packageJson)
savePackageJson(packageJson)

copyAssets()
removeAssets()
