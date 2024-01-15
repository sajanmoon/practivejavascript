// Function statement also knwn as function declaration
function a() {
  console.log("a called");
}

// Function Expression
var b = function () {
  console.log("function expression");
};
// Difference between Function statement/declaration and function expression is hoisting

// *************************************************************************************************

// Anonymous function- It doesnt have its own identity
// function () {
// }

// *************************************************************************************************

// Named function expression
var b = function xyz() {
  console.log("function expression");
  console.log(xyz); //can access xyz function like this
};
xyz(); //will thrown an error if we try to call like this

// *************************************************************************************************

// First class function - the ability of a function to use as values

var b = function (param1) {
  console.log(param1);
};

fcf(function () {
  console.log("hey");
});
