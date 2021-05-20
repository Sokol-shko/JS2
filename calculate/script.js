const check = (a, b, calc) => {
    if (a == null || b == null) {
        return null;
    } else {
        if (typeof a === 'number' && typeof b === 'number') {
            // пытался сделать проверку на существование 2-го аргумента => т.е. addition(10), по идее 2-й арг. должен быть undefined?
            if (typeof b === 'undefined') {
                return;
            }
            let result;
            switch (calc) {
                case 'addition':  result = a + b;
                break;
                case 'subtraction':  result = a - b;
                break;
                case 'multiplication':  result = a * b;
                break;
                case 'division': {
                   if (b === 0) {
                       result = console.log('На ноль делить нельзя!');
                   } else {
                       result = a / b;
                   }
                }
            }
            return result;
        } else {
            return TypeError('Упс. Неверный тип!');
        }
    }
};

const addition = (a, b) => {
    console.log(check(a,b,'addition'));
};

const subtraction = (a, b) => {
    console.log(check(a,b,'subtraction'));
};

const multiplication = (a, b) => {
    console.log(check(a,b,'multiplication'));
};

const division = (a, b) => {
    console.log(check(a,b,'division'));
};

addition(2,10);
subtraction(2,10);
subtraction(null,10);
multiplication(2,10);
division(2,10);
division(2,0);

module.exports = {
    addition: addition,
    subtraction: subtraction,
    multiplication: multiplication,
    division: division
};