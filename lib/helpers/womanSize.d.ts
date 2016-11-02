import { ISizeConvert } from "./dataSize";
import { Size } from "./size";
export declare class WomanSize extends Size {
    blouses: ISizeConvert;
    coats: ISizeConvert;
    dresses: ISizeConvert;
    shoes: ISizeConvert;
    skirts: ISizeConvert;
    constructor(country: string);
}
