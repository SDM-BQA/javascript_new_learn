// ****************** NUMBERS ****************

let score = 20;

console.log(typeof score);

let balance = new Number(100);
console.log(balance);
console.log(balance.toFixed(2)); // precision value
let num = 123.4935;
let num1 = 123.8935;
console.log(num.toPrecision(3));
console.log(num1.toPrecision(3));

const pre = 1000000000;
console.log(pre.toLocaleString("en-IN"));

console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE);
console.log(Number.EPSILON);

// ***************** Math ******************

console.log(Math);
console.log(Math.abs(-888));
console.log(Math.round(5.4));
console.log(Math.ceil(5.1));
console.log(Math.floor(5.5));
console.log(Math.min(4, 5, 6, 0, 2));

// random
let rVal = Math.random() * 10 + 1;
console.log(rVal);
console.log(Math.floor(rVal));

let min = 10;
let max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
