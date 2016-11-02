import { ISizeConvert, SizeConvert } from "./dataSize";
import { Size } from "./size";

export class MenSize extends Size {
    public suits: ISizeConvert;
    public shirts: ISizeConvert;
    public shoes: ISizeConvert;

    constructor(country: string) {
        super(country);

        this.shirts = new SizeConvert(this.dataSizes.men_shirt[country]);
        this.shoes = new SizeConvert(this.dataSizes.men_shoes[country]);
        this.suits = new SizeConvert(this.dataSizes.men_suit[country]);
    }
};
