import { DataSizeEntriesMap, HandlerConverterSize, SizeCountry } from '../types'
import { convertSize, getSizes } from './size'

const convertMenShirtSize = (sizeCountry: SizeCountry, size: string) =>
    convertSize(sizeCountry, size, 'men_shirt')

const convertMenShoesSize = (sizeCountry: SizeCountry, size: string) =>
    convertSize(sizeCountry, size, 'men_shoes')

const convertMenSuitsSize = (sizeCountry: SizeCountry, size: string) =>
    convertSize(sizeCountry, size, 'men_suit')

/**
 * Men size converter contract
 */
export interface MenSizeConverter {
    /**
     * Returns men shirts sizes
     *
     * @remarks
     * This is a method for obtaining clothes size converted.
     *
     * @param size - The size that will be converted
     * @returns The object with country-specific sizes organized by size origin.
     */
    shirts: HandlerConverterSize

    /**
     * Returns men shoes sizes
     *
     * @remarks
     * This is a method for obtaining clothes size converted.
     *
     * @param size - The size that will be converted
     * @returns The object with country-specific sizes organized by size origin.
     */
    shoes: HandlerConverterSize

    /**
     * Returns men shoes sizes
     *
     * @remarks
     * This is a method for obtaining clothes size converted.
     *
     * @param size - The size that will be converted
     * @returns The object with country-specific sizes organized by size origin.
     */
    suits: HandlerConverterSize

    /**
     * Returns all men sizes
     *
     * @remarks
     * This is a method for obtaining all possible clothing sizes.
     *
     * @param size - The size that will be converted
     * @returns The object with country-specific sizes organized by size origin.
     */
    sizes: () => AllMenSize
}

/**
 * All kids records of conversion sizes
 */
export type AllMenSize = {
    /**
     * Record of men shirts conversion sizes
     */
    shirts: DataSizeEntriesMap

    /**
     * Record of men shoes conversion sizes
     */
    shoes: DataSizeEntriesMap

    /**
     * Record of men suits conversion sizes
     */
    suits: DataSizeEntriesMap
}

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
export function convertMenSize(sizeCountry: SizeCountry): MenSizeConverter {
    return {
        shirts: size => convertMenShirtSize(sizeCountry, size),
        shoes: size => convertMenShoesSize(sizeCountry, size),
        suits: size => convertMenSuitsSize(sizeCountry, size),
        sizes: () => getMenSizes(sizeCountry),
    }
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
export const getMenSizes = (sizeCountry: SizeCountry) => ({
    shirts: getSizes(sizeCountry, 'men_shirt'),
    shoes: getSizes(sizeCountry, 'men_shoes'),
    suits: getSizes(sizeCountry, 'men_suit'),
})

export default {
    convertMenSize,
    getMenSizes,
}
