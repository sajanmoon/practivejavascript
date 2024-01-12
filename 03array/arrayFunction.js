const marvel_heros = ["thor", "spiderMan", "IronMan"];
const dc_heros = ["superman", "batman", "flash"];

// marvel_heros.push(dc_heros); //adds array in array
// console.log(marvel_heros);
// console.log(marvel_heros[3][2]); //can access array from a array

// CONCAT
// Merge and Return a new array
const allHeroes = marvel_heros.concat(dc_heros);
console.log(allHeroes); 


// SPREAD OPERATOR - MOSTLY USED
const allNewHeros = [...marvel_heros, ...dc_heros];
console.log(allNewHeros);

// FLAT-merge the array within different depths
const newArray = [1, 2, 3, [4, 5], 7, [6, 5, 4, [3, 5, 7]]];
const newArray1 = newArray.flat(Infinity);
console.log(newArray1);

// FROM- Convert strings to array
console.log(Array.from("sajan"));
console.log(Array.from({ name: "sajan" })); //Returns Empty array
