function formatAddresses(arr) {
  let result = [];

  // Destructuring Alice's details
  let { name: name1, address: { city: city1, street: { name: street1 } } } = arr[0];
  result.push(`${name1} lives in ${city1} on ${street1}`);

  // Destructuring Bob's details
  let { name: name2, address: { city: city2, street: { name: street2 } } } = arr[1];
  result.push(`${name2} lives in ${city2} on ${street2}`);

  return result;
}

// Example input
let arr = [
  {
    name: "Alice",
    address: {
      city: "New York",
      street: { name: "Broadway", number: 123 }
    }
  },
  {
    name: "Bob",
    address: {
      city: "Los Angeles",
      street: { name: "Sunset Boulevard", number: 456 }
    }
  }
];

console.log(formatAddresses(arr));
