const arrReducrs = [5, 4, 6, 7, 3];

const myTotal = arrReducrs.filter(function (acc, curr) {
  return acc + curr;
}, 0);
console.log("myTotal:", myTotal);
