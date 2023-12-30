// Q 1 What is Call ?
// E 1 Normal function

var obj = { name: "sajan" };

function sayHello(age) {
  return `Hello ${this.name} ${age}`;
}
console.log("Call-", sayHello.call(obj, 24, "rahul"));
console.log("************************************");

// E 2 Call

var obj12 = { name: "vicky" };

function sayHello12(age) {
  return "Hello" + this.name;
}

console.log("Call2", sayHello12.call(obj22, 24));
console.log("************************************");

// Q 2 What is Apply
// E 1
var obj2 = { name: "rohan" };

function sayHello2(age2) {
  return `Hello ${this.name} ${age2}`;
}
console.log("Apply-", sayHello2.apply(obj2, [24, "rahul"]));
console.log("************************************");
// E 2
var obj22 = { name: "nikhil" };

function sayHello22(age22) {
  return "hello" + this.name + age22;
}
console.log("Apply2", sayHello22.apply(obj22, [22]));
console.log("************************************");
// Q 3 What is Bind
// E 1
var obj3 = { name: "rahul" };

function sayHello3(age3, profession) {
  return `Hello ${this.name} ${age3} ${profession}`;
}
const obj31 = sayHello3.bind(obj3);
console.log(obj31(24, "devloper"));
console.log(obj31(43, "react developer"));

console.log("************************************");

// E 2
var obj32 = { name: "prajwal" };

function func32(age) {
  return "Hello" + this.name + age;
}
const result32 = func32.bind(obj32);

console.log(result32(23));
console.log(result32(24));
console.log("************************************");

// Q 4 - Guess the output
const person = { name: "rohan" };

function sayHello41(age) {
  return "Hello" + this.name + age;
}
console.log(sayHello41.call(person, 23));
console.log(sayHello41.bind(person));
console.log("************************************");
// Q 5 Guess the output

const age = 10;

var person51 = {
  name: "rahan",
  age: 20,
  getAge: function () {
    return this.age;
  },
};

var person511 = { age: 24 };
const resul511 = person51.getAge.call(person51);
const resul5111 = person51.getAge.bind(person51);
console.log(resul511);
console.log(resul5111);
console.log("************************************");

// Q 6 - What will be the output

var status = "😎";

setTimeout(() => {
  const status = "😂";

  const data = {
    status: "🚩",
    getStatus() {
      return this.status;
    },
  };
  console.log("Problem6-", data.getStatus());
  console.log("Problem61", data.getStatus.call(this));
}, 0);
console.log("************************************");

// Q 7 what will be the output
const animal = [
  {
    species: "Lion",
    name: "King",
  },
  {
    species: "Whale",
    name: "Queen",
  },
];

function PrintAnimal(i) {
  this.print = function () {
    console.log("#" + i + "" + this.species + ":" + this.name);
  };
  this.print();
}

for (let i = 0; i < animal.length; i++) {
  PrintAnimal.call(animal[i], i);
}
console.log("************************************");

// Q 8 What will be output
// E 1
const array = ["a", "b"];
const element = [1, 2, 3];

array.push.apply(array, element);
console.log(array);
console.log("************************************");
// E 2
const array1 = ["c", "d"];
const element1 = [8, 7, 65, 43];

array1.push.apply(array1, element1);
console.log(array1);
console.log("************************************");
// Q 9 - What is the maximum number

const numbr = [5, 6, 7, 8, 9];

console.log("Maximum-", Math.max.apply(null, numbr));

const numbr2 = [9, 8, 7, 6, 4, 2, 1];

console.log("Minimum", Math.min.apply(null, numbr2));

// Q 10 Bind Chaining
function f() {
  console.log("BindChaining", this);
}
f = f.bind({ name: "John" }).bind({ name: "ann" }); //we cannot bind chaining

f();

// Q 11 Explicit Binding with Arrow function
const age11 = 10;

var person11 = {
  name: "piyush",
  age: 20,
  getArrowfunc: () => {
    console.log(this.age);
  },
  getNormalfunc() {
    console.log(this.age);
  },
};
var person112 = { age: 24 };

person11.getArrowfunc.call(person112);
person11.getNormalfunc.call(person112);
