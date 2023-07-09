let mathematicOperatorDiv = document.querySelector('.item2');
let firstInnerDiv = document.querySelector('.item3-inner1-1');
let secondtInnerDiv = document.querySelector('.item3-inner1-2');
let thirdInnerDiv = document.querySelector('.item3-inner1-3');
let fourthInnerDiv = document.querySelector('.item3-inner1-4');
let equalButton = document.querySelector('#equal');
let input = document.querySelector('input');
let mathematicOperator,numbers;

const mathematicOperation = {
    addition: function(firstNumber, secondNumber) {
        return firstNumber + secondNumber;
    },

    subtraction: function(firstNumber, secondNumber) {
        return firstNumber - secondNumber;
    },

    multiplication: function(firstNumber, secondNumber) {
        return firstNumber * secondNumber;
    },

    division: function(firstNumber, secondNumber) {
        return firstNumber / secondNumber;
    },
};

firstInnerDiv.addEventListener('click', (e) => {
    if (e.target.id == 'seven') {
        input.value += 7;
    } else if (e.target.id == 'eight') {
        input.value += 8;
    } else {
        input.value += 9;
    }
});

secondtInnerDiv.addEventListener('click', (e) => {
    if (e.target.id == 'four') {
        input.value += 4;
    } else if (e.target.id == 'five') {
        input.value += 5;
    } else {
        input.value += 6;
    }
});

thirdInnerDiv.addEventListener('click', (e) => {
    if (e.target.id == 'one') {
        input.value += 1;
    } else if (e.target.id == 'two') {
        input.value += 2;
    } else {
        input.value += 3;
    }
});

fourthInnerDiv.addEventListener('click', (e) => {
    if (e.target.id == 'zero') {
        input.value += 0;
    } else if (e.target.id == 'dot') {
        input.value += '.';
    } else {
        input.value = '';
    }
});

mathematicOperatorDiv.addEventListener('click', (e) => {
    if (e.target.id == 'addition') {
        input.value += '+';
        mathematicOperator = '+';
    } else if (e.target.id == 'subtraction') {
        input.value += '-';
        mathematicOperator = '-';
    } else if (e.target.id == 'multiplication') {
        input.value += 'x';
        mathematicOperator = 'x';
    } else {
        input.value += ':';
        mathematicOperator = ':';
    }
});

input.addEventListener('keypress', (e) => {
    let key = e.key;

    if (key == '+') {
        mathematicOperator = '+';
    } else if (key == '-') {
        mathematicOperator = '-';
    } else if (key == 'x') {
        mathematicOperator = 'x';
    } else if (key == ':') {
        mathematicOperator = ':';
    }
});

equalButton.addEventListener('click', () => {
    if (mathematicOperator == '+') {
        numbers = input.value.split('+');
        input.value = mathematicOperation.addition(+numbers[0], +numbers[1]);
    } else if (mathematicOperator == '-') {
        numbers = input.value.split('-');
        input.value = mathematicOperation.subtraction(+numbers[0], +numbers[1]); 
    } else if (mathematicOperator == 'x') {
        numbers = input.value.split('x');
        input.value = mathematicOperation.multiplication(+numbers[0], +numbers[1]); 
    } 

    if (mathematicOperator == ':') {
        numbers = input.value.split(':');

        if (numbers[1] == '0') {
            input.value = 'Cannot divide by zero';
        } else {
            input.value = mathematicOperation.division(+numbers[0], +numbers[1]);
        }
    }
});















