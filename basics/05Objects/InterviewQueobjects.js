//Q 1 Access, modify and delete
const user = {
  name: "sajan",
  age: 24,
};

user.name = "piyush"; //to modify the value

delete user.age; //to delete value

console.log(user); //to access a property
// *********************************************************
// Q 2
const func = (function (a) {
  delete a; //it is used to delete property from an object not a local varible
  return a;
})(5);
console.log(func);
// ***********************************************************
// Q 3
const user1 = {
  name: "sajan",
  age: 24,
  "my name is": "rahul", //to access this kind of property we have a different syntax
};
console.log(user1["my name is"]);
// ************************************************************
// Q 4
// E 1
const property = "first name";
const name = "sajan moon";

const user2 = {
  [property]: name,
};
console.log(user2);

// E 2
const propert1 = "lastname";
const value1 = "moon";

const user3 = {
  [propert1]: value1,
};
console.log(user3);
// *********************************************************
// Q 5
// E 1
const user5 = {
  name: "sajan",
  age: 24,
};

for (key in user5) {
  console.log(key); //to access the keys
  console.log(user5[key]); //to acess the values
}

// E 2
const user52 = {
  name: "rahul kumar",
  age: 24,
};

for (key in user52) {
  console.log(key);
  console.log(user52[key]);
}
// *********************************************************
// Q 6
const obj = {
  a: "hello",
  b: "hi",
  a: "bonjore", //if there is two key with same name the 2nd key will be replace by first one
};
console.log(obj);
// ***********************************************************
// Q 7
// create a function multiplybytwo(obj) that multipies all numeric property value of nums by 2
// E 1
let numb = {
  a: 2,
  b: 4,
  title: "My Nums",
};

function multiplyByTwo(obj) {
  for (key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
}
multiplyByTwo(numb);

console.log(numb);
// E 2
let numb2 = {
  a: 200,
  b: 400,
  title: "my nums",
};

function multiplyby2(obj) {
  for (key in obj[key]) {
    if (typeof obj[key] === "numbers") {
      obj[key] *= 2;
    }
  }
}
multiplyby2(numb2);

console.log("numb2", numb2);

// E 3
let numb3 = {
  a: 3000,
  b: 5000,
  title: "qwerty",
};

function multitwo(obj) {
  for (key in obj[key])
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
}
multitwo(numb3);

console.log("numb3", numb3);

// ****************************************************
// Q 8 - What the output of the following code

const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 426;

console.log(a[b]);
// console.log(a);

// ***********************************************************
// Q 9
// what is JSON.stringify and JSON.parse

const user9 = {
  name: "sajan moon",
  age: 24,
};
console.log("user9", user9);

const ans = JSON.stringify(user9);
console.log("user9JSONstringify", ans); //to convert key in a string
console.log("JSON.Parse", JSON.parse(ans)); // to revert back to normal key

// WHAT ARE the real life use case of this things
// To store object in a local storage because we cannot store a object directly in local storage

// localStorage.setItem("test", ans);

// console.log(localStorage.setItem("test", ans));

// ***********************************************************
// Q 10
// what's the output
console.log([..."sajan"]);
// *************************************************************
// Q 11 What's the output
const user11 = { name: "sajan", age: 24 };
const admin = { admin: true, ...user11 };
console.log(admin);

// *************************************************************
// Q 12 What's the output

const setting = {
  username: "sajan",
  level: 20,
  health: 21,
};

const data11 = JSON.stringify(setting, ["level", "health"]);

console.log("data11", data11);

// *************************************************************
// Q 13 What's the output
const shape = {
  radius: 100,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => {
    return 2 * Math.PI * this.radius; //this keyword refers to window object so the output will be NaN
  },
};

console.log(shape.diameter());
console.log(shape.perimeter());

// *************************************************************
// Q 14 what is destructuring in objects
let user14 = {
  name14: "sajan",
  age14: 24,
  fullName: {
    firstName: "sajan",
    lastName: "moon",
  },
};

const {
  name14: named,
  age14,
  fullName: { lastName },
} = user14;

console.log(named);
console.log(age14);
console.log(lastName);

// *****************************************************
// Q 15
function getItems(fruitList, favouriteFruit, ...args) {
  return [...fruitList, ...args, favouriteFruit];
}
console.log(getItems(["banana", "apple"], "pear", "orange"));

// *************************************************************
// Q 16 What's the output
let c13 = { greeting: "Hey" };
let d13;

d13 = c13;

c13.greeting = "Hello";
console.log(d13.greeting);

// *************************************************************
// Q 17 What's the output
console.log({ a: 1 } == { a: 1 }); //false
// console.log({ a: 1 } === { a: 1 });
// This condition will always return 'false' since JavaScript compares objects by reference, not value.

// *************************************************************
// Q 18 What's the output
// E 1
let person = { name: "rohan" };
const member = [person]; //we are just changing the index not a property
person = null;

console.log(member);

let person1 = { name: "rohan" };
const member1 = [person]; //we are just changing the index not a property
person1.name = null;

console.log(member1);

// *************************************************************

// Q 19 - What are shallow copies and deep copies
// shallow copies of an object is a copy whose property share has a same refernce
// Deep copies of an object is a copy whose property donot share a same reference

// Q 20 - How can we deep  copy or clone a object

let user20 = {
  name: "sajan moon",
  age: 24,
};

// To clone a object-way1

// way2
const cloneObj1 = JSON.parse(JSON.stringify(user20));
cloneObj1.name = "qwerty";
console.log(user20, cloneObj1);

// way3
const cloneObj2 = { ...user20 };
cloneObj2.name = "tyuiop";
console.log(user20, cloneObj2);
