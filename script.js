const calcContainer = document.querySelector('.calcContainer');
const calcBtns = document.querySelectorAll('.btn');

let firstNum = '';
let lastNum = '';
console.log("calcBtns ", calcBtns);

calcBtns.forEach((btn) => { 
    const btnValue = btn.innerText;
    
    console.log("btnValue ", btnValue);
    btn.onclick = () => {
        // perform math function(btnValue);
    };
});

const add = function(array) {
	return array.reduce((x, y) => x + y);
};

const subtract = function(array) {
	return array.reduce((x, y) => x - y);
};

const multiply = function(array) {
  return array.reduce((x, y) => x * y);
};

const divide = function(array) {
  return array.reduce((x, y) => x / y);
};