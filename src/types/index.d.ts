/**
 * Countries support
 */
export type SizeCountry = 'brazil' | 'usa' | 'europe'

/**
 * Data sizes conversion types
 */
export type DataSizesKey =
    | 'generic'
    | 'women_coats_dress'
    | 'women_blouse'
    | 'women_shoes'
    | 'men_shirt'
    | 'men_shoes'
    | 'men_suit'
    | 'kids_clothes'
    | 'kids_shoes'

/**
 * List sizes mappings per country
 */
export type DataSizes = Record<DataSizesKey, DataSize>

/**
 * All list sizes mappings
 */
export type DataSizeEntriesMap = Record<string, DataSizeEntryConversion>

/**
 * List sizes conversions
 */
export type DataSizeEntryConversion = Record<string, Record<string, string>>

/**
 * Data size structure
 */
export type DataSize = {
    /**
     * Data size key type
     */
    key: string

    /**
     * Size description
     */
    description: string

    /**
     * Brazil sizes
     */
    brazil: DataSizeEntriesMap

    /**
     * United States of America sizes
     */
    usa: DataSizeEntriesMap

    /**
     * Europe sizes
     */
    europe: DataSizeEntriesMap
}

/**
 * Handler function to convert size
 */
export type HandlerConverterSize = (size: string) => DataSizeEntryConversion
