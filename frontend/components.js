Vue.component('goods-list', {
    name: 'goods-list',
    props: ['goods', 'addToCart'],
    template: `
        <div>
            <div v-if="goods.length !== 0" class="goods-list">
                <div  v-for="good in goods" class="goods-item">
                    <goods-item @add-to-cart="addToCart" :good="good"></goods-item>
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
            <button @click="$emit('add-to-cart', good)" class="to-cart">В корзину</button> 
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
    props: ['goods', 'deleteFromCart'],
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
            <div v-show="isVisibleCart" class="modalCarts">
                <h3>Корзина</h3>
                <div v-if="goods.length !== 0" class="goods-list">
                    <div v-for="good in goods" class="goods-item">
                        <cart-item @delete-from-cart="deleteFromCart" :good="good"></cart-item>
                    </div>
                </div>
                <div v-else>Пока пусто</div>
            </div>
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
    name: 'goods-item',
    props: ['good'],
    template: `
        <div>
            <h3>{{ good.product_name }}</h3>
            <p>{{ good.price }}</p>
            <button @click.prevent="$emit('delete-from-cart', good)" class="delete-from-cart">Удалить</button> 
        </div>    
    `
});