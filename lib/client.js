"use strict";
/* tslint:disable */
var WomanSizes = require("./helpers/womanSize");
var MenSizes = require("./helpers/menSize");
var KidsSize = require("./helpers/kidsSize");
/**
 * Simple class to group size helpers and expose to global context
 */
var WhatsSizes = (function () {
    function WhatsSizes() {
    }
    return WhatsSizes;
}());
/**
 * Kids size helper
 */
WhatsSizes.KidsSize = KidsSize.KidsSize;
/**
 * Men size helper
 */
WhatsSizes.MenSize = MenSizes.MenSize;
/**
 * Woman size helper
 */
WhatsSizes.WomanSize = WomanSizes.WomanSize;
window.WhatsSize = WhatsSizes;
//# sourceMappingURL=client.js.map