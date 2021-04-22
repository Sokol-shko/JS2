class Hamburger {
    size = {
        small: {
            price: 50,
            calories: 20
        },
        big: {
            price: 100,
            calories: 40
        }
    };
    stuffing = {
        cheese: {
            price: 10,
            calories: 20
        },
        salad: {
            price: 20,
            calories: 5
        },
        potatoes: {
            price: 15,
            calories: 10
        }
    };
    topping = {
        condiment: {
            price: 15,
            calories: 0
        },
        mayonnaise: {
            price: 20,
            calories: 5
        }
    };

    sizeSelectArr = [];
    stuffingSelectArr = [];
    toppingCheckedSum = [];
    totalAmount = 0;
    totalCalories = 0;

    getSize() {
        let sizeSelect = document.querySelector('select[name="size"]');
        let strSize = sizeSelect.options[sizeSelect.selectedIndex].value;
        this.sizeSelectArr.push(this.size[strSize].price);
        this.sizeSelectArr.push(this.size[strSize].calories);
        return this.sizeSelectArr;
    }

    getStuffing() {
        let stuffingSelect = document.querySelector('select[name="stuffing"]');
        let strStuffing = stuffingSelect.options[stuffingSelect.selectedIndex].value;
        this.stuffingSelectArr.push(this.stuffing[strStuffing].price);
        this.stuffingSelectArr.push(this.stuffing[strStuffing].calories);
        return this.stuffingSelectArr;
    }

    getTopping() {
        let toppingChecked = document.querySelectorAll('input[name="addition"]');
        let valuesChecked = [];
        let priceChecked = [];
        let toppingCheckedPriceSum = 0;
        let toppingCheckedCaloriesSum = 0;

        // Подсчёт суммы допов, которые выбрал пользователь
        for (let i = 0; i < toppingChecked.length; i++) {
            for (let j = 0; !toppingChecked[j].checked; j++) {

                // я вижу в чём здесь проблема, но не успел придумать решение
                if (toppingChecked[i].checked) {
                    valuesChecked.push(toppingChecked[i].value);
                    //priceChecked.push(this.topping[valuesChecked[i]].price)
                    //toppingCheckedPriceSum += this.topping[valuesChecked[i]].price;  //подсчёт цены допов
                    //toppingCheckedCaloriesSum += this.topping[valuesChecked[i]].calories;   // подсчёт калорий допов
                }
            }

        }

        //this.toppingCheckedSum.push(toppingCheckedPriceSum, toppingCheckedCaloriesSum);
        return toppingCheckedPriceSum;
    }

    calculatePrice() {
        // Получение цены выбранного размера гамбургера
        let priceSize = this.getSize()[0];

        // Получение цены выбранной начинки гамбургера
        let priceStuffing = this.getStuffing()[0];

        // Получение цены выбранных допов гамбургера
        //let priceTopping = this.getTopping()[0];
        this.getTopping();
        // console.log(priceSize);
        // console.log(priceStuffing);
        //console.log(priceTopping);

        return console.log(`Итоговая сумма: ${this.totalAmount = priceSize + priceStuffing} руб.`); // + допы
    }

    calculateCalories() {
        // Получение калорий выбранного размера гамбургера
        let caloriesSize = this.getSize()[1];

        // Получение калорий выбранной начинки гамбургера
        let caloriesStuffing = this.getStuffing()[1];

        // Получение калорий выбранных допов гамбургера
        //let caloriesTopping = this.getTopping()[1];
        this.getTopping();
        // console.log(caloriesSize);
        // console.log(caloriesStuffing);
        //console.log(caloriesTopping);

        return console.log(`Итого калорий: ${this.totalCalories = caloriesSize + caloriesStuffing} ккал`); // + допы
    }
}

let burger = new Hamburger();
burger.calculatePrice();
burger.calculateCalories();








