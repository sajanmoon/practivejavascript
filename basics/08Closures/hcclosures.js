// Lexical scoping
function outer() {
  let username = "sam";
  function inner() {
    console.log(username);
  }
  inner();
}
outer();

// in the above function we can access a variable from a parent function withing child function

function outer1() {
  let username1 = "sama";
  function inner1() {
    // console.log(username2);
    console.log(username1);
  }
  function inner2() {
    let username2 = "rohan";
    console.log(username1);
  }
  inner1();
  inner2();
}
// in the above function both the child function can access variable from parent function but both the children cant access from each other

// CLOSUERS

function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName; //here it is returning the function rather than calling it ,still we can access a variable from the lexical scope because it remember because of its CLOSURES
}

const myFunc = makeFunc();
myFunc();

// REALWORLD EXAMPLE COLORCHANGER
function clickHandler(color) {
  return function () {
    document.body.style.backgroundColor = `${color}`;
  };
}

document.getElementById("orange").onclick = clickHandler("orange");
document.getElementById("green").onclick = clickHandler("green");

// Closures scope chain
var username11 = "piyush"; //<--------------
function makeFunc1() {
  var name = "Mozilla";
  function makefunc2() {
    console.log(name, username11); // function hav access to its parent of a parent variable
  }
  return makefunc2();
}
makeFunc1();
