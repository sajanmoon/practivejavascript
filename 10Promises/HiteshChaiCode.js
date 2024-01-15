// Example 1
const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("async task is completed");
  }, 1000);
});

promiseOne.then(function () {
  console.log("promise consumed");
});

// *********************************************************************************************
// Example 2
// Another way of writing above code

new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Async Task 2");
  }, 1000);
}).then(function () {
  console.log("task 2 consumed");
});

// Example 3
new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("async 1");
    resolve();
  }, 1000);
}).then(function () {
  console.log("async 3");
});

// *********************************************************************************************
// Example 4- Here we are getting a data passes through resolve
new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("async 3");
    resolve({ name: "rohan", email: "rohan@gmail.com" });
  }, 1000);
}).then(function (user) {
  console.log(user);
});

// *********************************************************************************************
// Example 5 - Here we deal with Errors and reject
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (error) {
      resolve({ username: "rohan", password: "123" });
    } else {
      reject("ERROR:something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("promise is either resolve or rejected");
  });

// *********************************************************************************************
// Example 6 -solving same thing above but with the async await

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (error) {
      resolve({ username: "rohan", password: "123" });
    } else {
      reject("ERROR:something went wrong");
    }
  }, 1000);
});

async function consumepromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumepromiseFive();

// *********************************************************************************************
// Example 7 - fetch api data with the async await

async function getAlluser() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  console.log(data);
}
getAlluser();

// *********************************************************************************************
// Example 8 - getting above api data with .then .catch

fetch("https://fakestoreapi.com/products")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("Error", error);
  });
