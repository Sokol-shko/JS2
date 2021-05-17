Vue.component('cart-item', {
    name: 'goods-item',
    props: ['good'],
    template: `
        <div>
            <h3>{{ good.product_name }}</h3>
            <p>{{ good.price }}</p>
            <button @click="$emit('delete-from-cart', good)" class="delete-from-cart" type="button">Удалить</button> 
        </div>    
    `
});

export default {
    cart_item: 'cart-item'
}