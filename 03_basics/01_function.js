function justSayMyName() {
  console.log("Walter White");
}
justSayMyName();

// function addTwoNum(num1, num2) {
//   console.log(num1 + num2);
// }
function addTwoNum(num1, num2) {
  return num1 + num2;
}

const result = addTwoNum(4, 5);

// console.log("Result: ", result);

function loginUserMsg(userName = "user") {
  if (!userName) {
    console.log("Please Enter a username");
    return;
  }
  return `${userName} just logged in`;
}
const msg = loginUserMsg("SDM");
const msg1 = loginUserMsg();
console.log(msg);
console.log(msg1);

// ******************************************************* //
// variable argument

// function calculateCartPrice(...num1) {
//   return num1;
// }
function calculateCartPrice(val, val2, ...num1) {
  return num1;
}

console.log(calculateCartPrice(5, 5, 8, 9, 44, 55, 22));


// objects
const user ={
    productName:"Headphone",
    price: 199
}

function handleObj(anyObj) {
    console.log(`Username is ${anyObj.productName} and Price is ${anyObj.price}`);
    
}
handleObj(user)

//  arrays

const myNewArr = [100, 200, 300, 400, 500]

function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue(myNewArr));
console.log(returnSecondValue([100, 400, 500, 600, 700, 800]));
