// Q 1
// Synchronous vs Asynchronous

// Example of Synchronous code
console.log("start");

console.log("hello");

console.log("end");

// Example of asynchronous code
// E 1
console.log("start");

setTimeout(() => {
  console.log("asyncronous");
}, 0);

console.log("end");

// E 2
console.log("start");

function importantAction(username) {
  setTimeout(() => {
    return `Subcribe ${username}`;
  }, 1000);
}
const message = importantAction("rohan");

console.log(message);

console.log("end");

// it will give us the output as a start, undefined, end cause currently message doesnt have anything as it is asyncronous

// E 3
// will fix above problem
console.log("start");

function importantAction(username, cb) {
  setTimeout(() => {
    cb(`Subcribe ${username}`);
  }, 1000);
}

const message1 = importantAction("rohan", function (message) {
  console.log(message);
});

console.log("end");

// Here we have fix the above question as we are making const message1 as callback asynronous

// E 4
console.log("start");
function importantAction(username, cb) {
  setTimeout(() => {
    cb(`Subcribe ${username}`);
  }, 0);
}

function likeTheVideo(action, cb) {
  setTimeout(() => {
    cb(`like ${action} video`);
  }, 0);
}
function shareVideo(action, cb) {
  setTimeout(() => {
    cb(`share ${action} video`);
  }, 0);
}

const message11 = importantAction("rohan", function (message) {
  console.log(message);
  likeTheVideo("javascript question", (action) => {
    console.log(action);
    shareVideo("interview questions", (action) => {
      console.log(action);
    });
  });
});

console.log("end");
//  Here we are encontoring Callback Hell

// *****************************************************************************************************

// Q 2-Basic example of a promise

console.log("start");

const sub = new Promise((resolve, reject) => {
  setTimeout(() => {
    const value = false;
    if (value) resolve("i resolved");
    else reject(new Error("I am rejected"));
  }, 1000);
});

sub
  .then((val) => {
    console.log(val);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("end");

// *****************************************************************************************************
// Q 3
console.log("start");

const sub1 = Promise.resolve("i resolved");

sub.then((res) => {
  console.log(res);
});

console.log("end");

// Output
// start
// end
// i resolved

// *****************************************************************************************************
// Q 4 -chaining the promises
function likeTheVideo(videoname) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`like the ${videoname} video`);
    }, 1000);
  });
}

function subscribe(channelname) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`subscribe to the ${channelname} channel`);
    }, 1000);
  });
}

function shareVideo(channelLink) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`share the ${channelLink} video`);
    }, 1000);
  });
}

likeTheVideo("coder")
  .then((res) => {
    console.log(res);
    return subscribe("rider");
  })
  .then((resp) => {
    console.log(resp);
    return shareVideo("JSinterviewQuestion.com");
  })
  .then((resp) => {
    console.log(resp);
  });

// *****************************************************************************************************
// Q 5
// Example of Promise.all (in the following problem we have passed all promises at a time using promise.all where we will can a output of all the promises)
function likeTheVideo(videoname) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`like the ${videoname} video`);
    }, 1000);
  });
}

function subscribe(channelname) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`subscribe to the ${channelname} channel`);
    }, 1000);
  });
}

function shareVideo(channelLink) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`share the ${channelLink} video`);
    }, 1000);
  });
}

Promise.all([
  likeTheVideo("coder"),
  subscribe("rider"),
  shareVideo("JSinterviewQuestion.com"),
])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// Modification of above question here if the any of the promise fail it will thrown an error

function likeTheVideo(videoname) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`like the ${videoname} video`);
    }, 1000);
  });
}

function subscribe(channelname) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`Failed subscribe to the ${channelname} channel`);
    }, 1000);
  });
}

function shareVideo(channelLink) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`share the ${channelLink} video`);
    }, 1000);
  });
}

Promise.all([
  likeTheVideo("coder"),
  subscribe("rider"),
  shareVideo("JSinterviewQuestion.com"),
])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// *****************************************************************************************************
// Example of Promise.race - here which ever the promise got settled first will be return weather promise is fullfiled or rejected
function likeTheVideo(videoname) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`like the ${videoname} video`);
    }, 3000);
  });
}

function subscribe(channelname) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`subscribe to the ${channelname} channel`);
    }, 4000);
  });
}

function shareVideo(channelLink) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`share the ${channelLink} video`);
    }, 5000);
  });
}

Promise.race([
  likeTheVideo("coder"),
  subscribe("rider"),
  shareVideo("JSinterviewQuestion.com"),
])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// *****************************************************************************************************
// Example of Promise.allSettled - here it will act similar to Promise.all but here it will return all the promise weather its fullifiled or rejected
function likeTheVideo(videoname) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`like the ${videoname} video`);
    }, 3000);
  });
}

function subscribe(channelname) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`subscribe to the ${channelname} channel`);
    }, 2000);
  });
}

function shareVideo(channelLink) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`share the ${channelLink} video`);
    }, 5000);
  });
}

Promise.allSettled([
  likeTheVideo("coder"),
  subscribe("rider"),
  shareVideo("JSinterviewQuestion.com"),
])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// *****************************************************************************************************
// Example of Promise.any - here it will work similar to race but in this case it will only return the fullfiled promises
function likeTheVideo(videoname) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`like the ${videoname} video`);
    }, 3000);
  });
}

function subscribe(channelname) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`subscribe to the ${channelname} channel`);
    }, 2000);
  });
}

function shareVideo(channelLink) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`share the ${channelLink} video`);
    }, 5000);
  });
}

Promise.any([
  likeTheVideo("coder"),
  subscribe("rider"),
  shareVideo("JSinterviewQuestion.com"),
])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
