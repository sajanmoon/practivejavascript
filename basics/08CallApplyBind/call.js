// Call - current execution contest call some other function
// E 1
// function SetUserName(username) {
//   this.username = username;
// }

// function createUserName(username, email, password) {
//   SetUserName.call(this, username);
//   this.email = email;
//   this.password = password;
// }

// const chai = new createUserName("sajan", "sajanmoon5@gmail.com", "123");
// console.log(chai);

// E 2
function setusername2(username2) {
  this.username2 = username2;
}
function profile1(username2, email2, password2) {
  //   setusername2(username2);
  this.email2 = email2;
  this.password2 = password2;
}
const hello = new profile1("sajan", "sajanmoon5@gmail.com", "1234567890");
console.log(hello);

// E 3
function setName3(username3) {
  this.username3 = username3;
}

function profile3(username3, email3, password3) {
  setName3.call(this, username3);
  this.email3 = email3;
  this.password3 = password3;
}
const user3 = new profile3("sajan", "sajanmoon5@gmail.com", "123456789");
console.log(user3);
