const calcContainer = document.querySelector(".calcContainer");
const size = parseInt(window.getComputedStyle(calcContainer).width, 10);


const add = function(x, y) {
	 return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const multiply = function(x, y) {
  return x * y;
};

const divide = function(x, y) {
  return x / y;
};