const addition = (a, b) => {
    if (a == null || b == null) {
        return null;
    } else {
        if (typeof a === 'number' && typeof b === 'number') {
            // пытался сделать проверку на существование 2-го аргумента => т.е. addition(10), по идее 2-й арг. должен быть undefined?
            if (typeof b === 'undefined') {
                return undefined;
            } else {
                return a + b;
            }
        } else {
            return TypeError('Упс. Неверный тип!');
        }
    }
};

const subtraction = (a, b) => {
    if (a == null || b == null) {
        return null;
    } else {
        if (typeof a === 'number' && typeof b === 'number') {
            // пытался сделать проверку на существование 2-го аргумента => т.е. addition(10), по идее 2-й арг. должен быть undefined?
            if (typeof b === 'undefined') {
                return undefined;
            } else {
                return a - b;
            }
        } else {
            return TypeError('Упс. Неверный тип!');
        }
    }
};

const multiplication = (a, b) => {
    if (a == null || b == null) {
        return null;
    } else {
        if (typeof a === 'number' && typeof b === 'number') {
            // пытался сделать проверку на существование 2-го аргумента => т.е. addition(10), по идее 2-й арг. должен быть undefined?
            if (typeof b === 'undefined') {
                return undefined;
            } else {
                return a * b;
            }
        } else {
            return TypeError('Упс. Неверный тип!');
        }
    }
};

const division = (a, b) => {
    if (a == null || b == null) {
        return null;
    } else {
        if (typeof a === 'number' && typeof b === 'number') {
            // пытался сделать проверку на существование 2-го аргумента => т.е. addition(10), по идее 2-й арг. должен быть undefined?
            if (typeof b === 'undefined') {
                return undefined;
            } else {
                if (b === 0) {
                    return console.log('На ноль делить нельзя!');
                } else {
                    return a / b;
                }
            }
        } else {
            return TypeError('Упс. Неверный тип!');
        }
    }
};

module.exports = {
    addition: addition,
    subtraction: subtraction,
    multiplication: multiplication,
    division: division
};