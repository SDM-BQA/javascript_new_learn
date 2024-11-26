// primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// Reference/ Non Primitive
// Array, Objects, Functions

const num1 = 55;
const num2 = 566.23;

const isLogged1 = true;
const isLogged2 = null;

const id = Symbol("12300");
const id1 = Symbol("12300");

console.log(id == id1);

const bigNum = BigInt(5555555555555);
const bigNum1 = 7896541222222n;

const arr = [1, 2, 3];
const obj = { name: "sdm", age: 23 };

function fun() {
    console.log("fun");
}

console.log(typeof fun);
