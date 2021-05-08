Vue.component('goods-list', {
    name: 'goods-list',
    props: ['goods'],
    template: `
        <div>
            <div v-if="goods.length !== 0" class="goods-list">
                <div  v-for="good in goods" class="goods-item">
                    <goods-item @add-in-cart="" :good="good"></goods-item>
                </div>     
            </div>
            <div v-else>
                Нет данных!
            </div>
        </div>
    `
});

Vue.component('goods-item', {
    name: 'goods-item',
    props: ['good'],
    template: `
        <div>
            <h3>{{ good.product_name }}</h3>
            <p>{{ good.price }}</p>
            <button class="in-cart">В корзину</button> 
        </div>    
    `
});

Vue.component('goods-search', {
    name: 'goods-search',
    props: ['searchLine'],
    template: `
        <div class="flex">
            <input :value="searchLine" @input="$emit('input', $event.target.value)" type="text" class="goods-search"/>
            <button  @click="$emit('filter-goods')" class="search-button" type="button" >Искать</button>
        </div>
    `
});

Vue.component('cart', {
    name: 'cart',
    data: () => ({
        isVisibleCart: false
    }),
    methods: {
        changeVisibleCart () {
            this.isVisibleCart = !this.isVisibleCart;
        },
    },
    template: `
        <div class="flex">
            <button @click="changeVisibleCart" class="cart-button" type="button" >Корзина</button>
            <span v-show="isVisibleCart" class="modalCarts">
                <h3>Корзина</h3>
                <cart-item @click="$emit('add-in-cart', good"></cart-item>
            </span>
        </div>    
    `
});

Vue.component('message-error', {
    name: 'message-error',
    props: ['msgError'],
    template: `
        <div>
            <p>Не удаётся выполнить запрос к серверу</p>
        </div>
    `
});

Vue.component('cart-item', {
    name: 'cart-item',
    props: ['good'],
    template: `
        <div>
            <h3>{{ good.product_name }}</h3>
            <p>{{ good.price }}</p>
<!--            <button class="delete-from-cart">Удалить</button> -->
        </div>    
    `
});