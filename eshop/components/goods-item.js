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

export default {
    goods_item: 'goods-item'
}