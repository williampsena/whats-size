import { ISizeConvert, SizeConvert } from "./dataSize";
let dataSizes = require("../db/sizes.json");

/**
 * Base helper class to size converters
 */
export abstract class Size {
    /**
     * Converter to simples sizes (s, m, x, xxl, ...)
     */
    public simple: ISizeConvert;
    protected dataSizes: any;

    /**
     * Default constructor
     * @param country Must be the acronym of country source (eua, brl, eur)
     */
    constructor(country: string) {
        country = country.toLowerCase();
        this.dataSizes = dataSizes;

        this.simple = new SizeConvert(this.dataSizes.simple[country]);
    }
};
