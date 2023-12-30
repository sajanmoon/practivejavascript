
var obj3 = { name: "rahul" };

function sayHello3(age3) {
  return `Hello ${this.name} ${age3}`;
}
const obj31 = sayHello3.bind(obj3);
console.log(obj31);