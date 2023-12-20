// Objects:A object in javascript is data type which allow us to store and organise data using a collective key-value pair

// Object literals

const mySymb = Symbol("key1");

const Jsuser = {
  name: "sajan",
  "full name": "sajan moon",
  [mySymb]: "myKey1",
  age: 24,
  email: "sajanmoon5@gmail.com",
  location: "nagpur",
};
// to access a data in object
console.log(Jsuser.name);
// Another way to access a object
console.log(Jsuser["full name"]);
console.log(Jsuser[mySymb]);

// To freeze the value
Jsuser.email = "sajanmoon5gmail.com";
// Object.freeze(Jsuser);
Jsuser.email = "sajanmoon5@google.com";
console.log(Jsuser.email);

Jsuser.greeting = function () {
  console.log("Hello World");
};
console.log(Jsuser.greeting());
Jsuser.greetingTwo = function () {
  console.log(`Hello World ${this.name}`);
};
console.log(Jsuser.greetingTwo());

// Singleton Object
const tinderUser = new Object();
console.log(tinderUser);

tinderUser.id = "123";
tinderUser.name = "sajan";
tinderUser.location = "nagpur";

console.log(tinderUser);

const user = {
  fullname: {
    userFullName: {
      firstName: "sajan",
      lastName: "moon",
    },
  },
};
console.log(user.fullname.userFullName.lastName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj3 = Object.assign({}, obj1, obj2); //{target,source}
const obj4 = { ...obj1, ...obj2 };
console.log(obj3);
console.log(obj4);

// Array of object

const arrObj = [
  {
    name: "sajan",
    email: "sajanmoon5@gmail.com",
  },
  {
    name: "rohan",
    email: "rohan@gmail.com",
  },
];
console.log(arrObj[1].email);

// To Acces all the keys from the object
console.log(Object.keys(Jsuser));
console.log(Object.values(Jsuser));

// To see if the value is present in the object
console.log(tinderUser.hasOwnProperty("name"));
