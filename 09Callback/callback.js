// When a function which is passed on to some other function are known as callback function
// Example 1 - Callback function
function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function calculator(operation, a, b) {
  return operation(a, b);
}

console.log(calculator(add, 2, 3));
console.log(calculator(multiply, 2, 3));

// ***************************************************************************************
// Example 2 - Callback function for asyncronous operation
setTimeout(() => {
  console.log("timer");
}, 2000);



function x(y) {
  //passing a y function in x
  console.log("function X");
}
x(function y() {
  //calling x function with argument as a y function
  console.log("function y");
});

// ****************************************************************************************
// Eample of a callback function
document.getElementById("clickMe").addEventListener("click", function xyz() {
  console.log("clicked");
});
//when a button is clicked function xyz will go to callstack

// ****************************************************************************************
let count = 0;
document.getElementById("clickMe").addEventListener("click", function xyz() {
  console.log("clicked", count++);
});

// ****************************************************************************************
// Function attach event listner
function attachEventListner() {
  let count = 0;
  document.getElementById("clickMe").addEventListener("click", function xyzq() {
    console.log("clicked", count++);
  });
}
