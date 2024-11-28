//***************** for of loop ******************** //
const arr = [1, 2, 3, 4, 5];

for (const val of arr) {
  console.log(val);
}

const greeting = "Hello World!";
for (const greet of greeting) {
  console.log(`Each char is ${greet}`);
}

// Maps
const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("UK", "United Kingdom");

console.log(map);

for (const [key, value] of map) {
  console.log(key, ":- ", value);
}

// object
const myObj = {
  game1: "RDR2",
  game2: "GTA5",
};

// not iterable
// for (const [key, value] of myObj) {
//     console.log(key, ":- ", value);
// }

const myNewObj = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
};

// ************************ for in ******************* //
for (const key in myNewObj) {
  console.log(key);
  console.log(myNewObj[key]);
}

// array

const prog = ["js", "python", "cpp"];

for (const key in prog) {
  console.log(key);
  console.log(prog[key]);
}

console.log();

// ************************ for-each ******************* //
const lang = ["python", "ruby", "js", "java"];

lang.forEach(function (lan) {
  console.log(lan);
});

console.log();

lang.forEach((lan) => {
  console.log(lan);
});

function printMe(item) {
  console.log(item);
}
console.log();

lang.forEach(printMe);

lang.forEach((item, index, arr) => {
  console.log(item, index, lang);
});

const myCoding = [
  {
    id: 1,
    langName: "javascript",
    langFileName: "js",
  },
  {
    id: 2,
    langName: "java",
    langFileName: "java",
  },
  {
    id: 3,
    langName: "python",
    langFileName: "py",
  },
];

myCoding.forEach((item)=>{
    console.log(item.langFileName);
})