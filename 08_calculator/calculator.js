const add = function (a, b) {
  return a + b;
  
};

const subtract = function (a,b) {
  return a - b;
};
function isEmpty(array) {
  for (elem in array) {
    return false;
  }
  return true;
}
const sum = function (array) {
  if (array.length === 0) { return 0 };
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
const multiply = function(array) {
  if (array.length === 0) { return 0 };
  let product = 0;
  for (let i = 0; i < array.length; i++) {
    if (i == 0) {
      product = array[i]
      continue;
    }
    product *= array[i];
  }
  return product;
};

const power = function (base, exponent) {
  let output = 0;
  for (let i = 1; i < exponent; i++){
    if (i == 1) { output = base }
    output *= base;
  }
  return output;
};

const factorial = function (value) {
  if (value === 0) { return 1 };
  let output = 1;
  for (let i = 1; i < value+1; i++){
    output *= i;
  }
  return output;
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
