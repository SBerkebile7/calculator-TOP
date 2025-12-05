const calcContainer = document.querySelector('.calcContainer');
const calcBtns = document.querySelectorAll('.btn');
const output = document.querySelector('.output');

let firstNum = '';
let operator = '';
let currentInput = '0';
let shouldClear = false;

const updateDisplay = () => {
    output.innerText = currentInput;
};

const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const multiply = function(a, b) {
  return a * b;
};

const divide = function(a, b) {
  return a / b;
};

const operate = (num1, op, num2) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    
    switch(op) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return b;
    }
};

calcBtns.forEach((btn) => { 
    const btnValue = btn.innerText;
    
    btn.onclick = () => {
        // Handle number input
        if (btnValue >= '0' && btnValue <= '9') {
            if (shouldClear) {
                currentInput = btnValue;
                shouldClear = false;
            } else if (currentInput === '0') {
                currentInput = btnValue;
            } else {
                currentInput += btnValue;
            }
            updateDisplay();
        }
        // Handle operators
        else if (btnValue === '+' || btnValue === '-' || btnValue === '*' || btnValue === '/') {
            if (firstNum === '' && currentInput !== '') {
                firstNum = currentInput;
                operator = btnValue;
                shouldClear = true;
            } else if (firstNum !== '' && currentInput !== '0') {
                // Chain operations
                const result = operate(firstNum, operator, currentInput);
                firstNum = result;
                operator = btnValue;
                shouldClear = true;
                updateDisplay();
            }
        }
        // Handle equals
        else if (btnValue === '=') {
            if (firstNum !== '' && operator !== '' && currentInput !== '') {
                const result = operate(firstNum, operator, currentInput);
                currentInput = result.toString();
                firstNum = '';
                operator = '';
                shouldClear = true;
                updateDisplay();
            }
        }
        // Handle clear
        else if (btnValue === 'C') {
            firstNum = '';
            operator = '';
            currentInput = '0';
            shouldClear = false;
            updateDisplay();
        }
    };
});