Vue.component('goods-list', {
    name: 'goods-list',
    props: ['goods'],
    template: `
        <div>
            <div v-if="goods.length !== 0" class="goods-list">
                <div  v-for="good in goods" class="goods-item">
                    <goods-item :good="good"></goods-item>
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
        </div>    
    `
});

Vue.component('goods-search', {
    name: 'goods-search',
    props: ['searchLine', 'filteredGoods'],
    data() {
        return {
            searchLine: '',
        }
    },
    computed: {
        filterGoods() {
            const regexp = new RegExp(this.searchLine, 'i');
            console.log(this.searchLine);
            this.filteredGoods = this.goods.filter(good =>
                regexp.test(good.product_name));
            console.log(this.filteredGoods);
        }
    },
    template: `
        <div>
            <input v-model="searchLine" type="text" class="goods-search"/>
            <button @click="filterGoods" class="search-button" type="button" >Искать</button>
        </div>
    `
});
