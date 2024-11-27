const user = {
  userName: "sdm",
  price: 1999,
  welcomeMsg: function () {
    console.log(`${this.userName}, welcome to the website`);
    // console.log(this);
  },
};
// this refer the current context

// console.log(user);

// user.welcomeMsg()
user.userName = "sam";
// user.welcomeMsg()

// console.log(this);

// In browser the default object is Window Object

function chai() {
  let userName = "sdm";
  console.log(this);
}
// chai()

// arrow
const tea = () => {
  let userName = "Sdm";
  console.log(this.userName);
  console.log(this);
};

tea();

// ************************************************* //
const addTwo = (num1, num2) => {
  return num1 + num2;
};

console.log(addTwo(4, 5));

// impicit Return

const addTwo1 = (num1, num2) => num1 + num2;
console.log(addTwo1(40, 55));

// object return
const retObj = () => ({userName: "sdm"})

console.log(retObj());
