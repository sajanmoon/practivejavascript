// Q 1 FUNCTION DECLARARTION

function square(num) {
  console.log(num * num);
}
square(4);

// Q 2 FUNCTION EXPRESSION

const fun = function (num) {
  return num * num;
};
console.log(fun(5));

// anonymous  function - A function which has no name

// Q 3 FIRST CLASS FUNCTION ?
// where function can be treated like a variable
// in this cases function can be passed to another function ,manipulated,return same as a variable can do
// E 1
function demo1(num) {
  return num * num;
}

function demo2(fn) {
  console.log(fn(6));
}
demo2(demo1);

// E 2
function add(num) {
  return num + num;
}

function add2(fn) {
  console.log(add(3));
}
add2(add);

// E 3
function sub(num1, num2) {
  return num2 - num1;
}
function fn1(fn) {
  console.log(sub(5, 3));
}
fn1(sub);

function addition(num1, num2) {
  return num1 + num2;
}

function add3(fn) {
  console.log(addition(3, 5));
}
add3(addition);

// Q 4 What is IIEF - Imeddiately invoked expression function
// E 1
(function multiply(num) {
  return num * num;
})(10);

// E 2
(function (x) {
  return (function (y) {
    console.log(x);
  })(2);
})(1);

// E 3
// Its happening because of clouser
(function (x) {
  return (function (y) {
    console.log(x);
  })(2);
})(1);

// *********************************************************
// FUNCTION SCOPE
// E 1
var num1 = 2;
num2 = 3;
name = "Hello";

function multifly() {
  console.log(num1 * num2);
}
multifly();

// E 2
// This will not work as let is a block scope
let num4 = 2;
num5 = 4;

function add() {
  // console.log(num4 * num4); // ERROR: Cannot access 'num4' before initialization
}
add();

// E 3
function getScore() {
  var num1 = 4;
  num2 = 6;
  function add() {
    console.log(name + "socred" + (num1 + num2));
  }
  return add();
}
getScore();

// E 4
function giveTotal() {
  var num1 = 20;
  num2 = 40;
  function add2() {
    console.log(name + " " + "scored" + " " + (num1 + num2));
  }
  add2();
}
giveTotal();

// E 5
// Cause let is a local scope it will print 1 2 3 4 5 in every 1 sec
for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    // console.log(i);
  }, i * 1000);
}

// E 6
// Cause var is a global scope it will print the value when i value is 5 after every 1 sec

for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    // console.log(i);
  }, i * 1000);
}

// **************************************************************
// HOISTING IN FUNCTION
// E 1
functionname();
function functionname() {
  console.log("function");
}

// E 2
function demo10() {
  var x = 8;
  console.log(x);
}
demo10();

// E 3
function demo11() {
  console.log(x);
  var x = 8;
}
demo11();

// QUESTION BASED ON HOISTING
// E 1
var x = 21;

var test = function () {
  console.log("test", x);
  var x = 20;
};
test();

// E 2

let z = 45;

var test2 = function () {
  // console.log("Z:", z); //Error : Cannot access 'z' before initialization
  let z = 200;
};
test2();

// PARAMS VS ARGUMENTS
// E 1
function test34(num) {
  //PARAMS
  console.log(num * num);
}
test34(8); //ARGUMENTS;

// E 2

function test99(num1, num2) {
  // Parameter
  console.log(num1 * num2);
}
test99(23, 34); //Arguments

// Spread vs Rest Operators
// SPREAD OPERATORS
// E 1
function test56(num1, num2) {
  console.log("spread:", num1 * num2);
}
var xyz = [3, 4];
test56(...xyz);

// E 2
function add(num1, num2) {
  console.log("divide", num1 + num2);
}
let qwe = [4, 2, 3];
add(...qwe);

// REST OPERATOR
function demo43(...rty) {
  console.log(rty);
}
var qrty = [4, 5, 6, 7];
demo43(qrty);

// E 2

function testing(...nums) {
  console.log(nums[0] * nums[2]);
}
var asd = [9, 8, 7, 6];
testing(...asd);

// E 3
function tester(...nums) {
  console.log(nums[0] + nums[1] + nums[2]);
}
let fgh = [5, 6, 7];
tester(...fgh);

// E 4
const fn3 = (a, x, y, ...numbers) => {
  console.log(x, y, numbers);
};
fn3(1, 2, 3, 4, 5, 6, 7, 8, 9);

// E 5
const qwerty1 = (x, y, z, ...numb) => {
  console.log(x, y, z, numb);
};
qwerty1(5, 4, 3, 2, 1);

// E 6
// const ytrewq = (q, w, e, ...numbr,r) => { //spread operator should always be in the end
// console.log(q, w, e, r, numbr);
// };
// ytrewq(3, 4, 5, 6, 7);

// CALLBACK FUNCTION
// When we are passing function inside of another function and then it can be manipulated
// EXAMPLES: inbuild function such as - setTimeout,map,filter,reduce
// E 1
setTimeout(() => {
  console.log("hello");
}, 100);

// E 2
function sayHello() {
  console.log("hello");
}
setTimeout(sayHello, 100);

// E 3
console.log("1");
setTimeout(() => {
  console.log("2");
}, 0);
console.log("3");



// ARROW FUNCTION 
// E 1 
const add = (firstName, secondName) => {
  return firstName + secondName;
};

// E 2 
const sub = (num1,num2) => num1+num2 //we can get rid of curly brases and return keyword when passing a single line