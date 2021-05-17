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

export default {
    goods_search: 'goods-search'
}