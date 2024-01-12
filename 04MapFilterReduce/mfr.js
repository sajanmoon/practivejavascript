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
// ***********************************************************
// Q 4 Pollyfills
// Pollyfills are piece of code that provides modern functionality to older browser which cannot understand those features
// Q Pollyfill for map()
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

Array.prototype.myMap4 = function (cb) {
  let mt4 = [];
  for (let i = 0; i < this.length; i++) {
    mt4.push(cb(this[i], i));
  }
  return mt4;
};

const nums1 = [1, 2, 3, 4, 5, 6];

const multiply1 = nums.myMap4((num, index) => {
  //take three paramenter current value ,index,
  return num * 3 + index;
});
console.log("pollyfillMap:", multiply1);
// *******************************************************
// Q 5 Pollyfill for filter

// arrFiltr.filter((num, i) => {});

Array.prototype.myFilter = function (cb) {
  let mtfiltr = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) mtfiltr.push(this[i]);
  }
  return mtfiltr;
};

const arrFiltr1 = [2, 3, 4, 5, 6, 7];

const moreThanTwo1 = arrFiltr.myFilter((num) => {
  return num > 4;
});
console.log("myFilterPollyfill", moreThanTwo1);

Array.prototype.myFilter2 = function (cb) {
  let mtfiltr2 = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      mtfiltr2.push(cb(this[i]));
    }
    return mtfiltr2;
  }
};

const arrFiltr2 = [2, 3, 4, 5, 6, 7];

const moreThanTwo2 = arrFiltr.myFilter((num) => {
  return num > 4;
});
console.log("myFilterPollyfill", moreThanTwo2);
// *******************************************************
// Q 6 Pollyfill for Reduce

Array.prototype.myReduce = function (cb, initialvalue) {
  var accumalator = initialvalue;
  for (let i = 0; i < this.length; i++) {
    accumalator = accumalator ? cb(accumalator, this[i], i, this) : this[i];
  }
  return accumalator;
};

const arrReduce1 = [5, 10, 15, 20];

const sum1 = arrReduce.myReduce((acc, curr) => {
  return acc + curr;
}, 5);
console.log("pollyfillforReduce", sum1);

Array.prototype.myReduce2 = function (cb, initialvalue1) {
  var accumalator1 = initialvalue1;
  for (let i = 0; i < this.length; i++) {
    accumalator1 = accumalator1 ? cb(accumalator1, this[i], i, this) : this[i];
  }
  return accumalator1;
};

const arrReduce2 = [5, 10, 15, 20];

const sum2 = arrReduce.myReduce2((acc, curr) => {
  return acc + curr;
}, 5);
console.log("pollyfillforReduce2", sum2);

Array.prototype.myReduce3 = function (cb, initialvalue3) {
  let accumalator2 = initialvalue3;
  for (let i = 0; i < this.length; i++) {
    accumalator2 = accumalator2 ? cb(accumalator2, this[i], i, this) : this[i];
  }
  return accumalator2;
};

const arrReduce3 = [5, 10, 15, 20];

const sum3 = arrReduce.myReduce3((acc, curr) => {
  return acc + curr;
}, 5);
console.log("pollyfillforReduce3", sum3);

// ************************************************************
// Q 7 Map vs forEach
const arr = [2, 3, 4, 5];
// Map return a new array with modification provided by funcion provided to it
const mapResult = arr.map((num) => {
  return num * 2;
});
// forEach doesnt return anything
const forEachResult = arr.forEach((num) => {
  return num * 2;
});
console.log(mapResult, forEachResult);

// In case of map we can chain some other array method such as filter
// But in case of for each we cant do that cause it didnt return anything to it

// ***********************************************************
// Output based question based on a map filter reduce

let students = [
  { name: "Piyush", rollNumber: 31, marks: 80 },
  { name: "Jenny", rollNumber: 15, marks: 69 },
  { name: "Kaushal", rollNumber: 16, marks: 35 },
  { name: "Dilpreet", rollNumber: 7, marks: 55 },
];
// Q 1 make name in a uppercase
const uppercaseName = students.map((stu) => stu.name.toUpperCase());
console.log("uppercaseName", uppercaseName);

// Q 2 Return only those student who score more than 60 marks
const more60 = students.filter((stu) => {
  return stu.marks > 60;
});
console.log(more60);

// Q 3 sum of marks of all of the students
const sumMarks = students.reduce((acc, currval) => {
  return acc + currval.marks;
}, 0);
console.log(sumMarks);

// Q 4 returns only names of the student whow score more than 60

const onlyNames = students
  .filter((stu) => stu.marks > 60)
  .map((stu) => stu.name.toUpperCase());

console.log("onlyNames", onlyNames);

// Q 5 Return total marks for students with marks greater than 60
// after 20 marks have been added to those who scored less than 60

// const totalMarks = students
//   .map((stu) => {
//     if (stu.marks < 60) {
//       stu.marks += 20;
//     }
//     return stu;
//   })
//   .filter((stu) => stu.marks > 60)
//   .reduce((acc, curr) => acc + curr.marks, 0);
// console.log("totalMarks", totalMarks);

// Q 5 Return total marks for students with marks greater than 60
// after 20 marks have been added to those who scored less than 60

const totalMarks2 = students
  .map((stu) => {
    if (stu.marks < 60) {
      stu.marks += 20;
    }
    return stu;
  })
  .filter((stu) => {
    return stu.marks > 60;
  })
  .reduce((acc, curr) => acc + curr.marks, 0);
console.log("totalMarks2", totalMarks2);
