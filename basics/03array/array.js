// Javascript arrays are resizable and can contain mix of different data types
// Javascipt arrays are zero indexed
// Javascript array-copy operations create SHALLOW COPIES
// --Shallow copies of an object is a copy whose properties share the same reference
// --Deep copies of an object is a copy whose properties do not share the same reference

// Difference type to declare Arrays

const myArr = [1, 2, 3, 4, 5, 6];
const xyz = ["hello", "hi"];
const myArr2 = new Array(1, 2, 3, 4);
console.log(myArr[0]);

// ***********************************************************
// Array Methods
// 1 PUSH
// Push method is used to add the new value in array(adds the end)
myArr.push(7);
console.log("PUSH", myArr);

// 2 POP
//Pop method used to remove the last value from the array
myArr.pop();
console.log("POP", myArr);

// 3 UNSHIFT
// unshift add specified value in a beginning of an array and return new length
myArr.unshift(9);
console.log("UNSHIFT", myArr);

// 4 SHIFT
// Shift remove value from a beginning of an array
myArr.shift();
console.log("SHIFT", myArr);

// 5 INCLUDES
// Tells value present in a array or not
console.log("INCLUDES", myArr.includes(9));
console.log("INCLUDES", myArr.includes(4));

// 6 INDEXOF
// tells onwhat index value is present
console.log("INDEXOF", myArr.indexOf(3));

// 7 JOIN
// convert array in a string
const newArr = myArr.join();
console.log(myArr);
console.log("JOIN", newArr);
console.log(typeof newArr);

console.log("slice");
// 8 SLICE
// It will slice the arrays from given range where it include a first range and exclude last range
console.log("OrignalArray", myArr);
const myn1 = myArr.slice(1, 3);
console.log("AfterSlice-Range(1,3)", myn1);

// 9 SPLICE
// It will remove the given range index values from array
const myn2 = myArr.splice(1, 3);
console.log(myn2);
console.log("OrignalArrayAfterSplice", myArr);
// *************************************************************
// HIGHER ORDER FUNCTION
// 10 MAP

const arr = [2, 3, 4, 5, 6];
// E 1
function double(x) {
  return x * 2;
}
const output = arr.map(double);
console.log("double:", output);

// E 2
function triple(x) {
  return x * 3;
}
const output2 = arr.map(triple);
console.log("triple:", output2);

// E 3
function binary(x) {
  return x.toString(2);
}
const output4 = arr.map(binary);
console.log("binary", output4);

// E 4
// Different way to pass function in map
// normal function
const mapInside = arr.map(function double2(x) {
  return x * 2;
});
console.log("mapInside", mapInside);

// E 5
// Arrow function
const ArrFunc = arr.map((x) => x * 3);
console.log("ArrFunc", ArrFunc);

// ***********************************************************
// 11 FOREACH
// for each is a higher order function which is used to iterating over the element in an array ans applying callback function to each element.
const arrFrEch = ["rohan", "sahil", "aditya", "nikhil"];
arrFrEch.forEach(function (item, index) {
  // console.log(item, index);
  return item, index;
});
console.log("arrFrEch:", arrFrEch);
// 11 FILTER
// E 1
const arrFiltr = [2, 3, 4, 5, 6, 7, 8, 9];
function isOdd(x) {
  return x % 2;
}
const filtr = arrFiltr.filter(isOdd);
console.log("filtr", filtr);

// E 2
// Another way to pass function in a filter
// With Regular Function
const filtr2 = arrFiltr.filter(function isOdd2(x) {
  return x % 2;
});
console.log("filtr2", filtr2);

// E 3
// With Arrow function
const filtr3 = arrFiltr.filter((x) => x % 2);
console.log("filtr3", filtr3);

// E 4
const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
];

const getBooks = books.filter((bk) => bk.genre === "History");

console.log("Books", getBooks);

// 12 REDUCE
// It is used for reducing the elements of an array to single value based on a provided callback function
// the refuce function take accumalator and current value of an array during each iteration and it return a single accumlated result
// Accumlator - initial value

const arrReducrs = [5, 4, 6, 7, 3];
// E 1
// With normal function

const myTotal = arrReducrs.reduce(function (acc, curr) {
  console.log(`acc:${acc} and curr ${curr}`);
  return acc + curr;
}, 9);
console.log("myTotal:", myTotal);

// E 2
// With arrow function

const myTotal2 = arrReducrs.reduce((acc, curr) => acc + curr, 9);
console.log("myTotal2:", myTotal2);

// E 3
const shoppingCart = [
  {
    name: "Js course",
    price: 1999,
  },
  {
    name: "py course",
    price: 999,
  },
  {
    name: "native course",
    price: 4999,
  },
  {
    name: "java course",
    price: 2999,
  },
];
const totalPrice = shoppingCart.reduce((acc, curr) => acc + curr.price, 0);
console.log("totalPrice", totalPrice);
