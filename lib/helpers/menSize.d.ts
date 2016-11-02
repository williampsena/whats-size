import { ISizeConvert } from "./dataSize";
import { Size } from "./size";
export declare class MenSize extends Size {
    suits: ISizeConvert;
    shirts: ISizeConvert;
    shoes: ISizeConvert;
    constructor(country: string);
}
