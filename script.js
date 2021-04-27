'use strict';

// ********************** Задание 1-2

let inputText = '';
let resultText = '';

let regexp = /^(\')|(\')$|(\B\')|(\'\B)|(\'\')/g;

let res = document.querySelector('#resultText');

let change = document.querySelector('#change');
change.addEventListener('click', () => {
    inputText = document.querySelector('#inputText').value;
    console.log(regexp.test(inputText));
    resultText = inputText.replace(regexp, '"');
    res.innerHTML = resultText;
});

// ********************** Задание 3

class FormValidation {
    constructor () {
        this.name = '';
        this.phone = '';
        this.mail = '';
        this.text = '';
        this.error = '';
    }

}