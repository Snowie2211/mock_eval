let x = 10;
{
  let x = 2;
}
console.log(x); // Output: 10
const profile = {
  user: {
    details: {
      email: "test@gmail.com"
    }
  }
};

// Safe access using optional chaining
console.log(profile?.user?.details?.email); // "test@gmail.com"
console.log(profile?.user?.details?.name);  // undefined (no error)

// Example where optional chaining prevents runtime error
const profile2 = {};
console.log(profile2?.user?.details?.email); // undefined (no crash!)
