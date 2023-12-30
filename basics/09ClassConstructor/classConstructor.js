class user {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  encryptpassword() {
    return `${this.password}abc`;
  }

  changeusername() {
    return `${this.username.toUpperCase()}`;
  }
}

const chai = new user("sajan", "sajanmoon5@gmail.com", "1234567890");
console.log(chai.encryptpassword());
console.log(chai.changeusername());
