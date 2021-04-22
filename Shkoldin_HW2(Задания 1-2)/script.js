// ************************************* Задание 1. Классы корзины и элемента корзины
class ProductsCart {
  sum = 0;

  calculateSum (a, b) {
    this.sum = a + b;
    return this.sum;
  }

  buy () {

  }
}

class ProductsCartElement {
  // цена товара
  priceProduct = 0;

  // кол-во товара
  count = 0;

  // изменить кол-во товара
  changeCount () {
  }

  // убрать из корзины
  remove () {

  }
}

class GoodsItem {
  constructor (title = 'title', price = 0) {
    this.title = title;
    this.price = price;
  }
  render () {
    return `
      <div class="goods-item">
        <h3>${this.title}</h3>
        <p>${this.price}</p>
      </div>
     `;
  }
}

class GoodsList {
  sumGoods = 0;
  constructor () {
    this.goods = [];
  }
  fetchGoods () {
    this.goods = [
      { title: 'Shirt', price: 150 },
      { title: 'Socks', price: 50 },
      { title: 'Jacket', price: 350 },
      { title: 'Shoes', price: 250 },
      { title: 'Shirt', price: 150 },
      { title: 'Socks', price: 50 },
      { title: 'Jacket', price: 350 },
      { title: 'Shoes', price: 250 },
      { title: 'Shirt', price: 150 },
      { title: 'Socks', price: 50 },
      { title: 'Jacket', price: 350 },
      { title: 'Shoes', price: 250 }
    ];
  }
  render () {
    let listHtml = '';
    this.goods.forEach(good => {
      const goodItem = new GoodsItem(good.title, good.price);
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

// Вызываем методы

const  list = new GoodsList();
list.fetchGoods();
list.render();


// ************************************* Задание 2. Сумма всех товаров
list.calculateSumAllGoods();
alert(`${list.sumGoods} руб`);

