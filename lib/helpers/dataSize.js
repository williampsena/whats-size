"use strict";
/**
 * Base class to convert sizes
 */
var SizeConvert = (function () {
    /**
     * Default constructor
     * @param sizes  Contains object with specific sizes of type (clothes, shoes)
     */
    function SizeConvert(sizes) {
        this.sizes = sizes;
    }
    /**
     * Convert size to other country sizes
     *
     * @param size A size to be converted
     * @returns Object with global sizes
     */
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