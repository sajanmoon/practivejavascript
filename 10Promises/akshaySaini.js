const cart = ["shoes", "watch", "belts"];

// Example of callback
createOrder(cart, function () {
  proceedToPayment(orderID);
}); //orderID

// creating a promises
const promise = createOrder(cart);

promise.then(function (orderID) {
  proceedToPayment(orderID);
});
// It will return us the object
//{data:undefined}
//{data:orderDetails}--it will be filed after the async time it takes

// Another way to write promises(above code)
createOrder().then(function (orderID) {
  return proceedToPayment(orderID);
});

// Promise Chaining
createOrder(cart)
  .then(function (orderID) {
    return proceedToPayment(orderID);
  })

  .then(function (showDetail) {
    return orderSummary(showDetail);
  })
  .then(function (paymentInfo) {
    return updateWallet(paymentInfo);
  });

//   With a arrow function

createOrder2(cart)
  .then((orderID) => proceedToPayment(orderID))
  .then((showDetail) => orderSummary(showDetail))
  .then((paymentInfo) => updateWallet(paymentInfo));

// ******************************************************************************************

const GITHUB_API = "https://fakestoreapi.com/products";

const user = fetch(GITHUB_API);

console.log(user);

user.then(function (data) {
  console.log(data);
});

// There are only three states
//-Pending
//-Fullfilled
//-Rejected

// What is promises - Promise is a object representing the eventual completion or failure of an asynrounous operation

// ******************************************************************************************************

// How to create a our own Promises

const cart2 = ["shoes", "kurta", "jeans"];

const promise1 = createOrder(cart);

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      const err = new Error("cart is not valid");
      reject(err);
    }
    const orderId = "123";
    if (orderId) {
      resolve(orderId);
    }
  });
  return pr;
}

promise1
  .then(function (orderId) {
    console.log(orderId);
  })
  .catch(function (err) {
    console.log(err.message);
  });

function validateCart(cart) {
  return true;
}

// Another way to write above code

const cart23 = ["shoes", "kurta", "jeans"];

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      const err = new Error("cart is not valid");
      reject(err);
    }
    const orderId = "123";
    if (orderId) {
      resolve(orderId);
    }
  });
  return pr;
}

createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
  })
  .catch(function (err) {
    console.log(err.message);
  });
function validateCart(cart) {
  return true;
}

// *****************************************************************************************************
const cart1 = ["shoes", "kurta", "jeans"];

createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  })
  .catch(function (err) {
    console.log(err.message);
  });

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      const err = new Error("cart is not valid");
      reject(err);
    }
    const orderId = "123";
    if (orderId) {
      resolve(orderId);
    }
  });
  return pr;
}

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    resolve("Payment succesfull");
  });
}
function validateCart(cart) {
  return true;
}
