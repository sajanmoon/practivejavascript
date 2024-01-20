async function getData() {
  return await Promise.resolve("i made it");
}

const data = getData();
console.log(data);

///////////////////////////////////////////////////////////////////////////////////////////////////////

myPromise = () => Promise.resolve("I have resolved");

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

// OUTPUT:
// second
// I have resolved
// I have resolved
// second
///////////////////////////////////////////////////////////////////////////////////////////////////////

console.log(Promise.resolve(5));
// OUTPUT : promise (5)

///////////////////////////////////////////////////////////////////////////////////////////////////////
const myPromise = Promise.resolve("Heyyaa");

(async () => {
  try {
    console.log(await myPromise);
  } catch {
    throw new Error("Didnt worked");
  } finally {
    console.log("Yeah,I got");
  }
})();
// OUTPUT:
// Heyya
// Yeah,I got

///////////////////////////////////////////////////////////////////////////////////////////////////////

const myPromise1 = Promise.resolve("Promise");

function funcOne() {
  myPromise.then((res) => res).then((res) => console.log(res));
  setTimeout(() => {
    console.log("timeout");
  }, 0);
  console.log("last line");
}

async function funcTwo() {
  const res = await myPromise;
  console.log(await res);
  setTimeout(() => {
    console.log("timeout");
  }, 0);
  console.log("last line");
}

funcOne();
funcTwo();

// OUTPUT:
// last line , Promise , Promise , last line , timeout , timeout

///////////////////////////////////////////////////////////////////////////////////////////////////////

const promise1 = Promise.resolve("First");
const promise2 = Promise.resolve("Second");
const promise3 = Promise.reject("Third");
const promise4 = Promise.resolve("Fourth");
const runPromises = async () => {
  const res1 = await Promise.all([promise1, promise2]); // ["first","second"]
  const res2 = await Promise.all([promise3, promise4]); //["Third"]
  return [res1, res2];
};
runPromises()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

///////////////////////////////////////////////////////////////////////////////////////////////////////

function delay(ms) {
  return new Promise((resolve, reject) => {
    setInterval(() => {
      resolve();
    }, ms);
  });
}

delay(3000).then((res) => {
  console.log("3sec");
});

///////////////////////////////////////////////////////////////////////////////////////////////////////
var p = new Promise((resolve, reject) => {
  reject(Error("The Fails!"));
});
p.catch((error) => console.log(error.message));
p.catch((error) => console.log(error.message));

// OUTPUT
// The Fails
// The Fails
// will print two times

///////////////////////////////////////////////////////////////////////////////////////////////////////

var p = new Promise((resolve, reject) => {
  reject(Error("The Fails!"));
})
  .catch((error) => console.log(error.message))
  .then((error) => console.log(error));

// OUTPUT
// The Fails
// undefined

///////////////////////////////////////////////////////////////////////////////////////////////////////

new Promise((resolve, reject) => {
  resolve("Success!");
})
  .then(() => {
    throw Error("Oh noes!");
  })
  .catch((error) => {
    return "actually, that worked";
  })
  .then((message) => console.log(message));

// Here first it will go to .then as it is resolve then there an error so it will go to .catch then catch is returning string so it will go to .then and it will print output

// OUTPUT: actually, that worked

///////////////////////////////////////////////////////////////////////////////////////////////////////

const promise = new Promise((res) => res(2));
promise
  .then((v) => {
    console.log(v);
    return v * 2;
  })
  .then((v) => {
    console.log(v);
    return v * 2;
  })
  .finally((v) => {
    console.log(v, "finally");
    return v * 2;
  })
  .then((v) => {
    console.log(v);
  });

// .finally will not take anything as a paramenter and not return anything
// Output
// 2
// 4
// undefined,finally
// 8

///////////////////////////////////////////////////////////////////////////////////////////////////////

console.log("start");

const fn = () => {
  return new Promise((resolve, reject) => {
    console.log(1);
    resolve("success");
  });
};
console.log("middle");

fn().then((res) => {
  console.log(res);
});

console.log("end");
