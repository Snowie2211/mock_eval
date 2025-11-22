// a) Arrow function to check even number
const isEven = (num) => num % 2 === 0;

// b) Rewrite using ternary operator
let marks = 40;
let result = marks >= 35 ? "Pass" : "Fail";

// c) Arrow function greet with ternary fallback
const greet = (name) => console.log(`Hello, ${name ? name : "Guest"}!`);
