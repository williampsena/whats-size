import { DataSizeEntriesMap, HandlerConverterSize, SizeCountry } from '../types';
/**
 * Kids size converter contract
 */
export interface KidsSizeConverter {
    /**
     * Returns children clothes sizes
     *
     * @remarks
     * This is a method for obtaining clothes size converted.
     *
     * @param size - The size that will be converted
     * @returns The object with country-specific sizes organized by size origin.
     */
    clothes: HandlerConverterSize;
    /**
     * Returns children shoes sizes
     *
     * @remarks
     * This is a method for obtaining shoes size converted.
     *
     * @param size - The size that will be converted
     * @returns The object with country-specific sizes organized by size origin.
     */
    shoes: HandlerConverterSize;
    /**
     * Returns all children sizes
     *
     * @remarks
     * This is a method for obtaining all possible clothing sizes.
     *
     * @param size - The size that will be converted
     * @returns The object with country-specific sizes organized by size origin.
     */
    sizes: () => AllKidsSize;
}
/**
 * All children records of conversion sizes
 */
export type AllKidsSize = {
    /**
     * Record of children's clothes conversion sizes
     */
    clothes: DataSizeEntriesMap;
    /**
     * Record of children's shoes conversion sizes
     */
    shoes: DataSizeEntriesMap;
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
export declare function convertKidsSize(sizeCountry: SizeCountry): KidsSizeConverter;
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
export declare const getKidSizes: (sizeCountry: SizeCountry) => {
    clothes: DataSizeEntriesMap;
    shoes: DataSizeEntriesMap;
};
declare const _default: {
    convertKidsSize: typeof convertKidsSize;
    getKidSizes: (sizeCountry: SizeCountry) => {
        clothes: DataSizeEntriesMap;
        shoes: DataSizeEntriesMap;
    };
};
export default _default;
