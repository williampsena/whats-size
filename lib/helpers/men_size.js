import { convertSize, getSizes } from './size';
var convertMenShirtSize = function (sizeCountry, size) {
    return convertSize(sizeCountry, size, 'men_shirt');
};
var convertMenShoesSize = function (sizeCountry, size) {
    return convertSize(sizeCountry, size, 'men_shoes');
};
var convertMenSuitsSize = function (sizeCountry, size) {
    return convertSize(sizeCountry, size, 'men_suit');
};
/**
 * Returns men's size conversions (shirts, shoes, and suits).
 *
 * @remarks
 * This is a size converter for guys.
 *
 * @example
 * Here's a simple example:
 * ```
 * import { convertMenSize } from 'whats-size'
 * const converter = convertMenSize('brazil')
 * converter.shoes('42')
 * // { brazil: "42", usa: "10½", europe: "44" }
 * ```
 *
 * @param sizeCountry - The country of origin (brazil, usa and europe)
 * @returns The curried function when you specify 'sizeCountry' and 'size' to get an object containing converted sizes by countries.
 */
export function convertMenSize(sizeCountry) {
    return {
        shirts: function (size) { return convertMenShirtSize(sizeCountry, size); },
        shoes: function (size) { return convertMenShoesSize(sizeCountry, size); },
        suits: function (size) { return convertMenSuitsSize(sizeCountry, size); },
        sizes: function () { return getMenSizes(sizeCountry); },
    };
}
/**
 * Returns the all men's conversion sizes (shirts, shoes and suits)
 *
 * @remarks
 * This is a size converter for children.
 *
 * @example
 * Here's a simple example:
 * ```
 * import { getMenSizes } from 'whats-size'
 * const sizes = getMenSizes('brazil')
 * // { shoes: { "42": { brazil: "42", usa: 10½, europe: 44 }, shirts: { ... } }
 * ```
 *
 * @param sizeCountry - The country of origin (brazil, usa and europe)
 * @returns The curried function when you specify 'size' to get an object containing converted sizes by countries.
 */
export var getMenSizes = function (sizeCountry) { return ({
    shirts: getSizes(sizeCountry, 'men_shirt'),
    shoes: getSizes(sizeCountry, 'men_shoes'),
    suits: getSizes(sizeCountry, 'men_suit'),
}); };
export default {
    convertMenSize: convertMenSize,
    getMenSizes: getMenSizes,
};
