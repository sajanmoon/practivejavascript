// Example 1
async function getData() {
  return "Namste";
}

let data = getData();

console.log(data); //async function will always return a promise

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const p = new Promise((resolve, reject) => {
  resolve("i am promise");
});
async function getData() {
  return p;
}

let dataPromise = getData();

// console.log(dataPromise);

dataPromise.then((res) => {
  console.log(res);
}); //it return the promise

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// How,when and why to use await

const p1 = new Promise((resolve, reject) => {
  resolve("i am promise");
});
async function getData() {
  const prms = await p1; //to handle our promise we will use await (will replace it with ,then)
  //   await can only be used inside async function
  console.log(prms);
}
getData();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// difference between promise and async await
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("i am promise");
  }, 4000);
});

function getData() {
  p.then((res) => console.log(res));
  console.log("i m in getData func");
}
getData();
// Output here first we will get "i m in getData func" as getData() has been called then it will resolve promise
// Output
// "i m in getData func"
// "i am promise"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// rewriting the above function again in async await function

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("i am promise");
  }, 4000);
});

async function getData() {
  // Here JS engine was waiting for a promise to resolve due to AWAIT
  console.log("i m above the await");
  let asyawt = await p;
  console.log("bonjour JS");
  console.log(asyawt);
}
getData();

// The difference between .then async await is here i get my console.log  "bonjour JS" after the 4sec after resolving promise
// output:
//  "bonjour JS"
// "i am promise"
// also when the promise is been resolved by await when we get a output first we will get function log and then we will get promise at a time

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("i am promise");
  }, 4000);
});

async function getData() {
  console.log("i m above the await");

  let val1 = await p;
  console.log("i m below the await");
  console.log(val1);

  let val2 = await p;
  console.log("i m below the await for the second await");
  console.log(val2);
}

getData();

// here we are taking await for the two times and will get
// Output :
// i m above the await
// all things will be printed after 4 sec
// i m below the await
// i am promise
// i m below the await for the second await
// i am promise

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const p5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("i am promise");
  }, 2000);
});
const p6 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("i am promise");
  }, 4000);
});

async function getData() {
  console.log("i m above the await");

  let val1 = await p5;
  console.log("i m from p1 await");
  console.log(val1);

  let val2 = await p6;
  console.log("i m from p2 await");
  console.log(val2);
}

getData();

// Here we have taken 2 promise calling in same function with await so if the first promise resolve in less time than second then it will print as per there time but if first is taking more than second promise second will take all the time and print all of then at once

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Interview Questions -
// Q - What is async await
// Async is keyword that is used with function for async function and we can only use await inside async function
// we will use await to handle promises and this promises are asyncronous

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Q - Difference between async await and promises
// async await is synatatically sugar over promises behind it basically javascript using its own ,then .catch
// async await easiler to write and read we dont have to write lot of code for promise chaining
