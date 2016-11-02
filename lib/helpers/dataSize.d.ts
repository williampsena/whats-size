export interface ISizeConvert {
    convert(size: string): any;
}
export declare class SizeConvert implements ISizeConvert {
    private sizes;
    constructor(sizes: any);
    convert(size: string): any;
}
