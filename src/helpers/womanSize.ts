import { ISizeConvert, SizeConvert } from "./dataSize";
import { Size } from "./size";

export class WomanSize extends Size {
    public blouses: ISizeConvert;
    public coats: ISizeConvert;
    public dresses: ISizeConvert;
    public shoes: ISizeConvert;
    public skirts: ISizeConvert;

    constructor(country: string) {
        super(country);

        this.blouses = new SizeConvert(this.dataSizes.woman_blouse[country]);
        this.coats = new SizeConvert(this.dataSizes.woman_coats_dress[country]);
        this.dresses = new SizeConvert(this.dataSizes.woman_coats_dress[country]);
        this.shoes = new SizeConvert(this.dataSizes.woman_shoes[country]);
        this.skirts = new SizeConvert(this.dataSizes.woman_coats_dress[country]);
    }
};
