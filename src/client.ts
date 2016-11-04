/* tslint:disable */
import * as WomanSizes from "./helpers/womanSize";
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
     * Woman size helper 
     */
    public static WomanSize: any = WomanSizes.WomanSize;
}

(<any>window).WhatsSize = WhatsSizes;
