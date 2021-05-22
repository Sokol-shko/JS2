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

export default {
    cart: 'cart'
}