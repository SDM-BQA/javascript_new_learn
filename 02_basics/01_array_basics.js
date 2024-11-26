// array

const myArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const names = new Array('tom', 'john', 'alpha')

// methods
myArr.push(10)
myArr.push(11)
console.log(myArr);
myArr.pop()
console.log(myArr);

myArr.unshift(-1)
console.log(myArr);

myArr.shift()
console.log(myArr);

console.log(myArr.includes(5));
console.log(myArr.length);
console.log(myArr.indexOf(-7));

const newArr = myArr.join()

console.log(newArr);
console.log(typeof newArr);


// slice splice

console.log("A ", myArr);

const arr1 = myArr.slice(1, 3)
console.log(arr1);

console.log("B ", myArr);

const arr2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(arr2);


