// Q 1 What is MAP?
// Map method is used to create new array using existing array by appling given function to each element
// E 1
const nums = [1, 2, 3, 4, 5, 6];

const multiply = nums.map((num, index) => {
  //take three paramenter current value ,index,
  return num * 3 + index;
});
console.log(multiply);

// Q 2 What is filter
// Filter takes each element from and array and it applies a contidtional statement to an each element in array and the element which are true are push to output array

const arrFiltr = [2, 3, 4, 5, 6, 7];

const moreThanTwo = arrFiltr.filter((num) => {
  return num > 4;
});
console.log(moreThanTwo);

// Q 3 What is Reduce
// Reduce method reduce the element of an array to a single value baSED ON A provided callback function
// it takes two value i.e accumalator and current value

const arrReduce = [5, 10, 15, 20];

const sum = arrReduce.reduce((acc, curr) => {
  return acc + curr;
}, 5);
console.log(sum);

// Q 4 Pollyfills
// Pollyfills are piece of code that provides modern functionality to older browser which cannot understand those features
// Pollyfill for map()
// arr.map((num, i, arr) => {});

Array.prototype.myMap = function (cb) {
  let mt = []; //as map returns a empty array
  for (let i = 0; i < this.length; i++) {
    mt.push(cb(this[i], i, this));
  }
  return mt;
};

Array.prototype.myMap2 = function (cb) {
  let mt1 = [];
  for (let i = 0; i < this.length; i++) {
    mt1.push(cb(this[i], i));
  }
  return mt1;
};

Array.prototype.myMap3 = function (cb) {
  let mt3 = [];
  for (let i = 0; i < this.length; i++) {
    mt3.push(cb(this[i], i));
  }
  return mt3;
};

const nums1 = [1, 2, 3, 4, 5, 6];

const multiply1 = nums.myMap3((num, index) => {
  //take three paramenter current value ,index,
  return num * 3 + index;
});
console.log("pollyfillMap:", multiply1);
