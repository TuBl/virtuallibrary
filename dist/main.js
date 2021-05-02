/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/images/banner-illustration.svg":
/*!***********************************************!*\
  !*** ./assets/images/banner-illustration.svg ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "37c8d8e3efa83c3045b3.svg";

/***/ }),

/***/ "./assets/images/book1.jpg":
/*!*********************************!*\
  !*** ./assets/images/book1.jpg ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "50a9affdb3f92c4483e7.jpg";

/***/ }),

/***/ "./assets/images/book2.jpg":
/*!*********************************!*\
  !*** ./assets/images/book2.jpg ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "194307b10439fed452fe.jpg";

/***/ }),

/***/ "./assets/images/book3.jpg":
/*!*********************************!*\
  !*** ./assets/images/book3.jpg ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "da58b779c2927cf99351.jpg";

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./assets/styles.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./assets/styles.css ***!
  \*****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_banner_illustration_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/banner-illustration.svg */ "./assets/images/banner-illustration.svg");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_banner_illustration_svg__WEBPACK_IMPORTED_MODULE_3__);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\n  font-size: min(max(1rem, 4vw), 22px);\n}\n\nbody {\n  min-height: 100vh;\n  height: auto;\n  width: 100vw;\n  display: -ms-grid;\n  display: grid;\n  place-items: center;\n  overflow-x: hidden;\n}\n\n*,\n*::before,\n*::after {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nul {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n  color: var(--text);\n}\n\nimg {\n  max-height: 250px;\n}\n\n.modal {\n  visibility: hidden;\n  height: 0px;\n  width: 0px;\n  position: relative;\n  opacity: 0;\n  -webkit-transition: visibility 300ms ease-in, height 300ms ease-in, width 300ms ease-in;\n  transition: visibility 300ms ease-in, height 300ms ease-in, width 300ms ease-in;\n}\n\n.modal--isvisible {\n  visibility: visible;\n  padding: 20%;\n  height: 100vh;\n  width: 100vw;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 50% auto;\n      grid-template-columns: 50% auto;\n  -ms-grid-rows: auto auto;\n      grid-template-rows: auto auto;\n      grid-template-areas: \"img    title\"\r \"img    description\";\n  background: #F5F5FC;\n  opacity: 1;\n  -webkit-transition: visibility 300ms ease-in, height 300ms ease-in, width 300ms ease-in;\n  transition: visibility 300ms ease-in, height 300ms ease-in, width 300ms ease-in;\n}\n\n.modal__title {\n  -ms-grid-row: 1;\n  -ms-grid-column: 2;\n  grid-area: title;\n  color: #7A5BF5;\n}\n\n.modal__description {\n  -ms-grid-row: 2;\n  -ms-grid-column: 2;\n  grid-area: description;\n  padding: 1rem;\n  padding-left: 0rem;\n}\n\n.modal__image {\n  -ms-grid-row: 1;\n  -ms-grid-row-span: 2;\n  -ms-grid-column: 1;\n  grid-area: img;\n  height: auto;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  place-self: center;\n}\n\n.modal span {\n  position: absolute;\n  display: -ms-grid;\n  display: grid;\n  place-items: center;\n  top: 50px;\n  right: 50px;\n  height: 4rem;\n  width: 4rem;\n  font-size: 2rem;\n  cursor: pointer;\n  background-color: #7A5BF5;\n  border-radius: 50%;\n  color: #fefefe;\n}\n\n.modal span:hover {\n  -webkit-transform: scale(0.9);\n          transform: scale(0.9);\n  -webkit-transition: -webkit-transform 100ms ease-in;\n  transition: -webkit-transform 100ms ease-in;\n  transition: transform 100ms ease-in;\n  transition: transform 100ms ease-in, -webkit-transform 100ms ease-in;\n}\n\n.container {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 1fr;\n      grid-template-columns: 1fr;\n  -ms-grid-rows: auto auto 1fr auto;\n      grid-template-rows: auto auto 1fr auto;\n      grid-template-areas: \"nav-bar\"\r \"banner\"\r \"main\"\r \"footer\";\n  width: 80%;\n  height: 100%;\n  min-height: 100vh;\n  position: relative;\n}\n\n.container--ishidden {\n  display: none;\n}\n\nnav {\n  -ms-grid-row: 1;\n  -ms-grid-column: 1;\n  grid-area: nav-bar;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding-top: 1rem;\n}\n\nnav svg {\n  cursor: pointer;\n}\n\nnav ul {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 50%;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n\nnav ul li {\n  padding-left: 2rem;\n  cursor: pointer;\n}\n\nnav ul li:hover {\n  color: #7A5BF5;\n  -webkit-transition: color 200ms ease-in;\n  transition: color 200ms ease-in;\n}\n\n.banner {\n  height: auto;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  background: #F5F5FC url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") right no-repeat;\n  padding: 4rem 1rem;\n  margin: 2rem 0;\n  border-radius: 16px;\n}\n\n.banner__title {\n  margin-bottom: 1rem;\n  color: #000000;\n}\n\n.banner__text {\n  margin-bottom: 1.5rem;\n  color: #7A5BF5;\n  opacity: 0.9;\n}\n\n.banner__btn {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 0.5rem 2rem;\n  background-color: #BAC5F4;\n  color: #fefefe;\n  border: transparent;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.banner__btn:hover {\n  background-color: #7A5BF5;\n  -webkit-transition: background-color 100ms ease-in-out;\n  transition: background-color 100ms ease-in-out;\n}\n\n.main-heading {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  margin-bottom: 1rem;\n}\n\n.main-heading h5 {\n  color: #7A5BF5;\n  cursor: pointer;\n}\n\n.books-container {\n  -ms-grid-row: 3;\n  -ms-grid-column: 1;\n  grid-area: main;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: (minmax(300px, 1fr))[auto-fit];\n      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 2rem 2rem;\n  justify-items: center;\n  cursor: pointer;\n}\n\n.books-container__book {\n  background: #F5F5FC;\n  width: 100%;\n  display: -ms-grid;\n  display: grid;\n  place-items: center;\n  text-align: center;\n  padding: 2rem;\n  margin: 1rem;\n  border-radius: 5px;\n  position: relative;\n}\n\n.books-container__book:hover {\n  -webkit-transform: scale(1.05);\n          transform: scale(1.05);\n  -webkit-transition: -webkit-transform 100ms ease-in-out;\n  transition: -webkit-transform 100ms ease-in-out;\n  transition: transform 100ms ease-in-out;\n  transition: transform 100ms ease-in-out, -webkit-transform 100ms ease-in-out;\n}\n\n.books-container__book h2 {\n  margin-bottom: 2rem;\n  pointer-events: none;\n}\n\n.books-container__book img {\n  margin-bottom: 1rem;\n  pointer-events: none;\n}\n\n.books-container__book p {\n  pointer-events: none;\n}\n\n.books-container__book p, .books-container__book span {\n  font-size: min(max(1rem, 4vw), 16px);\n}\n\n.books-container__book span {\n  position: absolute;\n  bottom: 10px;\n  right: 25px;\n  color: #7A5BF5;\n  cursor: pointer;\n}\n\n.books-container__book span:hover {\n  -webkit-transform: scale(1.05);\n          transform: scale(1.05);\n  -webkit-transition: -webkit-transform 100ms ease-in-out;\n  transition: -webkit-transform 100ms ease-in-out;\n  transition: transform 100ms ease-in-out;\n  transition: transform 100ms ease-in-out, -webkit-transform 100ms ease-in-out;\n}\n\n.books-container__book::after {\n  content: '15%';\n  height: 4rem;\n  width: 4rem;\n  background-color: #7A5BF5;\n  position: absolute;\n  right: -1rem;\n  top: -1rem;\n  border-radius: 50%;\n  display: -ms-grid;\n  display: grid;\n  place-items: center;\n  color: #fefefe;\n}\n\nfooter {\n  -ms-grid-row: 4;\n  -ms-grid-column: 1;\n  grid-area: footer;\n  place-items: center;\n  text-align: center;\n  padding: 1rem;\n}\n\nfooter strong {\n  color: #7A5BF5;\n}\n\n@media only screen and (max-width: 900px) {\n  .banner {\n    background: #F5F5FC;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=styles.css.map */", "",{"version":3,"sources":["webpack://./assets/styles.scss","webpack://./assets/styles.css"],"names":[],"mappings":"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","sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ (function(module) {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ (function(module) {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ (function(module) {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./assets/styles.css":
/*!***************************!*\
  !*** ./assets/styles.css ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./assets/styles.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/styles.css */ "./assets/styles.css");
/* harmony import */ var _assets_images_book1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/book1.jpg */ "./assets/images/book1.jpg");
/* harmony import */ var _assets_images_book2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/book2.jpg */ "./assets/images/book2.jpg");
/* harmony import */ var _assets_images_book3_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/book3.jpg */ "./assets/images/book3.jpg");




var container = document.getElementsByClassName("container")[0];
var modal = document.getElementById("modal");
var previousElement;
document.addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.matches('.books-container__book')) {
    previousElement = e.target;
    openModal(e);
  } else if (e.target.matches('.modal__exit')) {
    closeModal(previousElement);
  } else {
    return;
  }
}, false);

function closeModal(previousElement) {
  console.log(previousElement);
  modal.classList.toggle("modal--isvisible");
  container.classList.toggle("container--ishidden");
  setTimeout(function () {
    previousElement.scrollIntoView({
      block: "start",
      inline: "nearest",
      behavior: "smooth"
    });
  }, 500);
}

function openModal(e) {
  var modalTitle = modal.children[0];
  var modalImg = modal.children[1];
  var modalDescreption = modal.children[2];
  modal ? modalTitle.textContent = e.target.children[0].textContent : "", modalImg.setAttribute('src', e.target.children[1].src), modalDescreption.textContent = e.target.children[2].textContent;
  modal.classList.toggle("modal--isvisible");
  container.classList.toggle("container--ishidden");
  console.log(container.classList);
  console.log(modal.classList);
}
}();
/******/ })()
;
//# sourceMappingURL=main.js.map