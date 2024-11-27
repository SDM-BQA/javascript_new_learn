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
