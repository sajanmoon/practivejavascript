function x1(cb) {
  setTimeout(() => {
    console.log("function 1");
    cb();
  }, 1000);
}
function x2(cb) {
  setTimeout(() => {
    console.log("function 2");
    cb();
  }, 1000);
}
function x3(cb) {
  setTimeout(() => {
    console.log("function 3");
    cb();
  }, 1000);
}

x1(() => {
  x2(() => {
    x3(() => {
      console.log("finished");
    });
  });
});
