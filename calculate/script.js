const app = new Vue({
    el: '#app',
    data: {
        a: '',
        b: ''
    },
    methods: {
        calc (a, b) {
           return console.log(a + b);
        }
    }
});

module.exports = {
    calc: app.calc()
};