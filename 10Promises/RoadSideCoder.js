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

// Q 2
