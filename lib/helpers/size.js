export var DATA_SIZES = require('../db/sizes.json');
/**
 * Returns the converted clothing sizes
 *
 * @remarks
 * This is a general clothing size converter.
 *
 * @example
 * Here's a simple example:
 * ```
 * import { convertSize } from 'whats-size'
 * const sizes = convertSize('usa', 'xs')
 * // { brazil: 'pp', europe: 'xs', usa: 'xs'}
 * ```
 * @param sizeCountry - The country of origin (brazil, usa and europe)
 * @param size - The size that will be converted
 * @param dataSizeType - The size type of the data (generic, women_shoes, men_suit, etc.)
 * @returns The object with country-specific sizes transformed.
 */
export function convertSize(sizeCountry, size, dataSizeType) {
    if (dataSizeType === void 0) { dataSizeType = 'generic'; }
    var sizes = getSizes(sizeCountry, dataSizeType);
    return sizes === null || sizes === void 0 ? void 0 : sizes[size];
}
/**
 * Returns all country sizes by type.
 *
 * @remarks
 * This is a method for obtaining all possible clothing sizes.
 *
 * @example
 * Here's a simple example:
 * ```
 * import { getSizes } from 'whats-size'
 * getSizes('brazil', 'kids_shoes')
 * // { "28": { brazil: "28", usa: "9½", europe: "27" } }
 * ```
 * @param sizeCountry - The country of origin (brazil, usa and europe)
 * @param dataSizeType - The size type of the data (generic, women_shoes, men_suit, etc.)
 * @returns The object with country-specific sizes organized by size origin.
 */
export function getSizes(sizeCountry, dataSizeType) {
    var _a;
    if (dataSizeType === void 0) { dataSizeType = 'generic'; }
    var sizes = (_a = DATA_SIZES[dataSizeType]) === null || _a === void 0 ? void 0 : _a[sizeCountry];
    return sizes;
}
export default {
    convertSize: convertSize,
    getSizes: getSizes,
};
