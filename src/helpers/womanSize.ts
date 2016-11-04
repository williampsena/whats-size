import { ISizeConvert, SizeConvert } from "./dataSize";
import { Size } from "./size";

/**
 * Helper class to woman sizes converters
 */
export class WomanSize extends Size {
    /**
     * Converter to blouses sizes
     */
    public blouses: ISizeConvert;

    /**
     * Converter to coats sizes
     */
    public coats: ISizeConvert;

    /**
     * Converter to dresses sizes
     */
    public dresses: ISizeConvert;

    /**
     * Converter to shoes sizes
     */
    public shoes: ISizeConvert;

    /**
     * Converter to skirts sizes
     */
    public skirts: ISizeConvert;

    /**
     * Default constructor
     * @param country Must be the acronym of country source (eua, brl, eur)
     */
    constructor(country: string) {
        super(country);

        this.blouses = new SizeConvert(this.dataSizes.woman_blouse[country]);
        this.coats = new SizeConvert(this.dataSizes.woman_coats_dress[country]);
        this.dresses = new SizeConvert(this.dataSizes.woman_coats_dress[country]);
        this.shoes = new SizeConvert(this.dataSizes.woman_shoes[country]);
        this.skirts = new SizeConvert(this.dataSizes.woman_coats_dress[country]);
    }
};
