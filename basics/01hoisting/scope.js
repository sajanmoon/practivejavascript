// SCOPE

// GLOBAL SCOPE
var d = 5;

// FUNCTION SCOPE
function demo() {
  // function scope
}



//BLOCK SCOPE
{
  let a = 5;
  const b = 6;
  var c = 7; //Its not in a block scope
}
// ************************************************************
// VARIABLE SHADOWING
// EXAMPLE 1

function test() {
  let e = "HELLO";
  if (true) {
    let e = "HI";
    console.log("e:", e);
  }
  console.log(e);
}
test();

// EXAMPLE 2

function test2(params) {
  const f = "BONJOR";
  if (true) {
    let f = "NAMSTE";
    console.log("f:", f);
  }
  console.log("f:", f);
}
test2();

// EXAMPLE 3
function test3() {
  var g = "hi1";
  if (true) {
    let g = "HELLO2";
    console.log("g:", g);
  }
}
test3();

//EXAMPLE 4
function test4() {
  const h = "hii3";
  if (true) {
    const h = "hello3";
    console.log("h:", h);
  }
}
test4();

//EXAMPLE 5
// when we try to shadow var by let it will be illegal and will throw an error
function test5() {
  //   let i = "hii4"; //WILL NOT WORK
  if (true) {
    var i = "hello4";
    console.log("i", i);
  }
}
test5();

// E 6
function demo66() {
  const deom33 = "rohan";
  if (true) {
    const demo33 = "raghav";
    console.log("demo36", demo33);
  }
}
demo66();
// ****************************************************************

// REDECLARATION
// we can re-declare var variable
// E 1
var j = 3;
var j = 4;

// E 2
// we cannot re-declare let variable
// let k = 4;
let k = 5;

// E 3
// we cannot re-declare const variable
// const l = 5;
const l = 6;

// DECLARATION WITHOUT INITALIZATION
// E 1
var m;

// E 2
let n;

// E 2
// We cannot declare const with initalization
// const o;

// we need to provide value while declaring it
const o = 4;

// **********************************************************
// RE-INITALIZATION
// E 1
var p = 5;
p = 5;

// E 2
let q = 6;
q = 7;

// E 3
// We cannot re-initalize const
const r = 2;
// r = 4; //will not work
console.log("r", r);
