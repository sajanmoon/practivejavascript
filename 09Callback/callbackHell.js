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

// INVERSION OF CONTROL 

