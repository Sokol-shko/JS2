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

/***/ "./components/cart-item.js":
/*!*********************************!*\
  !*** ./components/cart-item.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nVue.component('cart-item', {\r\n    name: 'goods-item',\r\n    props: ['good'],\r\n    template: `\r\n        <div>\r\n            <h3>{{ good.product_name }}</h3>\r\n            <p>{{ good.price }}</p>\r\n            <button @click=\"$emit('delete-from-cart', good)\" class=\"delete-from-cart\" type=\"button\">Удалить</button> \r\n        </div>    \r\n    `\r\n});\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n    cart_item: 'cart-item'\r\n});\n\n//# sourceURL=webpack://geekbrains/./components/cart-item.js?");

/***/ }),

/***/ "./components/cart.js":
/*!****************************!*\
  !*** ./components/cart.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nVue.component('cart', {\r\n    name: 'cart',\r\n    props: ['goods', 'deleteFromCart'],\r\n    data: () => ({\r\n        isVisibleCart: false\r\n    }),\r\n    methods: {\r\n        changeVisibleCart () {\r\n            this.isVisibleCart = !this.isVisibleCart;\r\n        },\r\n    },\r\n    template: `\r\n        <div class=\"flex\">\r\n            <button @click=\"changeVisibleCart\" class=\"cart-button\" type=\"button\" >Корзина</button>\r\n            <div v-show=\"isVisibleCart\" class=\"modalCarts\">\r\n                <h3>Корзина</h3>\r\n                <div v-if=\"goods.length !== 0\" class=\"goods-list\">\r\n                    <div v-for=\"good in goods\" class=\"goods-item\">\r\n                        <cart-item @delete-from-cart=\"deleteFromCart\" :good=\"good\"></cart-item>\r\n                    </div>\r\n                </div>\r\n                <div v-else>Пока пусто</div>\r\n            </div>\r\n        </div>\r\n    `\r\n});\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n    cart: 'cart'\r\n});\n\n//# sourceURL=webpack://geekbrains/./components/cart.js?");

/***/ }),

/***/ "./components/components.js":
/*!**********************************!*\
  !*** ./components/components.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart.js */ \"./components/cart.js\");\n/* harmony import */ var _cart_item_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart-item.js */ \"./components/cart-item.js\");\n/* harmony import */ var _goods_item_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./goods-item.js */ \"./components/goods-item.js\");\n/* harmony import */ var _goods_list_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./goods-list.js */ \"./components/goods-list.js\");\n/* harmony import */ var _goods_search_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./goods-search.js */ \"./components/goods-search.js\");\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://geekbrains/./components/components.js?");

/***/ }),

/***/ "./components/goods-item.js":
/*!**********************************!*\
  !*** ./components/goods-item.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nVue.component('goods-item', {\r\n    name: 'goods-item',\r\n    props: ['good'],\r\n    template: `\r\n        <div>\r\n            <h3>{{ good.product_name }}</h3>\r\n            <p>{{ good.price }}</p>\r\n            <button @click=\"$emit('add-to-cart', good)\" class=\"to-cart\">В корзину</button> \r\n        </div>    \r\n    `\r\n});\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n    goods_item: 'goods-item'\r\n});\n\n//# sourceURL=webpack://geekbrains/./components/goods-item.js?");

/***/ }),

/***/ "./components/goods-list.js":
/*!**********************************!*\
  !*** ./components/goods-list.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nVue.component('goods-list', {\r\n    name: 'goods-list',\r\n    props: ['goods', 'addToCart'],\r\n    template: `\r\n        <div>\r\n            <div v-if=\"goods.length !== 0\" class=\"goods-list\">\r\n                <div  v-for=\"good in goods\" class=\"goods-item\">\r\n                    <goods-item @add-to-cart=\"addToCart\" :good=\"good\"></goods-item>\r\n                </div>     \r\n            </div>\r\n            <div v-else>\r\n                Нет данных!\r\n            </div>\r\n        </div>\r\n    `\r\n});\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n    goods_list: 'goods-list'\r\n});\n\n//# sourceURL=webpack://geekbrains/./components/goods-list.js?");

/***/ }),

/***/ "./components/goods-search.js":
/*!************************************!*\
  !*** ./components/goods-search.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nVue.component('goods-search', {\r\n    name: 'goods-search',\r\n    props: ['searchLine'],\r\n    template: `\r\n        <div class=\"flex\">\r\n            <input :value=\"searchLine\" @input=\"$emit('input', $event.target.value)\" type=\"text\" class=\"goods-search\"/>\r\n            <button  @click=\"$emit('filter-goods')\" class=\"search-button\" type=\"button\" >Искать</button>\r\n        </div>\r\n    `\r\n});\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n    goods_search: 'goods-search'\r\n});\n\n//# sourceURL=webpack://geekbrains/./components/goods-search.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/components.js */ \"./components/components.js\");\n\r\n\r\n\r\n\r\nconst API_URL = 'http://localhost:3000';\r\n\r\nconst app = new Vue({\r\n    el: '#app',\r\n    data: () => ({\r\n        goods: [],\r\n        filteredGoods: [],\r\n        cartGoods: [],\r\n        searchLine: '',\r\n        msgError: 0\r\n    }),\r\n    methods: {\r\n        makeGETRequest(url, callback) {\r\n            let xhr;\r\n\r\n            if (window.XMLHttpRequest) {\r\n                xhr = new XMLHttpRequest();\r\n            } else if (window.ActiveXObject) {\r\n                xhr = new ActiveXObject(\"Microsoft.XMLHTTP\");\r\n            }\r\n\r\n            xhr.onreadystatechange = () => {\r\n                if (xhr.readyState === 4) {\r\n                    callback(xhr.responseText);\r\n                } else {\r\n                    //console.log('Извините, произошёл сбой. Мы уже разбираемся в проблеме.');\r\n                    this.msgError = 1;\r\n                }\r\n            };\r\n\r\n            xhr.open('GET', url, true);\r\n            xhr.send();\r\n        },\r\n        makePOSTRequest(url, data, callback) {\r\n            let xhr;\r\n\r\n            if (window.XMLHttpRequest) {\r\n                xhr = new XMLHttpRequest();\r\n            } else if (window.ActiveXObject) {\r\n                xhr = new ActiveXObject(\"Microsoft.XMLHTTP\");\r\n            }\r\n\r\n            xhr.onreadystatechange = () => {\r\n                if (xhr.status === 200) {\r\n                    callback(xhr.responseText);\r\n                } else {\r\n                    //console.log('Извините, произошёл сбой. Мы уже разбираемся в проблеме.');\r\n                    this.msgError = 1;\r\n                }\r\n            };\r\n\r\n            xhr.open('POST', url, true);\r\n            xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');\r\n\r\n            xhr.send(data);\r\n        },\r\n        filterGoods() {\r\n            const regexp = new RegExp(this.searchLine, 'i');\r\n            this.filteredGoods = this.goods.filter(good =>\r\n                regexp.test(good.product_name));\r\n            //console.log(this.filteredGoods);\r\n            //console.log(this.msgError);\r\n        },\r\n        getCartData() {\r\n            this.makeGETRequest(`${API_URL}/cartData`, (goods) => {\r\n               this.cartGoods = JSON.parse(goods);\r\n            });\r\n        },\r\n        addGoodToCart(good) {\r\n            this.makePOSTRequest(`${API_URL}/addToCart`, JSON.stringify(good), () => {\r\n                this.getCartData();\r\n                this.getDateNow();\r\n            });\r\n        },\r\n        deleteGoodFromCart(good) {\r\n            this.makePOSTRequest(`${API_URL}/deleteFromCart`, JSON.stringify(good), () => {\r\n                this.getCartData();\r\n                this.getDateNow();\r\n            });\r\n        },\r\n        getDateNow (){\r\n            let date = new Date();\r\n            let hour = date.getHours();\r\n            let minutes = date.getMinutes();\r\n            let seconds = date.getSeconds();\r\n            return `${hour}:${minutes}:${seconds}`;\r\n\r\n        }\r\n    },\r\n    mounted() {\r\n        this.makeGETRequest(`${API_URL}/catalogData`, (goods) => {\r\n            this.goods = JSON.parse(goods);\r\n            this.filteredGoods = JSON.parse(goods);\r\n        });\r\n        this.getCartData();\r\n    }\r\n});\r\n\r\n\r\n//**********************\r\nclass GoodsItem {\r\n    constructor (title = 'title', price = 0) {\r\n        this.product_name = title;\r\n        this.price = price;\r\n    }\r\n}\r\n\r\n//**********************\r\nclass GoodsList {\r\n    constructor () {\r\n        this.sumGoods = 0;\r\n        this.goods = [];\r\n        this.filteredGoods = [];\r\n    }\r\n\r\n    calculateSumAllGoods () {\r\n        this.goods.forEach(good => {\r\n            this.sumGoods += good.price;\r\n        });\r\n        return this.sumGoods;\r\n    }\r\n}\r\n\r\n//**********************\r\nclass ProductsCart {\r\n    constructor () {\r\n        this.sum = 0;\r\n    }\r\n\r\n    calculateSum (a, b) {\r\n        this.sum = a + b;\r\n        return this.sum;\r\n    }\r\n\r\n    buy () {\r\n\r\n    }\r\n}\r\n\r\n//**********************\r\nclass ProductsCartElement {\r\n    constructor () {\r\n        // цена товара\r\n        this.priceProduct = 0;\r\n        // кол-во товара\r\n        this.count = 0;\r\n    }\r\n\r\n    // изменить кол-во товара\r\n    changeCount () {}\r\n    // добавить в корзину\r\n    addToCart () {}\r\n    // убрать из корзины\r\n    removeFromCart () {}\r\n    // получение списка товаров корзины\r\n    getListProductsCart () {}\r\n}\r\n\r\n// export default  {\r\n//     API_URL: API_URL,\r\n//     app: app,\r\n//     GoodsItem: GoodsItem,\r\n//     GoodsList: GoodsList,\r\n//     ProductsCart: ProductsCart,\r\n//     ProductsCartElement: ProductsCartElement\r\n// }\n\n//# sourceURL=webpack://geekbrains/./main.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./main.js");
/******/ 	
/******/ })()
;