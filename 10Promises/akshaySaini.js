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
createOrder(
  cart.then(function (orderID) {
    proceedToPayment(orderID);
  })
);

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
