/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/common.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/common.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/search_button.png */ \"./src/images/search_button.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  box-sizing: border-box !important;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  font-size: 14px;\\r\\n  background-color: #222222;\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\na {\\r\\n  color: inherit;\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n#app {\\r\\n  padding-bottom: 48px;\\r\\n}\\r\\n\\r\\n*:focus {\\r\\n  outline: none;\\r\\n}\\r\\n.item-view,\\r\\n.item-test {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.item-view {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  width: 1200px;\\r\\n  margin: 0 auto;\\r\\n}\\r\\n\\r\\n.item-view h2 {\\r\\n  font-size: 2rem;\\r\\n  font-weight: bold;\\r\\n  user-select: none;\\r\\n}\\r\\n\\r\\n.alert-message {\\r\\n  margin: 24px auto;\\r\\n}\\r\\n\\r\\n.alert-title {\\r\\n  font-size: 24px;\\r\\n  font-weight: 600;\\r\\n  line-height: 20px;\\r\\n}\\r\\n\\r\\n.alert-sub-title {\\r\\n  font-size: 16px;\\r\\n  font-weight: 400;\\r\\n  line-height: 16px;\\r\\n}\\r\\n\\r\\n/* https://andrew.hedges.name/experiments/aspect_ratio/ */\\r\\n\\r\\n.item-list {\\r\\n  display: grid;\\r\\n  margin: 48px 0;\\r\\n  grid-template-columns: repeat(4, 180px);\\r\\n  grid-column-gap: 160px;\\r\\n  grid-row-gap: 48px;\\r\\n}\\r\\n\\r\\n.item-card {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.item-thumbnail {\\r\\n  border-radius: 8px;\\r\\n  width: 180px;\\r\\n  height: 270px;\\r\\n  background-size: contain;\\r\\n}\\r\\n\\r\\n.item-title {\\r\\n  margin-top: 16px;\\r\\n  font-size: 1.2rem;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n.item-score {\\r\\n  margin-top: 16px;\\r\\n  font-size: 1.2rem;\\r\\n}\\r\\n\\r\\n.item-score-align-sort {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  column-gap: 5px;\\r\\n}\\r\\n\\r\\n.item-score::after {\\r\\n  margin-left: 8px;\\r\\n}\\r\\n\\r\\n.item-title.skeleton::after,\\r\\n.item-score.skeleton::after {\\r\\n  font-size: 0;\\r\\n  content: 'loading';\\r\\n}\\r\\n\\r\\n.full-width {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.last-item {\\r\\n  margin-top: 48px;\\r\\n}\\r\\n\\r\\nbutton.btn {\\r\\n  border: 0;\\r\\n  border-radius: 8px;\\r\\n  height: 30px;\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\nbutton.primary {\\r\\n  background: #f33f3f;\\r\\n}\\r\\n\\r\\n.hidden {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.item-card .skeleton {\\r\\n  background: linear-gradient(-90deg, #aaa, #f0f0f0, #aaa, #f0f0f0);\\r\\n  background-size: 400%;\\r\\n  animation: skeleton-animation 5s infinite ease-out;\\r\\n  border-radius: 8px;\\r\\n}\\r\\n\\r\\n@keyframes skeleton-animation {\\r\\n  0% {\\r\\n    background-position: 0% 50%;\\r\\n  }\\r\\n  50% {\\r\\n    background-position: 100% 50%;\\r\\n  }\\r\\n  100% {\\r\\n    background-position: 0% 50%;\\r\\n  }\\r\\n}\\r\\nheader {\\r\\n  width: 100%;\\r\\n  min-width: 1200px;\\r\\n  height: 72px;\\r\\n  background-color: #222;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  padding: 0 20px;\\r\\n  border-bottom: 1px solid white;\\r\\n  margin-bottom: 48px;\\r\\n}\\r\\n\\r\\nheader h1 {\\r\\n  cursor: pointer;\\r\\n  user-select: none;\\r\\n  font-size: 2rem;\\r\\n  font-weight: bold;\\r\\n  letter-spacing: -0.1rem;\\r\\n  color: #f33f3f;\\r\\n}\\r\\n\\r\\nheader > .search-box {\\r\\n  background: #fff;\\r\\n  padding: 8px;\\r\\n  border-radius: 4px;\\r\\n}\\r\\n\\r\\nheader .search-box > input {\\r\\n  border: 0;\\r\\n}\\r\\n\\r\\nheader .search-box > .search-button {\\r\\n  width: 14px;\\r\\n  border: 0;\\r\\n  text-indent: -1000rem;\\r\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") transparent no-repeat 0 1px;\\r\\n  background-size: contain;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/styles/common.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* http://meyerweb.com/eric/tools/css/reset/\\r\\n   v2.0 | 20110126\\r\\n   License: none (public domain)\\r\\n*/\\r\\n\\r\\nhtml,\\r\\nbody,\\r\\ndiv,\\r\\nspan,\\r\\napplet,\\r\\nobject,\\r\\niframe,\\r\\nh1,\\r\\nh2,\\r\\nh3,\\r\\nh4,\\r\\nh5,\\r\\nh6,\\r\\np,\\r\\nblockquote,\\r\\npre,\\r\\na,\\r\\nabbr,\\r\\nacronym,\\r\\naddress,\\r\\nbig,\\r\\ncite,\\r\\ncode,\\r\\ndel,\\r\\ndfn,\\r\\nem,\\r\\nimg,\\r\\nins,\\r\\nkbd,\\r\\nq,\\r\\ns,\\r\\nsamp,\\r\\nsmall,\\r\\nstrike,\\r\\nstrong,\\r\\nsub,\\r\\nsup,\\r\\ntt,\\r\\nvar,\\r\\nb,\\r\\nu,\\r\\ni,\\r\\ncenter,\\r\\ndl,\\r\\ndt,\\r\\ndd,\\r\\nol,\\r\\nul,\\r\\nli,\\r\\nfieldset,\\r\\nform,\\r\\nlabel,\\r\\nlegend,\\r\\ntable,\\r\\ncaption,\\r\\ntbody,\\r\\ntfoot,\\r\\nthead,\\r\\ntr,\\r\\nth,\\r\\ntd,\\r\\narticle,\\r\\naside,\\r\\ncanvas,\\r\\ndetails,\\r\\nembed,\\r\\nfigure,\\r\\nfigcaption,\\r\\nfooter,\\r\\nheader,\\r\\nhgroup,\\r\\nmenu,\\r\\nnav,\\r\\noutput,\\r\\nruby,\\r\\nsection,\\r\\nsummary,\\r\\ntime,\\r\\nmark,\\r\\naudio,\\r\\nvideo {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  border: 0;\\r\\n  font-size: 100%;\\r\\n  font: inherit;\\r\\n  vertical-align: baseline;\\r\\n}\\r\\n/* HTML5 display-role reset for older browsers */\\r\\narticle,\\r\\naside,\\r\\ndetails,\\r\\nfigcaption,\\r\\nfigure,\\r\\nfooter,\\r\\nheader,\\r\\nhgroup,\\r\\nmenu,\\r\\nnav,\\r\\nsection {\\r\\n  display: block;\\r\\n}\\r\\nbody {\\r\\n  line-height: 1;\\r\\n}\\r\\nol,\\r\\nul {\\r\\n  list-style: none;\\r\\n}\\r\\nblockquote,\\r\\nq {\\r\\n  quotes: none;\\r\\n}\\r\\nblockquote:before,\\r\\nblockquote:after,\\r\\nq:before,\\r\\nq:after {\\r\\n  content: \\\"\\\";\\r\\n  content: none;\\r\\n}\\r\\ntable {\\r\\n  border-collapse: collapse;\\r\\n  border-spacing: 0;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/styles/reset.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/common.css":
/*!*******************************!*\
  !*** ./src/styles/common.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./common.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/common.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/styles/common.css?");

/***/ }),

/***/ "./src/styles/reset.css":
/*!******************************!*\
  !*** ./src/styles/reset.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./reset.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/styles/reset.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/App.ts":
/*!********************!*\
  !*** ./src/App.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Store */ \"./src/Store.ts\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Header */ \"./src/components/Header.ts\");\n/* harmony import */ var _components_ListTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ListTitle */ \"./src/components/ListTitle.ts\");\n/* harmony import */ var _components_MovieList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/MovieList */ \"./src/components/MovieList.ts\");\n/* harmony import */ var _components_MoreButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/MoreButton */ \"./src/components/MoreButton.ts\");\n/* harmony import */ var _components_WholeScreenMessageAlert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/WholeScreenMessageAlert */ \"./src/components/WholeScreenMessageAlert.ts\");\n/* harmony import */ var _domain_Movie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./domain/Movie */ \"./src/domain/Movie.ts\");\n/* harmony import */ var _components_Skeleton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Skeleton */ \"./src/components/Skeleton.ts\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass App {\r\n    constructor($target) {\r\n        this.$main = document.createElement('main');\r\n        this.$itemView = document.createElement('section');\r\n        this.setStoreMovieState();\r\n        new _components_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"]($target);\r\n        this.$itemView.className = 'item-view';\r\n        this.listTitle = new _components_ListTitle__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n        this.movieList = new _components_MovieList__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\r\n        this.moreButton = new _components_MoreButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\r\n        this.skeleton = new _components_Skeleton__WEBPACK_IMPORTED_MODULE_7__.Skeleton(this.movieList.$ul);\r\n        this.initialRender();\r\n        this.$main.insertAdjacentElement('beforeend', this.$itemView);\r\n        $target.insertAdjacentElement('beforeend', this.$main);\r\n    }\r\n    setStoreMovieState() {\r\n        const movieStateProxy = new Proxy(_domain_Movie__WEBPACK_IMPORTED_MODULE_6__.initialMovieStats, {\r\n            get: (target, props) => {\r\n                return target[props];\r\n            },\r\n            set: (target, props, value) => {\r\n                target[props] = value;\r\n                switch (props) {\r\n                    case 'nextPage': {\r\n                        value === -1 ? this.moreButton.hide() : this.moreButton.show();\r\n                        if (value === 1) {\r\n                            this.skeleton.attachSkeleton();\r\n                            this.movieList.removeCurentCategory();\r\n                        }\r\n                        break;\r\n                    }\r\n                    case 'category': {\r\n                        if (!this.listTitle)\r\n                            break;\r\n                        if (value === 'popular')\r\n                            target['query'] = '';\r\n                        this.listTitle.render(this.$itemView);\r\n                        break;\r\n                    }\r\n                    case 'results': {\r\n                        if (!this.movieList || !this.moreButton)\r\n                            break;\r\n                        this.movieList.render(this.$itemView);\r\n                        this.skeleton.removeSkeleton();\r\n                        this.moreButton.render(this.$itemView);\r\n                        break;\r\n                    }\r\n                    case 'error': {\r\n                        if (!value.length)\r\n                            break;\r\n                        this.$itemView.innerHTML = '';\r\n                        this.$itemView.insertAdjacentElement('beforeend', (0,_components_WholeScreenMessageAlert__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(value));\r\n                        break;\r\n                    }\r\n                    default:\r\n                }\r\n                return true;\r\n            },\r\n        });\r\n        _Store__WEBPACK_IMPORTED_MODULE_0__.Store.set('movieStates', new _domain_Movie__WEBPACK_IMPORTED_MODULE_6__[\"default\"](movieStateProxy));\r\n    }\r\n    initialRender() {\r\n        var _a;\r\n        this.listTitle.render(this.$itemView);\r\n        (_a = _Store__WEBPACK_IMPORTED_MODULE_0__.Store.get('movieStates')) === null || _a === void 0 ? void 0 : _a.renderPopularMovies();\r\n    }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\r\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/App.ts?");

/***/ }),

/***/ "./src/Store.ts":
/*!**********************!*\
  !*** ./src/Store.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Store\": () => (/* binding */ Store)\n/* harmony export */ });\nconst Store = new Map();\r\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/Store.ts?");

/***/ }),

/***/ "./src/api/http.ts":
/*!*************************!*\
  !*** ./src/api/http.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchData\": () => (/* binding */ fetchData)\n/* harmony export */ });\n/* harmony import */ var _statusCode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./statusCode */ \"./src/api/statusCode.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\n\r\nconst fetchData = (url) => __awaiter(void 0, void 0, void 0, function* () {\r\n    const response = yield fetch(url);\r\n    const data = yield response.json();\r\n    if (!response.ok) {\r\n        throw new Error((0,_statusCode__WEBPACK_IMPORTED_MODULE_0__.statusCodeToErrorMessage)(data.success_code));\r\n    }\r\n    return data;\r\n});\r\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/api/http.ts?");

/***/ }),

/***/ "./src/api/statusCode.ts":
/*!*******************************!*\
  !*** ./src/api/statusCode.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"statusCodeToErrorMessage\": () => (/* binding */ statusCodeToErrorMessage)\n/* harmony export */ });\nconst MESSAGE = {\r\n    SESSION_EXPIRE: '세션이 만료되었습니다.',\r\n    SERVICE_OFFLINE: '서비스는 일시적으로 오프라인 상태입니다.',\r\n    SERVER_PROBLEM: '서버에 문제가 발생했습니다.',\r\n    OVER_REQUEST_TIME: '요청시간이 초과되었습니다.',\r\n    UNKNOWN: '알 수 없는 오류입니다.',\r\n};\r\nconst statusCodeToErrorMessage = (status_code) => {\r\n    switch (status_code) {\r\n        case 9:\r\n            return MESSAGE.SERVICE_OFFLINE;\r\n        case 24:\r\n            return MESSAGE.OVER_REQUEST_TIME;\r\n        case 17 || 0:\r\n            return MESSAGE.SESSION_EXPIRE;\r\n        case 43:\r\n            return MESSAGE.SERVER_PROBLEM;\r\n        default:\r\n            return MESSAGE.UNKNOWN;\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/api/statusCode.ts?");

/***/ }),

/***/ "./src/components/Header.ts":
/*!**********************************!*\
  !*** ./src/components/Header.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/logo.png */ \"./src/images/logo.png\");\n/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Store */ \"./src/Store.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\n\r\n\r\nclass Header {\r\n    constructor($target) {\r\n        this.$header = document.createElement('header');\r\n        this.init($target);\r\n        this.$header.addEventListener('click', this.onClickEvent.bind(this));\r\n        this.$searchBox = this.$header.querySelector('.search-box');\r\n        if (!(this.$searchBox instanceof HTMLFormElement))\r\n            return;\r\n        this.$searchBox.addEventListener('submit', this.onSubmitEvent.bind(this));\r\n    }\r\n    init($target) {\r\n        $target.insertAdjacentElement('beforeend', this.$header);\r\n        this.render(this.$header);\r\n    }\r\n    render($target) {\r\n        $target.innerHTML = this.template();\r\n    }\r\n    onSubmitEvent(e) {\r\n        var _a;\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            e.preventDefault();\r\n            if (!(e.currentTarget instanceof HTMLElement))\r\n                return;\r\n            const { currentTarget } = e;\r\n            const { value } = currentTarget.querySelector('input');\r\n            if (value.length === 0) {\r\n                alert('1글자 이상 입력해 주셔야 합니다.');\r\n                return;\r\n            }\r\n            (_a = _Store__WEBPACK_IMPORTED_MODULE_1__.Store.get('movieStates')) === null || _a === void 0 ? void 0 : _a.renderSearchedMovies(value);\r\n        });\r\n    }\r\n    onClickEvent(e) {\r\n        var _a;\r\n        if (!(e.target instanceof HTMLElement))\r\n            return;\r\n        const { target } = e;\r\n        if (target.dataset.type !== 'logo')\r\n            return;\r\n        (_a = _Store__WEBPACK_IMPORTED_MODULE_1__.Store.get('movieStates')) === null || _a === void 0 ? void 0 : _a.renderPopularMovies();\r\n        if (this.$searchBox instanceof HTMLFormElement) {\r\n            this.$searchBox.reset();\r\n        }\r\n    }\r\n    template() {\r\n        return `<h1><img src=\"${_images_logo_png__WEBPACK_IMPORTED_MODULE_0__}\" alt=\"MovieList 로고\" data-type=\"logo\" /></h1>\r\n      <form class=\"search-box\">\r\n        <input type=\"text\" placeholder=\"검색\" class=\"search-input\" />\r\n        <button data-type=\"search\" class=\"search-button\">검색</button>\r\n      </form>`;\r\n    }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\r\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/Header.ts?");

/***/ }),

/***/ "./src/components/ListTitle.ts":
/*!*************************************!*\
  !*** ./src/components/ListTitle.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Store */ \"./src/Store.ts\");\n\r\nclass ListTitle {\r\n    constructor() {\r\n        this.$h2 = document.createElement('h2');\r\n        this.$h2.className = 'movie-list-title';\r\n    }\r\n    render($target) {\r\n        var _a;\r\n        const movieState = (_a = _Store__WEBPACK_IMPORTED_MODULE_0__.Store.get('movieStates')) === null || _a === void 0 ? void 0 : _a.getMovieStates();\r\n        this.$h2.innerHTML =\r\n            (movieState === null || movieState === void 0 ? void 0 : movieState.category) === 'popular'\r\n                ? '지금 인기있는 영화'\r\n                : `\"${movieState === null || movieState === void 0 ? void 0 : movieState.query}\" 검색 결과`;\r\n        $target.insertAdjacentElement('beforeend', this.$h2);\r\n    }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListTitle);\r\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/ListTitle.ts?");

/***/ }),

/***/ "./src/components/MoreButton.ts":
/*!**************************************!*\
  !*** ./src/components/MoreButton.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Store */ \"./src/Store.ts\");\n\r\nclass MoreButton {\r\n    constructor() {\r\n        this.$button = document.createElement('button');\r\n        this.$button.className = 'btn primary full-width more-button hidden';\r\n        this.$button.addEventListener('click', this.onClickMoreButton);\r\n    }\r\n    render($target) {\r\n        this.$button.innerText = '더 보기';\r\n        $target.insertAdjacentElement('beforeend', this.$button);\r\n    }\r\n    onClickMoreButton() {\r\n        const movieState = _Store__WEBPACK_IMPORTED_MODULE_0__.Store.get('movieStates');\r\n        if (!movieState)\r\n            return;\r\n        const states = movieState.getMovieStates();\r\n        if (!states)\r\n            return;\r\n        const { nextPage, category, query } = states;\r\n        if (category === 'popular') {\r\n            movieState.renderPopularMovies(nextPage);\r\n            return;\r\n        }\r\n        movieState.renderSearchedMovies(query, nextPage);\r\n    }\r\n    hide() {\r\n        this.$button.classList.add('hidden');\r\n    }\r\n    show() {\r\n        this.$button.classList.remove('hidden');\r\n    }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MoreButton);\r\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/MoreButton.ts?");

/***/ }),

/***/ "./src/components/MovieCard.ts":
/*!*************************************!*\
  !*** ./src/components/MovieCard.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_star_filled_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/star_filled.png */ \"./src/images/star_filled.png\");\n/* harmony import */ var _images_star_empty_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/star_empty.png */ \"./src/images/star_empty.png\");\nvar __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {\r\n    if (kind === \"m\") throw new TypeError(\"Private method is not writable\");\r\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a setter\");\r\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot write private member to an object whose class did not declare it\");\r\n    return (kind === \"a\" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;\r\n};\r\nvar __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {\r\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a getter\");\r\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot read private member from an object whose class did not declare it\");\r\n    return kind === \"m\" ? f : kind === \"a\" ? f.call(receiver) : f ? f.value : state.get(receiver);\r\n};\r\nvar _MovieCard_movie;\r\n\r\n\r\nclass MovieCard {\r\n    constructor(movie) {\r\n        _MovieCard_movie.set(this, void 0);\r\n        this.$li = document.createElement('li');\r\n        __classPrivateFieldSet(this, _MovieCard_movie, movie, \"f\");\r\n        this.render();\r\n        this.initialEventListener();\r\n    }\r\n    template() {\r\n        const { posterPath, title, voteAverage } = __classPrivateFieldGet(this, _MovieCard_movie, \"f\");\r\n        return `\r\n      <a href=\"#\">\r\n        <div class = \"item-card\">\r\n          <img\r\n            class=\"item-thumbnail\"\r\n            src=\"https://image.tmdb.org/t/p/w500${posterPath}\"\r\n            loading=\"lazy\"\r\n            alt=\"${title}\"\r\n            onerror=\"\r\n              this.style.border='1px solid #e2e2e2';\r\n              this.src='https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg';\r\n            \"\r\n          />\r\n          <p class=\"item-title\">${title}</p>\r\n          <p class=\"item-score item-score-align-sort\"><img src=\"${voteAverage && voteAverage > 5 ? _images_star_filled_png__WEBPACK_IMPORTED_MODULE_0__ : _images_star_empty_png__WEBPACK_IMPORTED_MODULE_1__}\" alt=\"별점\" /> ${voteAverage === null || voteAverage === void 0 ? void 0 : voteAverage.toFixed(1)}</p>\r\n        </div>\r\n      </a>\r\n    `;\r\n    }\r\n    render() {\r\n        this.$li.innerHTML = this.template();\r\n    }\r\n    initialEventListener() {\r\n        const $image = this.$li.querySelector('img');\r\n        if (!$image)\r\n            return;\r\n        $image.addEventListener('load', (e) => {\r\n            if (!(e.currentTarget instanceof HTMLImageElement))\r\n                return;\r\n            const { currentTarget } = e;\r\n            if (!currentTarget.complete)\r\n                return;\r\n            currentTarget.classList.remove('hidden');\r\n            this.removeSkeleton();\r\n        });\r\n    }\r\n    removeSkeleton() {\r\n        const $skeleton = this.$li.querySelector('.skeleton');\r\n        $skeleton === null || $skeleton === void 0 ? void 0 : $skeleton.remove();\r\n    }\r\n}\r\n_MovieCard_movie = new WeakMap();\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MovieCard);\r\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/MovieCard.ts?");

/***/ }),

/***/ "./src/components/MovieList.ts":
/*!*************************************!*\
  !*** ./src/components/MovieList.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _MovieCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MovieCard */ \"./src/components/MovieCard.ts\");\n/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Store */ \"./src/Store.ts\");\n/* harmony import */ var _WholeScreenMessageAlert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WholeScreenMessageAlert */ \"./src/components/WholeScreenMessageAlert.ts\");\n\r\n\r\n\r\nclass MovieList {\r\n    constructor() {\r\n        this.$ul = document.createElement('ul');\r\n        this.$ul.className = 'item-list';\r\n    }\r\n    template() {\r\n        var _a;\r\n        const movies = (_a = _Store__WEBPACK_IMPORTED_MODULE_1__.Store.get('movieStates')) === null || _a === void 0 ? void 0 : _a.getMovieStates();\r\n        if (!movies)\r\n            return (0,_WholeScreenMessageAlert__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('알 수 없는 에러');\r\n        if (!movies.results.length) {\r\n            return this.movieListErrorTemplate(`입력하신 \"${movies === null || movies === void 0 ? void 0 : movies.query}\"(와)과 일치하는 결과가 없습니다.`);\r\n        }\r\n        return movies.results.map((movie) => new _MovieCard__WEBPACK_IMPORTED_MODULE_0__[\"default\"](movie).$li);\r\n    }\r\n    render($target) {\r\n        const template = this.template();\r\n        this.removeAlertContainer($target);\r\n        if (template instanceof HTMLDivElement) {\r\n            $target.insertAdjacentElement('beforeend', template);\r\n            return;\r\n        }\r\n        for (const child of template) {\r\n            this.$ul.insertAdjacentElement('beforeend', child);\r\n        }\r\n        $target.insertAdjacentElement('beforeend', this.$ul);\r\n    }\r\n    removeAlertContainer($target) {\r\n        const $alertContainer = $target.querySelector('.alert-container');\r\n        if ($alertContainer)\r\n            $target.removeChild($alertContainer);\r\n    }\r\n    removeCurentCategory() {\r\n        while (this.$ul.firstChild)\r\n            this.$ul.removeChild(this.$ul.firstChild);\r\n    }\r\n    movieListErrorTemplate(message) {\r\n        const $container = document.createElement('div');\r\n        $container.className = 'alert-container';\r\n        $container.innerHTML = ` \r\n      <p class=\"alert-message alert-title\">${message}</p>\r\n          \r\n      <p class=\"alert-message alert-sub-title\">🌕 다른 키워드를 입력해 보세요.</p>\r\n      <p class=\"alert-message alert-sub-title\">🌕 영화를 찾고 계신가요?</p>\r\n      <p class=\"alert-message alert-sub-title\">🌕 영화 제목만을 입력해 주세요</p>\r\n    `;\r\n        return $container;\r\n    }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MovieList);\r\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/MovieList.ts?");

/***/ }),

/***/ "./src/components/Skeleton.ts":
/*!************************************!*\
  !*** ./src/components/Skeleton.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Skeleton\": () => (/* binding */ Skeleton)\n/* harmony export */ });\nclass Skeleton {\r\n    constructor($listItems) {\r\n        this.$movieItems = $listItems;\r\n        this.$container = document.createElement('div');\r\n        this.$container.innerHTML = this.template();\r\n        this.attachSkeleton();\r\n    }\r\n    template() {\r\n        return `<li>\r\n    <div class=\"item-card\">\r\n      <div class=\"item-thumbnail skeleton\"></div>\r\n      <div class=\"item-title skeleton\"></div>\r\n      <div class=\"item-score skeleton\"></div>\r\n    </div>\r\n  </li>`.repeat(20);\r\n    }\r\n    attachSkeleton() {\r\n        this.$movieItems.insertAdjacentElement('beforeend', this.$container);\r\n    }\r\n    removeSkeleton() {\r\n        while (this.$container.firstChild)\r\n            this.$container.removeChild(this.$container.firstChild);\r\n        this.$container.remove();\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/Skeleton.ts?");

/***/ }),

/***/ "./src/components/WholeScreenMessageAlert.ts":
/*!***************************************************!*\
  !*** ./src/components/WholeScreenMessageAlert.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction WholeScreenMessageAlert(message) {\r\n    const $container = document.createElement('div');\r\n    $container.className = 'alert-container';\r\n    $container.innerHTML = `<p class=\"alert-message alert-title\">${message}</p>\r\n    \r\n    <p class=\"alert-message alert-sub-title\">❌ 새로고침 부탁드립니다.</p>\r\n    <p class=\"alert-message alert-sub-title\">❌ 네트워크 상태 확인 부탁드립니다.</p>\r\n    <p class=\"alert-message alert-sub-title\">❌ 02-000-0000으로 연락 주세요. 불편함을 드려 죄송합니다.</p>`;\r\n    return $container;\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WholeScreenMessageAlert);\r\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/WholeScreenMessageAlert.ts?");

/***/ }),

/***/ "./src/domain/Movie.ts":
/*!*****************************!*\
  !*** ./src/domain/Movie.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"initialMovieStats\": () => (/* binding */ initialMovieStats)\n/* harmony export */ });\n/* harmony import */ var _api_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/http */ \"./src/api/http.ts\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/constants */ \"./src/utils/constants.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {\r\n    if (kind === \"m\") throw new TypeError(\"Private method is not writable\");\r\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a setter\");\r\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot write private member to an object whose class did not declare it\");\r\n    return (kind === \"a\" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;\r\n};\r\nvar __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {\r\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a getter\");\r\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot read private member from an object whose class did not declare it\");\r\n    return kind === \"m\" ? f : kind === \"a\" ? f.call(receiver) : f ? f.value : state.get(receiver);\r\n};\r\nvar _Movie_instances, _Movie_movieState, _Movie_setMovies;\r\n\r\n\r\nconst initialMovieStats = {\r\n    results: [],\r\n    nextPage: 1,\r\n    query: '',\r\n    category: 'popular',\r\n    error: '',\r\n};\r\nclass Movie {\r\n    constructor(initialMovieState) {\r\n        _Movie_instances.add(this);\r\n        _Movie_movieState.set(this, void 0);\r\n        __classPrivateFieldSet(this, _Movie_movieState, initialMovieState, \"f\");\r\n    }\r\n    getPopularMovies({ curPage = 1, }) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            const { results, total_pages, page } = yield (0,_api_http__WEBPACK_IMPORTED_MODULE_0__.fetchData)(`${_utils_constants__WEBPACK_IMPORTED_MODULE_1__.TMDB_MOVIE_BASE_URL}/movie/popular?api_key=${\"83abefa42986ae190c0bbb24c6d2e0ae\"}&language=ko-KR&page=${curPage}`);\r\n            const movleList = results.map((currentMovie) => ({\r\n                title: currentMovie.title,\r\n                posterPath: currentMovie.poster_path,\r\n                voteAverage: currentMovie.vote_average,\r\n            }));\r\n            return {\r\n                results: movleList,\r\n                total_pages,\r\n                page,\r\n            };\r\n        });\r\n    }\r\n    getFindMovies({ query, curPage = 1, }) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            const { results, total_pages, page } = yield (0,_api_http__WEBPACK_IMPORTED_MODULE_0__.fetchData)(`${_utils_constants__WEBPACK_IMPORTED_MODULE_1__.TMDB_MOVIE_BASE_URL}/search/movie?api_key=${\"83abefa42986ae190c0bbb24c6d2e0ae\"}&language=ko-KR&query=${query}&page=${curPage}`);\r\n            const movieList = results.map((currentMovie) => ({\r\n                title: currentMovie.title,\r\n                posterPath: currentMovie.poster_path,\r\n                voteAverage: currentMovie.vote_average,\r\n            }));\r\n            return {\r\n                results: movieList,\r\n                total_pages,\r\n                page,\r\n            };\r\n        });\r\n    }\r\n    renderPopularMovies(curPage = 1) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            try {\r\n                const { results, total_pages, page } = yield this.getPopularMovies({\r\n                    curPage,\r\n                });\r\n                if (__classPrivateFieldGet(this, _Movie_movieState, \"f\").category === 'search') {\r\n                    __classPrivateFieldGet(this, _Movie_movieState, \"f\").category = 'popular';\r\n                    __classPrivateFieldGet(this, _Movie_movieState, \"f\").nextPage = 1;\r\n                }\r\n                __classPrivateFieldGet(this, _Movie_instances, \"m\", _Movie_setMovies).call(this, { results, total_pages, page });\r\n            }\r\n            catch (error) {\r\n                __classPrivateFieldGet(this, _Movie_movieState, \"f\").error = error;\r\n            }\r\n        });\r\n    }\r\n    renderSearchedMovies(query, curPage = 1) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            try {\r\n                const { results, total_pages, page } = yield this.getFindMovies({\r\n                    query,\r\n                    curPage,\r\n                });\r\n                if (__classPrivateFieldGet(this, _Movie_movieState, \"f\").category === 'popular') {\r\n                    __classPrivateFieldGet(this, _Movie_movieState, \"f\").query = query;\r\n                    __classPrivateFieldGet(this, _Movie_movieState, \"f\").category = 'search';\r\n                    __classPrivateFieldGet(this, _Movie_movieState, \"f\").nextPage = 1;\r\n                }\r\n                __classPrivateFieldGet(this, _Movie_instances, \"m\", _Movie_setMovies).call(this, { results, total_pages, page });\r\n            }\r\n            catch (error) {\r\n                __classPrivateFieldGet(this, _Movie_movieState, \"f\").error = error;\r\n            }\r\n        });\r\n    }\r\n    getMovieStates() {\r\n        return Object.assign({}, __classPrivateFieldGet(this, _Movie_movieState, \"f\"));\r\n    }\r\n}\r\n_Movie_movieState = new WeakMap(), _Movie_instances = new WeakSet(), _Movie_setMovies = function _Movie_setMovies({ results, total_pages, page }) {\r\n    __classPrivateFieldGet(this, _Movie_movieState, \"f\").results = results;\r\n    __classPrivateFieldGet(this, _Movie_movieState, \"f\").nextPage = total_pages === page ? -1 : page + 1;\r\n    __classPrivateFieldGet(this, _Movie_movieState, \"f\").error = '';\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Movie);\r\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/domain/Movie.ts?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/reset.css */ \"./src/styles/reset.css\");\n/* harmony import */ var _styles_common_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/common.css */ \"./src/styles/common.css\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ \"./src/App.ts\");\n\r\n\r\n\r\nnew _App__WEBPACK_IMPORTED_MODULE_2__[\"default\"](document.getElementById('app'));\r\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/index.js?");

/***/ }),

/***/ "./src/utils/constants.ts":
/*!********************************!*\
  !*** ./src/utils/constants.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TMDB_MOVIE_BASE_URL\": () => (/* binding */ TMDB_MOVIE_BASE_URL)\n/* harmony export */ });\nconst TMDB_MOVIE_BASE_URL = 'https://api.themoviedb.org/3';\r\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/utils/constants.ts?");

/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2e162b4fefb34cd7ed8d.png\";\n\n//# sourceURL=webpack://javascript-movie-review/./src/images/logo.png?");

/***/ }),

/***/ "./src/images/search_button.png":
/*!**************************************!*\
  !*** ./src/images/search_button.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f1bd4269f4446ceae306.png\";\n\n//# sourceURL=webpack://javascript-movie-review/./src/images/search_button.png?");

/***/ }),

/***/ "./src/images/star_empty.png":
/*!***********************************!*\
  !*** ./src/images/star_empty.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6c9611deedf4b85849c9.png\";\n\n//# sourceURL=webpack://javascript-movie-review/./src/images/star_empty.png?");

/***/ }),

/***/ "./src/images/star_filled.png":
/*!************************************!*\
  !*** ./src/images/star_filled.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6328741810b732410eec.png\";\n\n//# sourceURL=webpack://javascript-movie-review/./src/images/star_filled.png?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
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
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;