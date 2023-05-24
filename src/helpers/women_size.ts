import { DataSizeEntriesMap, HandlerConverterSize, SizeCountry } from '../types'
import { convertSize, getSizes } from './size'

const convertWomenBlouseSize = (sizeCountry: SizeCountry, size: string) =>
    convertSize(sizeCountry, size, 'women_blouse')

const convertWomenCoatsDressSize = (sizeCountry: SizeCountry, size: string) =>
    convertSize(sizeCountry, size, 'women_coats_dress')

const convertWomenShoesSize = (sizeCountry: SizeCountry, size: string) =>
    convertSize(sizeCountry, size, 'women_shoes')

/**
 * Women size converter contract
 */
export interface WomenSizeConverter {
    blouses: HandlerConverterSize
    coats: HandlerConverterSize
    dresses: HandlerConverterSize
    shoes: HandlerConverterSize
    skirts: HandlerConverterSize

    /**
     * Returns all men sizes
     *
     * @remarks
     * This is a method for obtaining all possible clothing sizes.
     *
     * @param size - The size that will be converted
     * @returns The object with country-specific sizes organized by size origin.
     */
    sizes: () => AllWomenSize
}

/**
 * All kids records of conversion sizes
 */
export type AllWomenSize = {
    /**
     * Record of women blouses conversion sizes
     */
    blouses: DataSizeEntriesMap

    /**
     * Record of women coats conversion sizes
     */
    coats: DataSizeEntriesMap

    /**
     * Record of women dresses conversion sizes
     */
    dresses: DataSizeEntriesMap

    /**
     * Record of women shoes conversion sizes
     */
    shoes: DataSizeEntriesMap

    /**
     * Record of women skirts conversion sizes
     */
    skirts: DataSizeEntriesMap
}

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
export function convertWomenSize(sizeCountry: SizeCountry): WomenSizeConverter {
    return {
        blouses: size => convertWomenBlouseSize(sizeCountry, size),
        coats: size => convertWomenCoatsDressSize(sizeCountry, size),
        dresses: size => convertWomenCoatsDressSize(sizeCountry, size),
        shoes: size => convertWomenShoesSize(sizeCountry, size),
        skirts: size => convertWomenCoatsDressSize(sizeCountry, size),
        sizes: () => getWomenSizes(sizeCountry),
    }
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
export const getWomenSizes = (sizeCountry: SizeCountry) => {
    const blouses = getSizes(sizeCountry, 'women_blouse')
    const coatsAndDress = getSizes(sizeCountry, 'women_coats_dress')
    const shoes = getSizes(sizeCountry, 'women_shoes')

    return {
        blouses,
        coats: coatsAndDress,
        dresses: coatsAndDress,
        shoes,
        skirts: coatsAndDress,
    }
}

export default {
    convertWomenSize,
    getWomenSizes,
}
