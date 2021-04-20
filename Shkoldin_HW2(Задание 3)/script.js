class Hamburger {
    constructor(size, stuffing) {

    }
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

}
//
//     addTopping(topping) {}    // Добавить добавку }
//     removeTopping(topping) { // Убрать добавку }
//     getToppings(topping) {   // Получить список добавок }
//     getSize() {              // Узнать размер гамбургера }
//     getStuffing() {          // Узнать начинку гамбургера }
//     calculatePrice() {       // Узнать цену }
//     calculateCalories() {    // Узнать калорийность }
// }

гамбургер
конструктор (размер, начинка)
// размеры: Маленький (50 рублей, 20 калорий). Большой (100 рублей, 40 калорий).
// начинки: обязат:
// ### С сыром (+10 рублей, +20 калорий).
// ### С салатом (+20 рублей, +5 калорий).
// ### С картофелем (+15 рублей, +10 калорий).
//доп:
//посыпать приправой (+15 рублей, +0 калорий)
//полить майонезом (+20 рублей, +5 калорий)

// расчитать стоимость и калорийность гамбургера
