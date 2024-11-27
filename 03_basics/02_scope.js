// let a = 10
// const b = 20
// var c = 30

// console.log(a);
// console.log(b);
// console.log(c);

let a = 200;
{
  let a = 10;
  const b = 20;
  var c = 30;
  console.log("Inner: ", a);
}

// console.log(a); // local scope
console.log("Outer: ", a);
// console.log(b); // local scope
console.log(c); //->global scope

// ************************************************************** //

function one() {
  const userName = "sdm";
  function two() {
    const website = "youtube";
    console.log(userName);
  }
  // console.log(website);
  two();
}

// one()

// *************************************************************** //
{
  const userName = "sdm";
  if (userName === "sdm") {
    const website = " youtube";
    console.log(userName + website);
  }
  // console.log(website);
}
// console.log(userName);



// **************************** Hoisting ******************************* //
console.log(addOne(5)); // hoisting

function addOne(num) {
  return num + 1;
}

console.log(addTwo(5)); // Cannot access 'addTwo' before initialization

const addTwo = function (num) {
  return num + 2;
};
