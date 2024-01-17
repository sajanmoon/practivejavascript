const cart = ["tshirt", "pants", "jeans"];

api.createOrder(cart, function () {
  api.procedToPayement(function () {
    api.showSummary(function () {
      api.updateWallet();
    });
  });
});
// When Api's are depent on one after the other we end up falling to the callback hell

// What is callback hell ?
// one callback inside another callback inside another callback/api makes callBACK HELL and a code start to grow horizonatally insead of vertically(this structure is known as PYRAMID OF DOOM) its UNREADABLE and UNMAINTANABLE

// INVERSION OF CONTROL - when we loose the control of our code

// Example of callbackhell
function func1(cb) {
  setTimeout(() => {
    console.log("Function 1");
    cb();
  }, 1000);
}

function func2(cb) {
  setTimeout(() => {
    console.log("Function 2");
    cb();
  }, 1000);
}

function func3(cb) {
  setTimeout(() => {
    console.log("Function 3");
    cb();
  }, 1000);
}

func1(function () {
  func2(function () {
    func3(function () {
      console.log("done");
    });
  });
});
