// Q 1
let count = 0;

function printCount() {
  if (count === 0) {
    let count = 1; //shadowing the outer variable
    console.log(count);
  }
  console.log(count);
}
printCount();
console.log("***********************************************");

// Q 2
function createBase(num) {
  return function (innerNum) {
    console.log(innerNum + num);
  };
}
var addSix = createBase(6);
addSix(10);
addSix(17);

console.log("***********************************************");

// Q 3 - How would you create a clouser to create a priviate counter
function counter() {
  var _counter = 0;

  function add(increment) {
    _counter += increment;
  }
  function retrive() {
    return "Counter" + _counter;
  }

  return {
    add,
    retrive,
  };
}

console.log("***********************************************");

// Q 4
function x4() {
  for (var i = 0; i < 4; i++) {
    function close(x) {
      setTimeout(() => {
        console.log(x);
      }, x * 1000);
    }
    close(i);
  }
}
x4();
