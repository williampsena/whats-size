import { convertSize, getSizes } from './size';
var convertKidsClothesSize = function (sizeCountry, size) {
    return convertSize(sizeCountry, size, 'kids_clothes');
};
var convertKidsShoesSize = function (sizeCountry, size) {
    return convertSize(sizeCountry, size, 'kids_shoes');
};
/**
 * Returns the children's conversion sizes (clothes and shoes)
 *
 * @remarks
 * This is a size converter for children.
 *
 * @example
 * Here's a simple example:
 * ```
 * import { convertKidsSize } from 'whats-size'
 * const converter = convertKidsSize('brazil')
 * converter.shoes('29')
 * // { brazil: "29", usa: "10½", europe": "28" }
 * ```
 *
 * @param sizeCountry - The country of origin (brazil, usa and europe)
 * @returns The curried function when you specify 'sizeCountry' and 'size' to get an object containing converted sizes by countries.
 */
export function convertKidsSize(sizeCountry) {
    return {
        clothes: function (size) { return convertKidsClothesSize(sizeCountry, size); },
        shoes: function (size) { return convertKidsShoesSize(sizeCountry, size); },
        sizes: function () { return getKidSizes(sizeCountry); },
    };
}
/**
 * Returns the all children's conversion sizes (clothes and shoes)
 *
 * @remarks
 * This is a size converter for children.
 *
 * @example
 * Here's a simple example:
 * ```
 * import { getKidSizes } from 'whats-size'
 * const converter = getKidSizes('brazil')
 * converter.shoes('35')
 * // { shoes: { brazil: "29", usa: "10½", europe": "28" }, clothes: { ... } }
 * ```
 *
 * @param sizeCountry - The country of origin (brazil, usa and europe)
 * @returns The curried function when you specify 'size' to get an object containing converted sizes by countries.
 */
export var getKidSizes = function (sizeCountry) { return ({
    clothes: getSizes(sizeCountry, 'kids_clothes'),
    shoes: getSizes(sizeCountry, 'kids_shoes'),
}); };
export default {
    convertKidsSize: convertKidsSize,
    getKidSizes: getKidSizes,
};
