export interface ISizeConvert {
    convert(size: string): any;
}

export class SizeConvert implements ISizeConvert {
    private sizes: any;

    constructor(sizes: any) {
        this.sizes = sizes;
    }

    public convert(size: string): any {
        let convertedSize = this.sizes[size];

        if (!convertedSize) {
            throw new Error("Size not found");
        }

        return convertedSize;
    }
};
