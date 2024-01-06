let obj = {
  name: "sam",
  func() {
    return `Hello ${this.name}`;
  },
  func1: () => {
    return `Hello ${this.name}`;
  },
};
console.log(obj.func());
console.log(obj.func1());
