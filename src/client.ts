/* tslint:disable */
import * as WomanSizes from "./helpers/womanSize";
import * as MenSizes from "./helpers/menSize";

class WhatsSizes {
    public static MenSize:any = MenSizes.MenSize;
    public static WomanSize:any = WomanSizes.WomanSize;
}

(<any> window).WhatsSize = WhatsSizes;
