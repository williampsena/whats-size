/* tslint:disable */
import * as WomenSizes from "./helpers/womenSize";
import * as MenSizes from "./helpers/menSize";
import * as KidsSize from "./helpers/kidsSize";

/**
 * Simple class to group size helpers and expose to global context
 */
class WhatsSizes {
    /**
     * Kids size helper 
     */
    public static KidsSize: any = KidsSize.KidsSize;
    /**
     * Men size helper 
     */
    public static MenSize: any = MenSizes.MenSize;
    /**
     * Women size helper 
     */
    public static WomenSize: any = WomenSizes.WomenSize;
}

(<any>window).WhatsSize = WhatsSizes;
