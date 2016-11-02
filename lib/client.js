"use strict";
/* tslint:disable */
var WomanSizes = require("./helpers/womanSize");
var MenSizes = require("./helpers/menSize");
var WhatsSizes = (function () {
    function WhatsSizes() {
    }
    return WhatsSizes;
}());
WhatsSizes.MenSize = MenSizes.MenSize;
WhatsSizes.WomanSize = WomanSizes.WomanSize;
window.WhatsSize = WhatsSizes;
//# sourceMappingURL=client.js.map