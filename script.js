'use strict';

import makeGETRequest from './adapter.js';

//**********************
class GoodsItem {
  constructor (title = 'title', price = 0) {
    this.product_name = title;
    this.price = price;
  }

  render () {
    return `<div class="goods-item"><h3>${this.product_name}</h3><p>${this.price}</p></div>`;
  }
}

//**********************
class GoodsList {
  sumGoods = 0;
  constructor () {
    this.goods = [];
  }
  fetchGoods () {
    return makeGETRequest(`/catalogData.json`)
        .then((goods) => {
          this.goods = JSON.parse(goods);
        })
  }



  render () {
    let listHtml = '';
    this.goods.forEach(good => {
      const goodItem = new GoodsItem(good.product_name, good.price);
      listHtml += goodItem.render();
    });
    document.querySelector('.goods-list').innerHTML = listHtml;
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


//**********************

const  list = new GoodsList();
list.fetchGoods()
    .then(() => list.render());

list.calculateSumAllGoods();
//alert(`${list.sumGoods} руб`);

