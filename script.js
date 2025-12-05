const calcContainer = document.querySelector(".calcContainer");

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