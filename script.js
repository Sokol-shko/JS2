'use strict';

//import makeGETRequest from './adapter.js';

const app = new Vue({
    el: '#app',
    data: {
        goods: [],
        filteredGoods: [],
        searchLine: ''
    },
    methods: {
        makeGETRequest(url) {
            const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

            return new Promise((resolve, reject) => {
                let xhr;

                if (window.XMLHttpRequest) {
                    xhr = new XMLHttpRequest();
                } else if (window.ActiveXObject) {
                    xhr = new ActiveXObject("Microsoft.XMLHTTP");
                }

                xhr.onreadystatechange = () => {
                    if (xhr.readyState === 4) {
                        if (xhr.status === 200) resolve(xhr.responseText);
                        else reject('Извините, произошёл сбой. Мы уже разбираемся в проблеме.');
                    }
                };

                console.log('Итоговый URL => ', `${API_URL}${url}`);
                xhr.open('GET', `${API_URL}${url}`, true);
                xhr.send();
            })
        },
        filterGoods() {
            const regexp = new RegExp(this.searchLine, 'i');
            this.filteredGoods = this.goods.filter(good =>
                regexp.test(good.product_name));
            console.log(this.filteredGoods);
        }
    },
    mounted() {
        this.makeGETRequest(`/catalogData.json`)
            .then((goods) => {
                this.goods = JSON.parse(goods);
                this.filteredGoods = JSON.parse(goods);
            })
    }
});


//**********************
class GoodsItem {
    constructor (title = 'title', price = 0) {
        this.product_name = title;
        this.price = price;
    }

    // render () {
    //     return `<div class="goods-item"><h3>${this.product_name}</h3><p>${this.price}</p></div>`;
    // }
}

//**********************
class GoodsList {
    constructor () {
        this.sumGoods = 0;
        this.goods = [];
        this.filteredGoods = [];
    }
    // fetchGoods () {
    //     return makeGETRequest(`/catalogData.json`)
    //         .then((goods) => {
    //             this.goods = JSON.parse(goods);
    //             this.filteredGoods = JSON.parse(goods);
    //         })
    // }

    // filterGoods(value) {
    //     const regexp = new RegExp(value, 'i');
    //     this.filteredGoods = this.goods.filter(good =>
    //         regexp.test(good.product_name));
    //     // this.render();
    // }

    // render () {
    //     let listHtml = '';
    //     this.filteredGoods.forEach(good => {
    //         const goodItem = new GoodsItem(good.product_name, good.price);
    //         listHtml += goodItem.render();
    //     });
    //     document.querySelector('.goods-list').innerHTML = listHtml;
    // }

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


//**********************

const  list = new GoodsList();
// list.fetchGoods()
//     .then(() => list.render());

// list.calculateSumAllGoods();
// //alert(`${list.sumGoods} руб`);
//
// const searchInput = document.querySelector('.goods-search');
//
// const searchButton = document.querySelector('.search-button');
// searchButton.addEventListener('click', (e) => {
//     const value = searchInput.value;
//     list.filterGoods(value);
// });