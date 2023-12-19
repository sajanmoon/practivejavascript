x = 10;

function demo10() {
  console.log(x);
  x = 8;
  console.log(x);
}
demo10();

let test = {
  name: "sajan",
  age: 24,
};
console.log({...test});