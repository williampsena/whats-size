import { ISizeConvert, SizeConvert } from "./dataSize";
import { Size } from "./size";

/**
 * Helper class to convert kids sizes
 */
export class KidsSize extends Size {
    /**
     * Converter to clothes sizes
     */
    public clothes: ISizeConvert;
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

        this.clothes = new SizeConvert(this.dataSizes.kids_clothes[country]);
        this.shoes = new SizeConvert(this.dataSizes.kids_shoes[country]);
    }
};
