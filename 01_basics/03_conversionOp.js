let score1 = "33"
console.log(typeof score1);

let scoreInNumber1 = Number(score1)
console.log(typeof scoreInNumber1);


let score2 = "33abc"
console.log(typeof score2);
let scoreInNumber2 = Number(score2)
console.log(typeof scoreInNumber2);
console.log(scoreInNumber2);


// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

// boolean
let isLogged = 0
let booleanIsLogged = Boolean(isLogged)
console.log(booleanIsLogged);

let isLogged2 = ""
let booleanIsLogged2 = Boolean(isLogged2)
console.log(booleanIsLogged2);

let isLogged3 = null
let booleanIsLogged3 = Boolean(isLogged3)
console.log(booleanIsLogged3);

// *********************** Operations ************************
let val = 3
let negVal = -val
console.log(negVal);

console.log(2**8);
console.log(56%9);

let str1 = "hello"
let str2 = " world"
let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");
console.log(1 + "6");
let d = "1" + 5
console.log(typeof d);


console.log(true);
console.log(-true);
console.log(+true);
console.log(+"");


