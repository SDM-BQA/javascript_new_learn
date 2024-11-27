const userEmail = "h@gmail.com";

if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Don't Have user email");
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function(){}

// to check if a object is empty or not
const obj = {};

if (Object.keys(obj).length === 0) {
  console.log("Object is empty");
}

// ************************************* //
// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = null ?? 10;

console.log(val1);

val1 = undefined;
val1 = undefined ?? 15;

console.log(val1);

// ********************************* //
// ternary operator
let num = 10;
let val = num === 10 ? "yeah..." : "noooooo...";
console.log(val);
