const gulp = require("gulp");
const fs = require("fs");
const exceltojson = require("xls-to-json");
const Q = require("q");

let files = fs.readdirSync('./tasks');

files.forEach(file => {
    let fullPath = `./tasks/${file}`;
    require(fullPath).task();
});