Array.prototype.myReduce = function (cb, accumalator) {
  for (let i = 0; i < this.length; i++) {
    accumalator = accumalator ? cb(accumalator, this[i], i, this) : this[i];
  }
  return accumalator;
};
const arrReduce = [5, 10, 15, 20];

const sum3 = arrReduce.myReduce((acc, curr) => {
  return acc + curr;
}, 5);
console.log("pollyfillforReduce3", sum3);
