//let arg_one = document.querySelector('#arg-one');

const check = (a, b, calc) => {
    if (a == null || b == null) {
        return null;
    } else {
        if (typeof a === 'number' && typeof b === 'number') {
            // пытался сделать проверку на существование 2-го аргумента => т.е. addition(10), по идее 2-й арг. должен быть undefined?
            if (typeof b === 'undefined') {
                return;
            }
            switch (calc) {
                case 'addition':  a + b;
                break;
                case 'subtraction':  a - b;
                    break;
                case 'multiplication':  a * b;
                    break;
                case 'division': {
                   if (b === 0) {
                        alert('На ноль делить нельзя!');
                   } else {
                        a / b;
                   }
                    break;}
            }
        } else {
            return TypeError('Упс. Неверный тип!');
        }
    }
};

const addition = (a, b) => {
    check(a,b,'addition');
};

const subtraction = (a, b) => {
    check(a,b,'subtraction');
};

const multiplication = (a, b) => {
    check(a,b,'multiplication');
};

const division = (a, b) => {
    check(a,b,'division');
};

module.exports = {
    addition: addition,
    subtraction: subtraction,
    multiplication: multiplication,
    division: division
};