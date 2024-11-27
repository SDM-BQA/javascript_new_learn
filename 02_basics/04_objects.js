const shareView = new Object();
console.log(shareView);

shareView.id = "123abc";
shareView.name = "sdm";
shareView.isLoggedIn = false;

console.log(shareView);

const regUser = {
  email: "abc@gmail.com",
  userFullName: {
    fName: "sdm",
    lName: "bqa",
  },
};

console.log(regUser.userFullName);
console.log(regUser.userFullName.fName);

// object merge

const obj1 = { 1: "a", 2: "b", 3: "c" };
const obj2 = { 4: "d", 5: "e", 6: "f" };

const obj3 = { obj1, obj2 };
console.log(obj3);

const obj4 = Object.assign({}, obj1, obj2);
console.log(obj4);

const obj5 = { ...obj1, ...obj2 };
console.log(obj5);

const users = [
  {
    id: 1,
    email: "sdmbqa420@gmail.com",
  },
  {
    id: 2,
    email: "bqa420@gmail.com",
  },
  {
    id: 3,
    email: "a420@gmail.com",
  },
];

console.log(users[2].email);
console.log(Object.keys(users));
console.log(Object.values(users));
console.log(Object.entries(users));

