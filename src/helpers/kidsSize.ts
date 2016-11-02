import { ISizeConvert, SizeConvert } from "./dataSize";
import { Size } from "./size";

export class KidsSize extends Size {
    public clothes: ISizeConvert;
    public shoes: ISizeConvert;

    constructor(country: string) {
        super(country);

        this.clothes = new SizeConvert(this.dataSizes.kids_clothes[country]);
        this.shoes = new SizeConvert(this.dataSizes.kids_shoes[country]);
    }
};
