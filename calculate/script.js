let arg_one = document.querySelector('#arg-one');

const addition = (a, b) => {
    return a + b;
};

const subtraction = (a, b) => {
    return a - b;
};

const multiplication = (a, b) => {
    return a * b;
};

const division = (a, b) => {
    return a / b;
};

module.exports = {
    addition: addition,
    subtraction: subtraction,
    multiplication: multiplication,
    division: division
};