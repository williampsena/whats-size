import { DataSizeEntriesMap, DataSizes, DataSizesKey, SizeCountry } from '../types'
export const DATA_SIZES: DataSizes = require('../db/sizes.json')

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
export function convertSize(
    sizeCountry: SizeCountry,
    size: string,
    dataSizeType: DataSizesKey = 'generic'
) {
    const sizes: DataSizeEntriesMap = getSizes(sizeCountry, dataSizeType)
    return sizes?.[size]
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
export function getSizes(
  sizeCountry: SizeCountry,
  dataSizeType: DataSizesKey = 'generic'
) {
  const sizes: DataSizeEntriesMap = DATA_SIZES[dataSizeType]?.[sizeCountry]
  return sizes
}


export default {
    convertSize,
    getSizes
}
