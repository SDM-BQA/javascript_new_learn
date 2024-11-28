// map

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const myModifiedNums = myNums.map((num) => num + 10);

// console.log(myModifiedNums);

// channing

const newNums = myNums.map((num) => num * 10).map((num) => num + 1);

console.log(newNums);

const newNums1 = myNums
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 20);
console.log(newNums1);

