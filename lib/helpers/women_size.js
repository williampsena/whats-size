import { convertSize, getSizes } from './size';
var convertWomenBlouseSize = function (sizeCountry, size) {
    return convertSize(sizeCountry, size, 'women_blouse');
};
var convertWomenCoatsDressSize = function (sizeCountry, size) {
    return convertSize(sizeCountry, size, 'women_coats_dress');
};
var convertWomenShoesSize = function (sizeCountry, size) {
    return convertSize(sizeCountry, size, 'women_shoes');
};
/**
 * Returns women's size conversions (blouses, coats, dresses, shoes, and skirts).
 *
 * @remarks
 * This is a size converter for ladies.
 *
 * @example
 * Here's a simple example:
 * ```
 * import { convertWomenSize } from 'whats-size'
 * const converter = convertWomenSize('brazil')
 * converter.shoes('35')
 * // { brazil: "35", usa: "5½", europe: "37" }
 * ```
 *
 * @param sizeCountry - The country of origin (brazil, usa and europe)
 * @returns The curried function when you specify 'sizeCountry' and 'size' to get country-specific sizes transformed.
 */
export function convertWomenSize(sizeCountry) {
    return {
        blouses: function (size) { return convertWomenBlouseSize(sizeCountry, size); },
        coats: function (size) { return convertWomenCoatsDressSize(sizeCountry, size); },
        dresses: function (size) { return convertWomenCoatsDressSize(sizeCountry, size); },
        shoes: function (size) { return convertWomenShoesSize(sizeCountry, size); },
        skirts: function (size) { return convertWomenCoatsDressSize(sizeCountry, size); },
        sizes: function () { return getWomenSizes(sizeCountry); },
    };
}
/**
 * Returns the all women's conversion sizes (blouses, coats, dresses, shoes, and skirts)
 *
 * @remarks
 * This is a size converter for children.
 *
 * @example
 * Here's a simple example:
 * ```
 * import { getWomenSizes } from 'whats-size'
 * const sizes = getWomenSizes('brazil')
 * // { shoes: { "35": { brazil: "35", usa: "5½", europe: "37" }, blouses: { ... } }
 * ```
 *
 * @param sizeCountry - The country of origin (brazil, usa and europe)
 * @returns The curried function when you specify 'size' to get an object containing converted sizes by countries.
 */
export var getWomenSizes = function (sizeCountry) {
    var blouses = getSizes(sizeCountry, 'women_blouse');
    var coatsAndDress = getSizes(sizeCountry, 'women_coats_dress');
    var shoes = getSizes(sizeCountry, 'women_shoes');
    return {
        blouses: blouses,
        coats: coatsAndDress,
        dresses: coatsAndDress,
        shoes: shoes,
        skirts: coatsAndDress,
    };
};
export default {
    convertWomenSize: convertWomenSize,
    getWomenSizes: getWomenSizes,
};
