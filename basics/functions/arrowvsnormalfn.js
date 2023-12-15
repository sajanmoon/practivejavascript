// Arrow function vs normal function
// ********************************************************
// 1st difference - SYNTAX
// E 1
// Regular function
function regular(num1, num2) {
  return num1 * num2;
  //   console.log(num1*num2);
}
regular(1, 2);

// ARROW FUNCTION
const arrow = (num1, num2) => {
  console.log(num1 * num2);
};
arrow(2, 3);
// ************************************************************
// 2nd difference - IMPLICIATE RETURN FUNCTION
// E 1
const arrow2 = (num3, num4) => num3 * num4;
console.log(arrow2(4, 5));

// E 2
// we can wrap return in () without using return keyword
const arrow3 = (num12, num13) => num12 * num13;

// ***********************************************************
// 3rd difference - arguments
// E 1
// Arguments will work with only normal function
function argms() {
  console.log(arguments);
}
argms(3, 4, 4, 6, 8, 7);

// In case of Arrow function arguments will not work
const args = () => {
  //   console.log(arguments); will throw an error
};
args(5, 6);

// 4th difference
// E 1
let user = {
  username: "sajan",
  //   Arrow function
  rc1: () => {
    // this inside a arrow function is pointing to global object so it will not working with arrow function
    console.log("arrowfunction:", this.username);
  },
  rc2() {
    // this inside a normal function is pointing to the present object thats why this will work with normal function
    console.log("normalfunction:", this.username);
  },
};
user.rc1();
user.rc2();

// E 2

let user2 = {
  username2: "najas",
  func1() {
    console.log("normalfunction", this.username2);
  },
  func2: () => {
    console.log("arrowfunction", this.username2);
  },
};
user2.func1();
user2.func2();

// E 3
let user3 = {
  username4: "qwerty",
  func8() {
    console.log("this will work with normal function-", this.username4);
  },
  func9: () => {
    console.log("this will not work in arrow function-", this.username4);
  },
};
user3.func8();
user3.func9();

// E 4
// this cannot be use directly in function
function user10() {
  let username = "sajan";
  console.log("normalfunc-", this.username); // it will give us a undefined
}
user10();

// E 4
const user99 = {
  username99: "rohit",
  age: 23,
  welcome: function () {
    console.log(`${this.username99}`);
  },
};
user99.welcome();
user99.username99 = "rohan";
user99.welcome();
