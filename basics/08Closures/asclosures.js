// Closures - closure is a function along with its lexical scope
function x() {
  var a = 10;
  function y() {
    console.log(a);
  }
  return y;
}
let z = x();
console.log(z);
z(); //Even after assign the function to some variable we still have access to our variable declare in our closer as it will return a variable a as 10

console.log("**********************************");
// return a function in different way
function x() {
  var a = 10;
  return function y() {
    //^^^^^^^^^^--------
    console.log(a);
  };
}
let zx = x();
console.log(z);
zx();

console.log("**********************************");

// Function inside function inside function
function zz() {
  let b = 100;
  function yy() {
    let a = 200;
    function xx() {
      console.log(a, b);
    }
    xx();
  }
  yy();
}
zz();

console.log("**********************************");

function xxx() {
  var i = 1;
  setTimeout(() => {
    console.log("10");
  }, 2000);
}
xxx();

console.log("**********************************");

function x1() {
  for (var i = 0; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
  console.log("Namaste Javascript");
}
x1();

console.log("**********************************");

function x2() {
  for (let i = 0; i < 5; i++) {
    function close(x) {
      setTimeout(() => {
        console.log(x);
      }, x * 1000);
    }
    close(i);
  }
}
