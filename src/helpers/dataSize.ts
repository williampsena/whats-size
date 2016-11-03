/** 
 * Common interface to convert sizes
 */
export interface ISizeConvert {
    convert(size: string): any;
}

/** 
 * Base class to convert sizes
 */
export class SizeConvert implements ISizeConvert {
    private sizes: any;

    /**
     * Default constructor
     * @param sizes  Contains object with specific sizes of type (clothes, shoes)
     */
    constructor(sizes: any) {
        this.sizes = sizes;
    }

    /**
     * Convert size to other country sizes
     *
     * @param size A size to be converted
     * @returns Object with global sizes
     */
    public convert(size: string): any {
        let convertedSize = this.sizes[size];

        if (!convertedSize) {
            throw new Error("Size not found");
        }

        return convertedSize;
    }
};
