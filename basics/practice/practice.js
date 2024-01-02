const obj1 = {
  key: 17,
};

const obj2 = {
  key: 19,
};

function tester() {
  return this.key + obj2.key;
}

console.log(tester.call(obj1));
