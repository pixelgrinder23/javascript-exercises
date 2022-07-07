const add = function(...args) {
  total = 0;
  let inputArray = [...args];
  for (let i = 0; i < inputArray.length; i++) {
    total += inputArray[i];
  }
  return total;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(a) {
  let total = 0;
	for (let i = 0; i < a.length; i++) {
    total += a[i];
  }
  return total;

};

const multiply = function(a) {
  let total = a[0];
  for (let i = 1; i < a.length; i++) {
    total *= a[i];
  }
  return total;

}; 

const power = function(a, b) {
  return a ** b;
};

const factorial = function(a) {
  let total = a;
  if (a === 0){
    total = 1;
  } else {
    for (let i = 1; i < a; i++) {
      total *= i;
    }
  };
    return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
