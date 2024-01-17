// Examples of Promise.all
// Example 1 - all the promise success
// When all the promises success it will return all the promises after 3 sec

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1 sucess");
  }, 3000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1 sucess");
  }, 1000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1 sucess");
  }, 2000);
});

Promise.all([p1, p2, p3]).then((res) => {
  console.log(res);
});

// Example 2-where one of the promises failed
// the moment 1st promise failes it will thrown as error(in this case in 1 sec)

const p12 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1 sucess");
  }, 3000);
});
const p22 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("p2 fail");
  }, 1000);
});
const p32 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p3 sucess");
  }, 2000);
});

Promise.all([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });
// ***************************************************************************************************************

// Examples of Promise.allSettled
// here it will wait for all promises to settled and will give all the promises where the success or failed
// Example 3 -it will give us all the sucess and rejected promises
const p13 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1 sucess");
  }, 3000);
});
const p23 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("p2 fail");
  }, 1000);
});
const p33 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p3 sucess");
  }, 2000);
});

Promise.allSettled([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// Example of Promise.race
// here it will give us the promise which take minimum amout of time(i.e. first promise) if the first promise is rejected it will throw an error
// Example 4-here as a first promise( i.e p2) is rejected it will throw an error
const p14 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1 sucess");
  }, 3000);
});
const p24 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("p2 fail");
  }, 1000);
});
const p34 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p3 sucess");
  }, 2000);
});

Promise.race([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });

// Example of Promise.any
//Here it will wait for the first settled success as soon as it gets it return us the promise
// Example 5 - here as p3 will be the first settled success it will return us the p3 promise
const p15 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1 sucess");
  }, 3000);
});
const p25 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("p2 fail");
  }, 1000);
});
const p35 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p3 sucess");
  }, 2000);
});

Promise.any([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });

//   Example 6 -modification of the above problem if all the promise got rejected we will get an Error as (AggregateError: All promises were rejected)

const p16 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("p1 fail");
  }, 3000);
});
const p26 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("p2 fail");
  }, 1000);
});
const p36 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("p3 fail");
  }, 2000);
});

Promise.any([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });

Promise.any([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
    console.log(err.errors); //by using this we will get array of an aggregeted errors
  });
///////////////////////////
