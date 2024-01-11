// Closures - closure is a function along with its lexical scope bundled together
function x() {
  var a = 10;
  function y() {
    console.log(a);
  }
  return y;
}
let z = x(); //we are holding a whole closures in z
console.log(z); //we will get a function y in z
z(); //here i am calling a whole closure where it will give a whole closures returned by x() includes both the function 'y' and the enviornment in which it was created allowing 'y' to access the variable declared in a x function and will give OUTPUT as a 10

// *******************************************************************************************************************************

function x() {
  var a = 10;
  // return a function in different way it is similar to above function heere it is replacing a return y which we would have written after line 20
  return function y() {
    console.log(a);
  };
}
let zx = x();
console.log(z);
zx();

// *******************************************************************************************************************************

function x3() {
  var a = 10;
  function y3() {
    console.log(a);
  }
  a = 100;
  return y3;
}
var z3 = x3();
console.log(z3);
z3(); //when we call a CLOSURE it remebers the refernce of a variable not a value of a variable so it will give us a OUTPUT 100 even though we have first initalize a with 10

// *******************************************************************************************************************************

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
