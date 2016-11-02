import { ISizeConvert } from "./dataSize";
export declare abstract class Size {
    simple: ISizeConvert;
    protected dataSizes: any;
    constructor(country: string);
}
