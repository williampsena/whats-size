const shelljs = require('shelljs')

function generateStaticFiles() {
    shelljs.exec('npm run build:doc')
}

function copyAssets() {
    shelljs.cp('CNAME', './docs')
}

function deploySurge() {
    shelljs.exec('surge ./docs')
}

function build() {
    generateStaticFiles()
    copyAssets()
    deploySurge()
}

build()
