"use strict";
var SizeConvert = (function () {
    function SizeConvert(sizes) {
        this.sizes = sizes;
    }
    SizeConvert.prototype.convert = function (size) {
        var convertedSize = this.sizes[size];
        if (!convertedSize) {
            throw new Error("Size not found");
        }
        return convertedSize;
    };
    return SizeConvert;
}());
exports.SizeConvert = SizeConvert;
;
//# sourceMappingURL=dataSize.js.map