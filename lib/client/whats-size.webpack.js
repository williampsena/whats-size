/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var WomanSizes = __webpack_require__(1);
	var MenSizes = __webpack_require__(5);
	var WhatsSizes = (function () {
	    function WhatsSizes() {
	    }
	    WhatsSizes.MenSize = MenSizes.MenSize;
	    WhatsSizes.WomanSize = WomanSizes.WomanSize;
	    return WhatsSizes;
	}());
	window.WhatsSize = WhatsSizes;


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var dataSize_1 = __webpack_require__(2);
	var size_1 = __webpack_require__(3);
	var WomanSize = (function (_super) {
	    __extends(WomanSize, _super);
	    function WomanSize(country) {
	        _super.call(this, country);
	        this.blouses = new dataSize_1.SizeConvert(this.dataSizes.woman_blouse[country]);
	        this.coats = new dataSize_1.SizeConvert(this.dataSizes.woman_coats_dress[country]);
	        this.dresses = new dataSize_1.SizeConvert(this.dataSizes.woman_coats_dress[country]);
	        this.shoes = new dataSize_1.SizeConvert(this.dataSizes.woman_shoes[country]);
	        this.skirts = new dataSize_1.SizeConvert(this.dataSizes.woman_coats_dress[country]);
	    }
	    return WomanSize;
	}(size_1.Size));
	exports.WomanSize = WomanSize;
	;


/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * Base class to convert sizes
	 */
	var SizeConvert = (function () {
	    function SizeConvert(sizes) {
	        this.sizes = sizes;
	    }
	    /**
	     * Convert size to other country sizes
	     *
	     * @param size A size to be converted
	     */
	    SizeConvert.prototype.convert = function (size) {
	        var convertedSize = this.sizes[size];
	        if (!convertedSize) {
	            throw new Error("Size not found");
	        }
	        return convertedSize;
	    };
	    return SizeConvert;
	}());
	exports.SizeConvert = SizeConvert;
	;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var dataSize_1 = __webpack_require__(2);
	var dataSizes = __webpack_require__(4);
	var Size = (function () {
	    function Size(country) {
	        country = country.toLowerCase();
	        this.dataSizes = dataSizes;
	        this.simple = new dataSize_1.SizeConvert(this.dataSizes.simple[country]);
	    }
	    return Size;
	}());
	exports.Size = Size;
	;


/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = {
		"simple": {
			"key": "simple",
			"description": "simple",
			"brl": {
				"pp": {
					"brl": "pp",
					"usa": "xs",
					"eur": "xs"
				},
				"p": {
					"brl": "p",
					"usa": "s",
					"eur": "s"
				},
				"m": {
					"brl": "m",
					"usa": "m",
					"eur": "m"
				},
				"g": {
					"brl": "g",
					"usa": "l",
					"eur": "l"
				},
				"gg": {
					"brl": "gg",
					"usa": "xl",
					"eur": "xl"
				},
				"ggg": {
					"brl": "ggg",
					"usa": "xxl",
					"eur": ""
				}
			},
			"usa": {
				"xs": {
					"brl": "pp",
					"usa": "xs",
					"eur": "xs"
				},
				"s": {
					"brl": "p",
					"usa": "s",
					"eur": "s"
				},
				"m": {
					"brl": "m",
					"usa": "m",
					"eur": "m"
				},
				"l": {
					"brl": "g",
					"usa": "l",
					"eur": "l"
				},
				"xl": {
					"brl": "gg",
					"usa": "xl",
					"eur": "xl"
				},
				"xxl": {
					"brl": "ggg",
					"usa": "xxl",
					"eur": ""
				}
			},
			"eur": {
				"xs": {
					"brl": "pp",
					"usa": "xs",
					"eur": "xs"
				},
				"s": {
					"brl": "p",
					"usa": "s",
					"eur": "s"
				},
				"m": {
					"brl": "m",
					"usa": "m",
					"eur": "m"
				},
				"l": {
					"brl": "g",
					"usa": "l",
					"eur": "l"
				},
				"xl": {
					"brl": "gg",
					"usa": "xl",
					"eur": "xl"
				}
			}
		},
		"woman_coats_dress": {
			"key": "woman_coats_dress",
			"description": "coats, dresses, skirts",
			"brl": {
				"38": {
					"brl": "38",
					"usa": "4",
					"eur": "38"
				},
				"40": {
					"brl": "40",
					"usa": "6",
					"eur": "40"
				},
				"42": {
					"brl": "42",
					"usa": "8",
					"eur": "42"
				},
				"44": {
					"brl": "44",
					"usa": "10",
					"eur": "44"
				},
				"46": {
					"brl": "46",
					"usa": "12",
					"eur": "46"
				},
				"48": {
					"brl": "48",
					"usa": "14",
					"eur": "48"
				},
				"50": {
					"brl": "50",
					"usa": "16",
					"eur": "50"
				}
			},
			"usa": {
				"4": {
					"brl": "38",
					"usa": "4",
					"eur": "38"
				},
				"6": {
					"brl": "40",
					"usa": "6",
					"eur": "40"
				},
				"8": {
					"brl": "42",
					"usa": "8",
					"eur": "42"
				},
				"10": {
					"brl": "44",
					"usa": "10",
					"eur": "44"
				},
				"12": {
					"brl": "46",
					"usa": "12",
					"eur": "46"
				},
				"14": {
					"brl": "48",
					"usa": "14",
					"eur": "48"
				},
				"16": {
					"brl": "50",
					"usa": "16",
					"eur": "50"
				},
				"18": {
					"brl": "",
					"usa": "18",
					"eur": "52"
				}
			},
			"eur": {
				"38": {
					"brl": "38",
					"usa": "4",
					"eur": "38"
				},
				"40": {
					"brl": "40",
					"usa": "6",
					"eur": "40"
				},
				"42": {
					"brl": "42",
					"usa": "8",
					"eur": "42"
				},
				"44": {
					"brl": "44",
					"usa": "10",
					"eur": "44"
				},
				"46": {
					"brl": "46",
					"usa": "12",
					"eur": "46"
				},
				"48": {
					"brl": "48",
					"usa": "14",
					"eur": "48"
				},
				"50": {
					"brl": "50",
					"usa": "16",
					"eur": "50"
				},
				"52": {
					"brl": "",
					"usa": "18",
					"eur": "52"
				}
			}
		},
		"woman_blouse": {
			"key": "woman_blouse",
			"description": "blouses",
			"brl": {
				"38": {
					"brl": "38",
					"usa": "6",
					"eur": "40"
				},
				"40": {
					"brl": "40",
					"usa": "8",
					"eur": "42"
				},
				"42": {
					"brl": "42",
					"usa": "10",
					"eur": "44"
				},
				"44": {
					"brl": "44",
					"usa": "12",
					"eur": "46"
				},
				"46": {
					"brl": "46",
					"usa": "14",
					"eur": "48"
				},
				"48": {
					"brl": "48",
					"usa": "16",
					"eur": "50"
				},
				"50": {
					"brl": "50",
					"usa": "18",
					"eur": "52"
				}
			},
			"usa": {
				"6": {
					"brl": "38",
					"usa": "6",
					"eur": "40"
				},
				"8": {
					"brl": "40",
					"usa": "8",
					"eur": "42"
				},
				"10": {
					"brl": "42",
					"usa": "10",
					"eur": "44"
				},
				"12": {
					"brl": "44",
					"usa": "12",
					"eur": "46"
				},
				"14": {
					"brl": "46",
					"usa": "14",
					"eur": "48"
				},
				"16": {
					"brl": "48",
					"usa": "16",
					"eur": "50"
				},
				"18": {
					"brl": "50",
					"usa": "18",
					"eur": "52"
				}
			},
			"eur": {
				"40": {
					"brl": "38",
					"usa": "6",
					"eur": "40"
				},
				"42": {
					"brl": "40",
					"usa": "8",
					"eur": "42"
				},
				"44": {
					"brl": "42",
					"usa": "10",
					"eur": "44"
				},
				"46": {
					"brl": "44",
					"usa": "12",
					"eur": "46"
				},
				"48": {
					"brl": "46",
					"usa": "14",
					"eur": "48"
				},
				"50": {
					"brl": "48",
					"usa": "16",
					"eur": "50"
				},
				"52": {
					"brl": "50",
					"usa": "18",
					"eur": "52"
				}
			}
		},
		"woman_shoes": {
			"key": "woman_shoes",
			"description": "shoes",
			"brl": {
				"35": {
					"brl": "35",
					"usa": "5½",
					"eur": "37"
				},
				"36": {
					"brl": "36",
					"usa": "6",
					"eur": "38½"
				},
				"37": {
					"brl": "37",
					"usa": "6½",
					"eur": "39"
				},
				"38": {
					"brl": "38",
					"usa": "7½",
					"eur": "39½"
				},
				"39": {
					"brl": "39",
					"usa": "8½",
					"eur": "40"
				},
				"40": {
					"brl": "40",
					"usa": "9",
					"eur": "40½"
				}
			},
			"usa": {
				"6": {
					"brl": "36",
					"usa": "6",
					"eur": "38½"
				},
				"9": {
					"brl": "40",
					"usa": "9",
					"eur": "40½"
				},
				"5½": {
					"brl": "35",
					"usa": "5½",
					"eur": "37"
				},
				"6½": {
					"brl": "37",
					"usa": "6½",
					"eur": "39"
				},
				"7½": {
					"brl": "38",
					"usa": "7½",
					"eur": "39½"
				},
				"8½": {
					"brl": "39",
					"usa": "8½",
					"eur": "40"
				}
			},
			"eur": {
				"37": {
					"brl": "35",
					"usa": "5½",
					"eur": "37"
				},
				"39": {
					"brl": "37",
					"usa": "6½",
					"eur": "39"
				},
				"40": {
					"brl": "39",
					"usa": "8½",
					"eur": "40"
				},
				"38½": {
					"brl": "36",
					"usa": "6",
					"eur": "38½"
				},
				"39½": {
					"brl": "38",
					"usa": "7½",
					"eur": "39½"
				},
				"40½": {
					"brl": "40",
					"usa": "9",
					"eur": "40½"
				}
			}
		},
		"men_shirt": {
			"key": "men_shirt",
			"description": "shirts",
			"brl": {
				"1": {
					"brl": "1",
					"usa": "14 14½",
					"eur": "36 37"
				},
				"2": {
					"brl": "2",
					"usa": "15",
					"eur": "38"
				},
				"3": {
					"brl": "3",
					"usa": "15½ 16",
					"eur": "39 41"
				},
				"4": {
					"brl": "4",
					"usa": "16½ 17",
					"eur": "42 43"
				},
				"5": {
					"brl": "5",
					"usa": "17½ 18",
					"eur": "44 45"
				},
				"35": {
					"brl": "35",
					"usa": "14",
					"eur": "36"
				},
				"37": {
					"brl": "37",
					"usa": "15",
					"eur": "38"
				},
				"39": {
					"brl": "39",
					"usa": "15½",
					"eur": "39"
				},
				"40": {
					"brl": "40",
					"usa": "16",
					"eur": "41"
				},
				"41": {
					"brl": "41",
					"usa": "16½",
					"eur": "42"
				},
				"42": {
					"brl": "42",
					"usa": "17",
					"eur": "43"
				},
				"43": {
					"brl": "43",
					"usa": "17½",
					"eur": "44"
				},
				"44": {
					"brl": "44",
					"usa": "18",
					"eur": "45"
				}
			},
			"usa": {
				"14": {
					"brl": "35",
					"usa": "14",
					"eur": "36"
				},
				"15": {
					"brl": "37",
					"usa": "15",
					"eur": "38"
				},
				"16": {
					"brl": "40",
					"usa": "16",
					"eur": "41"
				},
				"17": {
					"brl": "42",
					"usa": "17",
					"eur": "43"
				},
				"18": {
					"brl": "44",
					"usa": "18",
					"eur": "45"
				},
				"14 14½": {
					"brl": "1",
					"usa": "14 14½",
					"eur": "36 37"
				},
				"15½ 16": {
					"brl": "3",
					"usa": "15½ 16",
					"eur": "39 41"
				},
				"16½ 17": {
					"brl": "4",
					"usa": "16½ 17",
					"eur": "42 43"
				},
				"17½ 18": {
					"brl": "5",
					"usa": "17½ 18",
					"eur": "44 45"
				},
				"15½": {
					"brl": "39",
					"usa": "15½",
					"eur": "39"
				},
				"16½": {
					"brl": "41",
					"usa": "16½",
					"eur": "42"
				},
				"17½": {
					"brl": "43",
					"usa": "17½",
					"eur": "44"
				}
			},
			"eur": {
				"36": {
					"brl": "35",
					"usa": "14",
					"eur": "36"
				},
				"38": {
					"brl": "37",
					"usa": "15",
					"eur": "38"
				},
				"39": {
					"brl": "39",
					"usa": "15½",
					"eur": "39"
				},
				"41": {
					"brl": "40",
					"usa": "16",
					"eur": "41"
				},
				"42": {
					"brl": "41",
					"usa": "16½",
					"eur": "42"
				},
				"43": {
					"brl": "42",
					"usa": "17",
					"eur": "43"
				},
				"44": {
					"brl": "43",
					"usa": "17½",
					"eur": "44"
				},
				"45": {
					"brl": "44",
					"usa": "18",
					"eur": "45"
				},
				"36 37": {
					"brl": "1",
					"usa": "14 14½",
					"eur": "36 37"
				},
				"39 41": {
					"brl": "3",
					"usa": "15½ 16",
					"eur": "39 41"
				},
				"42 43": {
					"brl": "4",
					"usa": "16½ 17",
					"eur": "42 43"
				},
				"44 45": {
					"brl": "5",
					"usa": "17½ 18",
					"eur": "44 45"
				}
			}
		},
		"men_shoes": {
			"key": "men_shoes",
			"description": "shoes",
			"brl": {
				"39": {
					"brl": "39",
					"usa": "8",
					"eur": "41"
				},
				"40": {
					"brl": "40",
					"usa": "8½",
					"eur": "42"
				},
				"41": {
					"brl": "41",
					"usa": "9",
					"eur": "43"
				},
				"42": {
					"brl": "42",
					"usa": "10½",
					"eur": "44"
				},
				"43": {
					"brl": "43",
					"usa": "11½",
					"eur": "45"
				},
				"44": {
					"brl": "44",
					"usa": "12½",
					"eur": "46½"
				},
				"45": {
					"brl": "45",
					"usa": "13",
					"eur": "48"
				},
				"46": {
					"brl": "46",
					"usa": "13½",
					"eur": "48½"
				}
			},
			"usa": {
				"8": {
					"brl": "39",
					"usa": "8",
					"eur": "41"
				},
				"9": {
					"brl": "41",
					"usa": "9",
					"eur": "43"
				},
				"13": {
					"brl": "45",
					"usa": "13",
					"eur": "48"
				},
				"8½": {
					"brl": "40",
					"usa": "8½",
					"eur": "42"
				},
				"10½": {
					"brl": "42",
					"usa": "10½",
					"eur": "44"
				},
				"11½": {
					"brl": "43",
					"usa": "11½",
					"eur": "45"
				},
				"12½": {
					"brl": "44",
					"usa": "12½",
					"eur": "46½"
				},
				"13½": {
					"brl": "46",
					"usa": "13½",
					"eur": "48½"
				}
			},
			"eur": {
				"41": {
					"brl": "39",
					"usa": "8",
					"eur": "41"
				},
				"42": {
					"brl": "40",
					"usa": "8½",
					"eur": "42"
				},
				"43": {
					"brl": "41",
					"usa": "9",
					"eur": "43"
				},
				"44": {
					"brl": "42",
					"usa": "10½",
					"eur": "44"
				},
				"45": {
					"brl": "43",
					"usa": "11½",
					"eur": "45"
				},
				"48": {
					"brl": "45",
					"usa": "13",
					"eur": "48"
				},
				"46½": {
					"brl": "44",
					"usa": "12½",
					"eur": "46½"
				},
				"48½": {
					"brl": "46",
					"usa": "13½",
					"eur": "48½"
				}
			}
		},
		"men_suit": {
			"key": "men_suit",
			"description": "suit",
			"brl": {
				"46": {
					"brl": "46",
					"usa": "36",
					"eur": "46"
				},
				"48": {
					"brl": "48",
					"usa": "40",
					"eur": "50"
				},
				"50": {
					"brl": "50",
					"usa": "44",
					"eur": "54"
				},
				"52": {
					"brl": "52",
					"usa": "46",
					"eur": "56"
				},
				"54": {
					"brl": "54",
					"usa": "48",
					"eur": "58"
				}
			},
			"usa": {
				"34": {
					"brl": "",
					"usa": "34",
					"eur": "44"
				},
				"36": {
					"brl": "46",
					"usa": "36",
					"eur": "46"
				},
				"38": {
					"brl": "",
					"usa": "38",
					"eur": "48"
				},
				"40": {
					"brl": "48",
					"usa": "40",
					"eur": "50"
				},
				"42": {
					"brl": "",
					"usa": "42",
					"eur": "52"
				},
				"44": {
					"brl": "50",
					"usa": "44",
					"eur": "54"
				},
				"46": {
					"brl": "52",
					"usa": "46",
					"eur": "56"
				},
				"48": {
					"brl": "54",
					"usa": "48",
					"eur": "58"
				}
			},
			"eur": {
				"44": {
					"brl": "",
					"usa": "34",
					"eur": "44"
				},
				"46": {
					"brl": "46",
					"usa": "36",
					"eur": "46"
				},
				"48": {
					"brl": "",
					"usa": "38",
					"eur": "48"
				},
				"50": {
					"brl": "48",
					"usa": "40",
					"eur": "50"
				},
				"52": {
					"brl": "",
					"usa": "42",
					"eur": "52"
				},
				"54": {
					"brl": "50",
					"usa": "44",
					"eur": "54"
				},
				"56": {
					"brl": "52",
					"usa": "46",
					"eur": "56"
				},
				"58": {
					"brl": "54",
					"usa": "48",
					"eur": "58"
				}
			}
		},
		"kids_clothes": {
			"key": "kids_clothes",
			"description": "clothes",
			"brl": {
				"2": {
					"brl": "2",
					"usa": "2 3",
					"eur": "2 3"
				},
				"4": {
					"brl": "4",
					"usa": "4 5",
					"eur": "4 5"
				},
				"6": {
					"brl": "6",
					"usa": "6 7",
					"eur": "6 7"
				},
				"8": {
					"brl": "8",
					"usa": "8 9",
					"eur": "8 9"
				},
				"10": {
					"brl": "10",
					"usa": "10",
					"eur": "10 11"
				},
				"12": {
					"brl": "12",
					"usa": "12",
					"eur": "12"
				},
				"14": {
					"brl": "14",
					"usa": "14",
					"eur": "14"
				},
				"16+": {
					"brl": "16+",
					"usa": "16",
					"eur": "14+"
				}
			},
			"usa": {
				"10": {
					"brl": "10",
					"usa": "10",
					"eur": "10 11"
				},
				"12": {
					"brl": "12",
					"usa": "12",
					"eur": "12"
				},
				"14": {
					"brl": "14",
					"usa": "14",
					"eur": "14"
				},
				"16": {
					"brl": "16+",
					"usa": "16",
					"eur": "14+"
				},
				"2 3": {
					"brl": "2",
					"usa": "2 3",
					"eur": "2 3"
				},
				"4 5": {
					"brl": "4",
					"usa": "4 5",
					"eur": "4 5"
				},
				"6 7": {
					"brl": "6",
					"usa": "6 7",
					"eur": "6 7"
				},
				"8 9": {
					"brl": "8",
					"usa": "8 9",
					"eur": "8 9"
				}
			},
			"eur": {
				"12": {
					"brl": "12",
					"usa": "12",
					"eur": "12"
				},
				"14": {
					"brl": "14",
					"usa": "14",
					"eur": "14"
				},
				"2 3": {
					"brl": "2",
					"usa": "2 3",
					"eur": "2 3"
				},
				"4 5": {
					"brl": "4",
					"usa": "4 5",
					"eur": "4 5"
				},
				"6 7": {
					"brl": "6",
					"usa": "6 7",
					"eur": "6 7"
				},
				"8 9": {
					"brl": "8",
					"usa": "8 9",
					"eur": "8 9"
				},
				"10 11": {
					"brl": "10",
					"usa": "10",
					"eur": "10 11"
				},
				"14+": {
					"brl": "16+",
					"usa": "16",
					"eur": "14+"
				}
			}
		},
		"kids_shoes": {
			"key": "kids_shoes",
			"description": "shoes",
			"brl": {
				"28": {
					"brl": "28",
					"usa": "9½",
					"eur": "27"
				},
				"29": {
					"brl": "29",
					"usa": "10½",
					"eur": "28"
				},
				"30": {
					"brl": "30",
					"usa": "11½",
					"eur": "29"
				},
				"31": {
					"brl": "31",
					"usa": "12½",
					"eur": "30"
				},
				"32": {
					"brl": "32",
					"usa": "13½",
					"eur": "32"
				},
				"33": {
					"brl": "33",
					"usa": "14½",
					"eur": "33"
				},
				"24 25": {
					"brl": "24 25",
					"usa": "7½",
					"eur": "24"
				},
				"26 27": {
					"brl": "26 27",
					"usa": "8½",
					"eur": "25½"
				}
			},
			"usa": {
				"7½": {
					"brl": "24 25",
					"usa": "7½",
					"eur": "24"
				},
				"8½": {
					"brl": "26 27",
					"usa": "8½",
					"eur": "25½"
				},
				"9½": {
					"brl": "28",
					"usa": "9½",
					"eur": "27"
				},
				"10½": {
					"brl": "29",
					"usa": "10½",
					"eur": "28"
				},
				"11½": {
					"brl": "30",
					"usa": "11½",
					"eur": "29"
				},
				"12½": {
					"brl": "31",
					"usa": "12½",
					"eur": "30"
				},
				"13½": {
					"brl": "32",
					"usa": "13½",
					"eur": "32"
				},
				"14½": {
					"brl": "33",
					"usa": "14½",
					"eur": "33"
				}
			},
			"eur": {
				"24": {
					"brl": "24 25",
					"usa": "7½",
					"eur": "24"
				},
				"27": {
					"brl": "28",
					"usa": "9½",
					"eur": "27"
				},
				"28": {
					"brl": "29",
					"usa": "10½",
					"eur": "28"
				},
				"29": {
					"brl": "30",
					"usa": "11½",
					"eur": "29"
				},
				"30": {
					"brl": "31",
					"usa": "12½",
					"eur": "30"
				},
				"32": {
					"brl": "32",
					"usa": "13½",
					"eur": "32"
				},
				"33": {
					"brl": "33",
					"usa": "14½",
					"eur": "33"
				},
				"25½": {
					"brl": "26 27",
					"usa": "8½",
					"eur": "25½"
				}
			}
		}
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var dataSize_1 = __webpack_require__(2);
	var size_1 = __webpack_require__(3);
	var MenSize = (function (_super) {
	    __extends(MenSize, _super);
	    function MenSize(country) {
	        _super.call(this, country);
	        this.shirts = new dataSize_1.SizeConvert(this.dataSizes.men_shirt[country]);
	        this.shoes = new dataSize_1.SizeConvert(this.dataSizes.men_shoes[country]);
	        this.suits = new dataSize_1.SizeConvert(this.dataSizes.men_suit[country]);
	    }
	    return MenSize;
	}(size_1.Size));
	exports.MenSize = MenSize;
	;


/***/ }
/******/ ]);
//# sourceMappingURL=whats-size.webpack.js.map