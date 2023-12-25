// Two types for object binding in javascript
// Implicit and explicit
// Define 'this' ?
// it is used to refrence the particular thing

this.a = 5;
console.log("this.a", this.a);
console.log("*****************************************");

// Normal Function
this.s = 5;
function getData() {
  console.log("this.s", this.s);
}
getData();
console.log("*****************************************");

// Arrow Function
this.z = 5;
const getData1 = () => {
  console.log("this.z", this.z);
};
getData1();
console.log("*****************************************");

// Behaviour of "this" inside of an object
// E 1
// NORMAL FUNCTION - in case of normal function this is pointing to its parent
let user = {
  name: "sajan",
  age: 24,
  getDetails() {
    console.log("this.name", this.name);
    console.log("thisUser", this);
  },
};
user.getDetails();
console.log("*****************************************");

// E 2
// NORMAL FUNCTION
let user2 = {
  name: "sajan",
  age: 24,
  objectInside: {
    newName: "rohan",
    getDetails() {
      console.log("this.name2", this.name);
      console.log("this.newName", this.newName);
      console.log("thisUser2", this);
    },
  },
};
user2.objectInside.getDetails();
console.log("*****************************************");

// E 3
// ARROW FUNCTION - in case of arrow function this is pointing to its window object
let user3 = {
  name: "sajan",
  age: 24,
  getDetails: () => {
    console.log("arrowThis", this.name);
  },
};
user3.getDetails();
console.log("*****************************************");

// Q 5 - What will be the output
const user5 = {
  firstName: "sajan",
  getName() {
    const firstName = "rohan";
    return this.firstName;
  },
};
// console.log("Q5", user5.getName());

console.log("*****************************************");

// Q 6 - What will be the output
function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}
let user61 = makeUser();

// console.log(user61.ref.name);
// console.log(user61);

console.log("*****************************************");

// Q 7 Fix Above Question this
// E 1
function makeUser1() {
  return {
    name: "rohan",
    getThis1() {
      return this;
    },
  };
}
let user71 = makeUser1();

console.log("user71this-", user71.getThis1().name);

// E 2
function makeUser12() {
  return {
    name: "qwerty",
    getRef3() {
      return this;
    },
  };
}
let user72 = makeUser12();
console.log(user72.getRef3().name);

console.log("*****************************************");

// Q 8 - What will be the output
// E 1

const user8 = {
  name: "Rohan Das",
  logMessege() {
    console.log("setTimeOut-", this.name);
  },
};

setTimeout(function () {
  user8.logMessege();
}, 1000);

// E 2

const user81 = {
  name: "das Rohan",
  logMessege1() {
    console.log("setTimeOut2", this.name);
  },
};
setTimeout(function () {
  user81.logMessege1();
}, 1000);
