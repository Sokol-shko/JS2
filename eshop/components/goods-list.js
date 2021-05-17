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

export default {
    goods_list: 'goods-list'
}