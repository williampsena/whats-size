import { ISizeConvert, SizeConvert } from "./dataSize";
import { Size } from "./size";

/**
 * Helper class to men sizes converters
 */
export class MenSize extends Size {
    /**
     * Converter to suits sizes
     */
    public suits: ISizeConvert;
    /**
     * Converter to shirts sizes
     */
    public shirts: ISizeConvert;
    /**
     * Converter to shoes sizes
     */
    public shoes: ISizeConvert;

    /**
     * Default constructor
     * @param country Must be the acronym of country source (eua, brl, eur)
     */
    constructor(country: string) {
        super(country);

        this.shirts = new SizeConvert(this.dataSizes.men_shirt[country]);
        this.shoes = new SizeConvert(this.dataSizes.men_shoes[country]);
        this.suits = new SizeConvert(this.dataSizes.men_suit[country]);
    }
};
