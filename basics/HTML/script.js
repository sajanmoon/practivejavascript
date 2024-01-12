// function createCounter() {
//   let count = 0;

//   return function increment() {
//     count++;
//     console.log(count);
//   };

//   // return function decrement() {
//   //   count--;
//   //   console.log(count);
//   // };

//   // return {
//   //   increment,
//   //   decrement
//   // };
// }

// // Create a counter
// const counter = createCounter();

// // Use the counter
// counter(); // Output: 1
// counter(); // Output: 2
// counter(); // Output: 1

function countercode() {
  let count = 1;
  function incr() {
    count++;
    console.log(count);
  }
  function decr() {
    count--;
    console.log(count--);
  }
  return {
    incr,
    decr,
  };
}
let clsurs = countercode();
clsurs.incr();
clsurs.decr();
