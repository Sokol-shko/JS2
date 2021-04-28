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

function escape(string) {
    let htmlEscapes = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    };

    return string.replace(/[&<>"']/g, function(match) {
        return htmlEscapes[match];
    });
}

class FormValidation {
    constructor () {
        this.pattern = '';
        this.name = '';
        this.phone = '';
        this.mail = '';
        this.text = '';
    }

    checkValidation () {
        let sendButton = document.querySelector('#send');
        sendButton.addEventListener('click', (e) => {
            // проверка имени
            this.pattern = /^([a-zа-яё]+)$/ig;
            let inputName = document.querySelector('#name');
            this.name = inputName.value;
            let errorName = document.querySelector('#error_name');

            if (this.pattern.test(this.name.trim())) {
                errorName.innerHTML = '';
                inputName.classList.remove('error_border');
            } else {
                errorName.innerHTML = 'Ошибка! Проверьте требование имени';
                inputName.classList.add('error_border');
            }

            // проверка телефона
            this.pattern = /^\+7\(\d{3}\)\d{3}-\d{4}$/ig;
            let inputPhone = document.querySelector('#phone');
            this.phone = inputPhone.value;
            let errorPhone = document.querySelector('#error_phone');
            if (this.pattern.test(this.phone.trim())) {
                errorPhone.innerHTML = '';
                inputPhone.classList.remove('error_border');
            } else {
                errorPhone.innerHTML = 'Ошибка! Проверьте требование номера телефона';
                inputPhone.classList.add('error_border');
            }

            // проверка E-mail
            this.pattern = /^[a-z\d]+(\.?[_a-z\d-]+)*@[a-z\d-]+(\.[a-z\d-]+)*(\.[a-z]{2,})$/ig;
            let inputMail = document.querySelector('#mail');
            this.mail = inputMail.value;
            let errorMail = document.querySelector('#error_mail');
            if (this.pattern.test(this.mail.trim())) {
                errorMail.innerHTML = '';
                inputMail.classList.remove('error_border');
            } else {
                errorMail.innerHTML = 'Ошибка! Проверьте требование E-mail';
                inputMail.classList.add('error_border');
            }

            // текст по условию любой
            this.text = document.querySelector('#text').value;
            console.log(this.text = escape(this.text));
        })
    }
}

let fv = new FormValidation();
fv.checkValidation();