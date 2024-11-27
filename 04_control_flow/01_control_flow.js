const isUserLoggedIn = true;

// if(isUserLoggedIn){
//     console.log("Executed");
// }

const num = 2;
if (10 % num == 0) {
  console.log("Number is Even");
} else {
  console.log("Number is Odd");
}

const year = 2020;

if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      console.log("Leap Year");
    } else {
      console.log("Not Leap Year");
    }
  } else {
    console.log("Leap Year");
  }
} else {
  console.log("Not Leap Year");
}

// ****************************************** //
// with logical operator

const userLoggedIn = true;
const debitcard = true;

if (userLoggedIn && debitcard) {
  console.log("You can buy");
}

const userLoggedGoogle = true;
const userLoggedEmail = true;

if (userLoggedEmail || userLoggedGoogle) {
  console.log("You can check");
}
// **************************************** //
// switch
const day = 2;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thrusday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Enter a valid day");
}
//******************************************* //
