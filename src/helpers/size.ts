import { ISizeConvert, SizeConvert } from "./dataSize";
let dataSizes = require("../db/sizes.json");

export abstract class Size {
    public simple: ISizeConvert;
    protected dataSizes: any;

    constructor(country: string) {
        country = country.toLowerCase();
        this.dataSizes = dataSizes;

        this.simple = new SizeConvert(this.dataSizes.simple[country]);
    }
};
