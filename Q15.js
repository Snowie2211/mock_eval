// 1. Template Literal
let username = "Ashok";
let course = "JavaScript";
console.log(`Hello ${username}, welcome to the ${course} course!`);

// 2. Object Shorthand
const name = "Sam";
const age = 21;
const student = {
  name,
  age,
  greet() {
    console.log("Hello");
  }
};

// 3. Arrow Function Shorthand
const getFullName = (first, last) => `${first} ${last}`;
