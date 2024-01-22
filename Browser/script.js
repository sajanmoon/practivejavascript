// myPromise = () => Promise.resolve("I have resolved");
const myPromise = (resolve, reject) => {
  return function () {
    setTimeout(() => {
      return Promise.resolve("done");
    }, 1000);
  };
};
function firstFunction() {
  myPromise().then((res) => console.log(res));
  console.log("second");
}

async function secondFunction() {
  console.log(await myPromise());
  console.log("second");
}
firstFunction();
secondFunction();

// second
// done
// done
// second
