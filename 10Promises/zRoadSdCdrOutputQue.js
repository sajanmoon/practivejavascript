// Q 1 - Whats  the output

console.log("start");

const promise = new Promise((resolve, reject) => {
  console.log(1);
  resolve(2);
});
promise.then((res) => {
  console.log(res);
});
console.log("end");

// In the above question we will get output as start , then console inside promise variable as 1 , then end and then the asyncronous output as 2
// Output: start,1,end,2

// *************************************************************************************************
// Q 2 - Whats  the output
console.log("start");

const promise2 = new Promise((resolve, reject) => {
  console.log(1);
  resolve(2);
  console.log(3);
});
promise.then((res) => {
  console.log(res);
});
console.log("end");

// same as the above question
// Output - start,1,3,end,2

// *************************************************************************************************
// Q 3 - Whats  the output

console.log("start");

const promise3 = new Promise((resolve, reject) => {
  console.log(1);

  console.log(3);
});
promise.then((res) => {
  console.log(res);
});
console.log("end");

// Since here there is no resolve it will not go in a .then method so nothing will be printed of asyncronous code

// *************************************************************************************************
// Q 4 - What the output
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

// output will be start , then middle , then fn() will be called so it will print console as 1 , then end and then asynrounous part as success

// *************************************************************************************************
// Q 5 - What the output
function job() {
  return new Promise((resolve, reject) => {
    reject();
  });
}

const promise5 = job();

promise5
  .then(() => {
    console.log("success 1");
  })
  .then(() => {
    console.log("success 2");
  })
  .then(() => {
    console.log("success 3");
  })
  .then(() => {
    console.log("success 4");
  })
  .catch(() => {
    console.log("error 1");
  })
  .then(() => {
    console.log("success 5");
  });
// output - error 1, and success 5 as the promise is rejected it will go in a .catch and after the catch whateverr the .then will be there all will be return

// *************************************************************************************************
// Q 6 - What the output
function job(state) {
  return new Promise((resolve, reject) => {
    if (state) {
      resolve("succes");
    } else {
      reject("error");
    }
  });
}

const promise6 = job(true);

promise6
  .then((data) => {
    console.log(data);
    return job(false);
  })
  .catch((error) => {
    console.log(error);
    return "Error caught";
  })
  .then((data) => {
    console.log(data);
    return job(true);
  })
  .catch((error) => {
    console.log(error);
  });

// succes
//error
//Error caught

// *************************************************************************************************
// Q 7 Whats the output
const firstPromise = new Promise((resolve, reject) => {
  resolve("first");
});

const secondPromise = new Promise((resolve, reject) => {
  resolve(firstPromise);
});

secondPromise
  .then((res) => {
    return res;
  })
  .then((res) => {
    console.log(res);
  });

// *************************************************************************************************
// Ques 8 - Rewrite this example code using `async/await
// instead of `.then/catch`
function loadJson(url) {
  return fetch(url).then((response) => {
    if (response.status == 200) {
      return response.json();
    } else {
      throw new Error(response.status);
    }
  });
}
loadJson("https://fakeurl.com/no-such-user.json").catch((err) =>
  console.log(err)
);

// Solution
async function loadJson(url) {
  const response = await fetch(url);
  if (response.status == 200) {
    let json = response.json();
    return json;
  } else {
    throw new Error(response.status);
  }
}
loadJson("https://fakeurl.com/no-such-user.json").catch((err) =>
  console.log(err)
);
