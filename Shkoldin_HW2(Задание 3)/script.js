//
//     addTopping(topping) {}    // Добавить добавку }
//     removeTopping(topping) { // Убрать добавку }
//     getToppings(topping) {   // Получить список добавок }
//     getSize() {              // Узнать размер гамбургера }
//     getStuffing() {          // Узнать начинку гамбургера }
//     calculatePrice() {       // Узнать цену }
//     calculateCalories() {    // Узнать калорийность }
// }

class Hamburger {
    size = {
        small: {
            price: 50,
            kkal: 20
        },
        big: {
            price: 100,
            kkal: 40
        }
    }
    stuffing = {
        cheese: {
            price: 10,
            kkal: 20
        },
        salad: {
            price: 20,
            kkal: 5
        },
        potatoes: {
            price: 15,
            kkal: 10
        }
    }
    topping = {
        condiment: {
            price: 15,
            kkal: 0
        },
        mayonnaise: {
            price: 20,
            kkal: 5
        }
    }

    addTopping(topping) {}
    removeTopping(topping) {}
    getToppings(topping) {}
    getSize() {}
    getStuffing() {}
    calculatePrice() {
        let sizeSelect = document.querySelector('select[name="size"]');
        let strSize = sizeSelect.options[sizeSelect.selectedIndex].value;
        let priceSize = this.size[strSize].price;

        let stuffingSelect = document.querySelector('select[name="stuffing"]');
        let strStuffing = stuffingSelect.options[stuffingSelect.selectedIndex].value;
        let priceStuffing = this.stuffing[strStuffing].price;

        let toppingChecked = document.querySelectorAll('input[name="addition"]');
        let valuesChecked = [];
        for (let i = 0;i < toppingChecked.length; i++) {
            if (toppingChecked[i].checked) {
                valuesChecked.push(toppingChecked[i].value);
            }
        }
        // if (toppingChecked.checked) {
        //     mas = toppingChecked.value;
        // }

        // let strStuffing = stuffingSelect.options[stuffingSelect.selectedIndex].value;
        // let priceStuffing = this.stuffing[strStuffing].price;

        console.log(priceSize);
        console.log(priceStuffing);
        console.log(valuesChecked);
    }
    calculateCalories() {}
}

let burger = new Hamburger();
burger.calculatePrice();









