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
