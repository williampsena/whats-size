import { ISizeConvert } from "./dataSize";
import { Size } from "./size";
export declare class KidsSize extends Size {
    clothes: ISizeConvert;
    shoes: ISizeConvert;
    constructor(country: string);
}
