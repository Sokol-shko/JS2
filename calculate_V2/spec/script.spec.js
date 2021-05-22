const script = require('../script.js');

const addition = script.addition;
const subtraction = script.subtraction;
const multiplication = script.multiplication;
const division = script.division;

describe('Функция сложения addition()', () => {
    it('Функция должна возвращать 12 при аргументах (10, 2)', () => {
        expect(addition(10, 2)).toBe(12);
    });
    it('Функция должна возвращать null при аргументах (null, 2) или (10, null)', () => {
        expect(addition(null, 2)).toBeNull();
        expect(addition(10, null)).toBeNull();
    });
    // попытка проверки на undefined
    // it('Функция должна возвращать undefined при отсутствии 2-го аргумента (10)', () => {
    //     expect(addition(10)).toBeUndefined();
    // });
    // попытка проверки на "Не число"
    // it('Функция должна возвращать ошибку при аргументах ("Не число", 2) или (10, "Не число")', () => {
    //     expect(() => addition('Не число', 2)).toThrowError('Ошибка!');
    //     expect(addition(10, 'Не число')).toThrowError('Ошибка');
    // });
});

describe('Функция вычитания subtraction()', () => {
    it('Функция должна возвращать 8 при аргументах (10, 2)', () => {
        expect(subtraction(10, 2)).toBe(8);
    });
    it('Функция должна возвращать -4 при аргументах (6, 10)', () => {
        expect(subtraction(6, 10)).toBe(-4);
    });
    it('Функция должна возвращать null при аргументах (null, 2) или (10, null)', () => {
        expect(subtraction(null, 2)).toBeNull();
        expect(subtraction(10, null)).toBeNull();
    })
});

describe('Функция умножения multiplication()', () => {
    it('Функция должна возвращать 20 при аргументах (10, 2)', () => {
        expect(multiplication(10, 2)).toBe(20);
    });
    it('Функция должна возвращать null при аргументах (null, 2) или (10, null)', () => {
        expect(multiplication(null, 2)).toBeNull();
        expect(multiplication(10, null)).toBeNull();
    })
});

describe('Функция деления division()', () => {
    it('Функция должна возвращать 5 при аргументах (10, 2)', () => {
        expect(division(10, 2)).toBe(5);
    });
    it('Функция должна возвращать null при аргументах (null, 2) или (10, null)', () => {
        expect(multiplication(null, 2)).toBeNull();
        expect(multiplication(10, null)).toBeNull();
    });
    it('Функция должна возвращать ошибку при аргументах (10, 0)', () => {
        expect(division(10, 0)).toBe(console.log('На ноль делить нельзя!'));
    });
});