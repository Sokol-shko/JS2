const script = require('../script.js');
const calc = script.calc;

describe('Функция сложения calc()', () => {
    it('должна возвращать 12 при аргументах (10, 2)', () => {
        expect(calc(10, 2)).toBe(12);
    })
});