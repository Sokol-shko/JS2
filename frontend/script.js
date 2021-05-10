'use strict';

const API_URL = 'http://localhost:3000';

const app = new Vue({
    el: '#app',
    data: () => ({
        goods: [],
        filteredGoods: [],
        cartGoods: [],
        searchLine: '',
        msgError: 0
    }),
    methods: {
        makeGETRequest(url, callback) {
            let xhr;

            if (window.XMLHttpRequest) {
                xhr = new XMLHttpRequest();
            } else if (window.ActiveXObject) {
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }

            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    callback(xhr.responseText);
                } else {
                    console.log('Извините, произошёл сбой. Мы уже разбираемся в проблеме.');
                    this.msgError = 1;
                }
            };

            xhr.open('GET', url, true);
            xhr.send();
        },
        makePOSTRequest(url, data, callback) {
            let xhr;

            if (window.XMLHttpRequest) {
                xhr = new XMLHttpRequest();
            } else if (window.ActiveXObject) {
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }

            xhr.onreadystatechange = () => {
                if (xhr.status === 200) {
                    callback(xhr.responseText);
                } else {
                    console.log('Извините, произошёл сбой. Мы уже разбираемся в проблеме.');
                    this.msgError = 1;
                }
            };

            xhr.open('POST', url, true);
            xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

            xhr.send(data);
        },
        filterGoods() {
            const regexp = new RegExp(this.searchLine, 'i');
            this.filteredGoods = this.goods.filter(good =>
                regexp.test(good.product_name));
            //console.log(this.filteredGoods);
            //console.log(this.msgError);
        },
        getCartData() {
            this.makeGETRequest(`${API_URL}/cartData`, (goods) => {
               this.cartGoods = JSON.parse(goods);
            });
        },
        addGoodToCart(good) {
            this.makePOSTRequest(`${API_URL}/addToCart`, JSON.stringify(good), () => {
                this.getCartData();
            });
        },
        deleteGoodFromCart(good) {
            this.makePOSTRequest(`${API_URL}/deleteFromCart`, JSON.stringify(good), () => {
                this.getCartData();
            });
        }
    },
    mounted() {
        this.makeGETRequest(`${API_URL}/catalogData`, (goods) => {
            this.goods = JSON.parse(goods);
            this.filteredGoods = JSON.parse(goods);
        });
        this.getCartData();
    }
});


//**********************
class GoodsItem {
    constructor (title = 'title', price = 0) {
        this.product_name = title;
        this.price = price;
    }
}

//**********************
class GoodsList {
    constructor () {
        this.sumGoods = 0;
        this.goods = [];
        this.filteredGoods = [];
    }

    calculateSumAllGoods () {
        this.goods.forEach(good => {
            this.sumGoods += good.price;
        });
        return this.sumGoods;
    }
}

//**********************
class ProductsCart {
    constructor () {
        this.sum = 0;
    }

    calculateSum (a, b) {
        this.sum = a + b;
        return this.sum;
    }

    buy () {

    }
}

//**********************
class ProductsCartElement {
    constructor () {
        // цена товара
        this.priceProduct = 0;
        // кол-во товара
        this.count = 0;
    }

    // изменить кол-во товара
    changeCount () {}
    // добавить в корзину
    addToCart () {}
    // убрать из корзины
    removeFromCart () {}
    // получение списка товаров корзины
    getListProductsCart () {}
}