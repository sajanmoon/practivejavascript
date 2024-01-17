const pr = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("err");
  }, 1000);
});

pr.then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
});
