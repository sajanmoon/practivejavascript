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

// Q 3
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

// Q 4
var name1 = "chrome";
function makeFunc() {
  var name = "mozilla";
  function displayName(num) {
    console.log(name, num, name1);
  }
  return displayName;
}
// var result4 = makeFunc();
// result4();
makeFunc()(5); //makeFunc() is returns a displayname and makeFunc()(5) we are calling a display name 

// Q 5 
let count5 = 0;
(function printCount() {
  if (count === 0) {
    let count = 1;
    console.log(count);
  }
  console.log(count);
})();

// Q 6 
function createBase(num) {
  return function (num2) {
    return num + num2;
  };
}

var addSix = createBase(6);
console.log(addSix(6));
console.log(addSix(10));

