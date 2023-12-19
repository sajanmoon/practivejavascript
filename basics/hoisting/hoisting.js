// HOISTING
// E 1

// console.log(a); // gives undefined
var a = 1;

// E 2
// console.log(b); // ERROR : cannot access before initalization
let b = 2;

// E 3
// console.log(c); // ERROR : cannot access before initalization
const c = 4;

// E 4
function demo() {
  //   console.log(d, e, f); // ERROR : Cannot access 'e' before initialization
  var d = 5;
  let e = 6;
  const f = 7;
}
demo();

console.log(demo1);

var demo1 = () => {
  return console.log("hello");
};

// TEMORAL DEAD ZONE
// where variable are in the scope but not yet declare
