// 1. Use spread operator to merge arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5];
let result = [...arr1, ...arr2];
console.log(result); // [1, 2, 3, 4, 5]

// 2. Function using rest operator to sum numbers
const sum = (...nums) => nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum(1, 2, 3, 4, 5)); // 15

// 3. Multi-level destructuring
const user = {
  name: "Alice",
  age: 24,
  address: {
    city: "Bangalore",
    pin: 560001
  }
};

const { name, address: { city, pin } } = user;
console.log(name); // Alice
console.log(city); // Bangalore
console.log(pin);  // 560001
