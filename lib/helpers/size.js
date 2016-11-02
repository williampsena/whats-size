"use strict";
var dataSize_1 = require("./dataSize");
var dataSizes = require("../db/sizes.json");
var Size = (function () {
    function Size(country) {
        country = country.toLowerCase();
        this.dataSizes = dataSizes;
        this.simple = new dataSize_1.SizeConvert(this.dataSizes.simple[country]);
    }
    return Size;
}());
exports.Size = Size;
;
//# sourceMappingURL=size.js.map