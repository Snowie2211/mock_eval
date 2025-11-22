let profile1 = {
  name: "Charlie",
  age: 29,
  address: {
    city: "San Francisco",
    zipcode: "94109"
  }
};

let profile2 = {
  age: 30,
  address: {
    zipcode: "94109"
  },
  country: "USA"
};

// Merge with nested spread for address
let mergedProfile = {
  ...profile1,
  ...profile2,
  address: {
    ...profile1.address,
    ...profile2.address
  }
};

console.log(mergedProfile);
