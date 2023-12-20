// HIGHER ORDER FUNCTION
// A function which take another function as a arguments or return a function from it is known as higher order function

// E 1
function x() {
  return "hello";
}
function y(x) {
  console.log(x());
}
y(x);

// E 2

function a() {
  return "qwerty";
}

function b() {
  console.log(a());
}
b(a);

// E 3

function q() {
  return "asdfghjkl";
}
function p() {
  return q();
}
console.log(p(q));

// E 4

const radius = [1, 2, 3, 4];

const calculate = function (radius) {
  output = [];
  for (i = 0; i < radius.length; i++) {
    output.push(Math.PI * radius[i] * radius[i]);
  }
  return output;
};
// console.log(calculate(radius));

// E 5

const radius3 = [2, 3, 4, 5, 6];

const calculateCirumference = function (radius) {
  const output3 = [];
  for (i = 0; i < radius3.length; i++) {
    output3.push(2 * Math.PI * radius3[i]);
  }
  return output3;
};
console.log(calculateCirumference(radius3));

const radius4 = [2, 3, 4, 5, 6];

const area = function (radius4) {
  return 2 * Math.PI * radius4;
};

const calculate5 = function (radius4, logic) {
  const output9 = [];
  for (i = 0; i < radius4.length; i++) {
    output9.push(logic(radius[i]));
  }
  return output9;
};
console.log(calculate5(radius4, area));
// ******************************************************************
// E 6
function calculate55(operation, a, b) {
  return operation(a, b);
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

const result = calculate55(add, 3, 4);
const result1 = calculate55(subtract, 3, 4);

console.log(result);
console.log(result1);

function calC(operation, a, b) {
  return operation(a, b);
}

function add(a, b) {
  return a + b;
}

const resultss = calC(add, 9, 8);
console.log(resultss);

function calculator(operation, a, b) {
  return operation(a, b);
}

function add4(a, b) {
  return a + b;
}

console.log(calculator(add4, 5, 6));

// **************************************************************
// IMPURE FUNCTION
const arr = [1, 2, 3];
function addElem(elem) {
  arr.push(elem);
}
console.log(addElem(4));
console.log(arr);

// PURE FUNCTION
// Pure function in javascript are they produce same output for the same output without side effect

// E 1
function add(a, b) {
  return a + b;
}

let total = 8;

function addTotal(x) {
  total = total + x;
  return total;
}
console.log(addTotal(4));

// E 3

function subt(a, b) {
  return a - b;
}

const total1 = 23;

function totalcal(x) {
  return total1 + x;
}
console.log(totalcal(5));
// *******************************************************
function calculate(operation, a, b) {
  return operation(a, b);
}
function add(a,b) {
  return a+b
  
}
console.log(calculate(add));