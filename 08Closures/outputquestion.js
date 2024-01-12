// Create a function called createMultiplier that takes a number as an argument and returns a new function.
// The returned function, when called with another number, should return the result of multiplying that number by the original number passed to createMultiplier. Use closures to achieve this.
// Q 1
function createMultiplier(number) {
  return function (num) {
    return num * number;
  };
}

const multiplyBy5 = createMultiplier(5);
console.log(multiplyBy5(3)); // Should log: 15
console.log(multiplyBy5(2)); // Should log: 10

const multiplyBy7 = createMultiplier(7);
console.log(multiplyBy7(4)); // Should log: 28
console.log(multiplyBy7(1)); // Should log: 7

//   **********************************************************************************************

// Q 2

// Imagine you have a function called counter that, when invoked, should return a new function. This returned function, when called, should increment a counter variable and log the updated count. The catch is, you should implement this using closures.

function counter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

const myCounter = counter();
myCounter(); // Should log: Count: 1
myCounter(); // Should log: Count: 2
// and so on...

//   **********************************************************************************************

// Q 3

// Create a function called generatePasswordGenerator that takes a string as an argument and returns a function. The returned function, when called, should generate a random password by combining the original string with a random number. Each time the returned function is invoked, it should produce a different random password.

function generatePasswordGenerator(string) {
  return function () {
    let randomNumber = Math.floor(Math.random() * 1000);
    let randomPassword = `${string}${randomNumber}`;
    return randomPassword;
  };
}
const result = generatePasswordGenerator("myPassword");
result();

//   **********************************************************************************************

// Q 4

// Create a function called greetGenerator that takes a name as an argument and returns a function. The returned function, when called, should log a greeting message that includes the original name.

function greetGenerator(name) {
  return function () {
    return `hello,${name}`;
  };
}
const result4 = greetGenerator("sam");
console.log(result());

//   **********************************************************************************************

// Q 5

function testClosures(numb) {
  let num = 0;
  return function (number) {
    num = num + number;
    return num;
  };
}
let result5 = testClosures(5);
// result(5);
console.log(result(5));
console.log(result(5));
console.log(result(15));


//   **********************************************************************************************

// Q 6

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
