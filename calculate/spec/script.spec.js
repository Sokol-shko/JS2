const script = require('../script.js');
const addition = script.addition;
const subtraction = script.subtraction;
const multiplication = script.multiplication;
const division = script.division;

describe('Функция сложения addition()', () => {
    it('должна возвращать 12 при аргументах (10, 2)', () => {
        expect(addition(10, 2)).toBe(12);
    })
});

describe('Функция вычитания subtraction()', () => {
    it('должна возвращать 8 при аргументах (10, 2)', () => {
        expect(subtraction(10, 2)).toBe(8);
    });
    it('должна возвращать -4 при аргументах (6, 10)', () => {
        expect(subtraction(6, 10)).toBe(-4);
    })
});

describe('Функция умножения multiplication()', () => {
    it('должна возвращать 20 при аргументах (10, 2)', () => {
        expect(multiplication(10, 2)).toBe(20);
    })
});

describe('Функция деления division()', () => {
    it('должна возвращать 5 при аргументах (10, 2)', () => {
        expect(division(10, 2)).toBe(5);
    })
});