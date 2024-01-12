// Destructure Objects
const course = {
  name: "sajan",
  email: "sajanmoon5@dmail.com",
  place: "mumbai",
  fullName: {
    firstName: "sajan",
    lastName: "moon",
  },
};

const {
  name,
  email: mail,
  place,
  fullName: [firstName],
} = course;
console.log(name);
console.log(mail);
console.log(place);
