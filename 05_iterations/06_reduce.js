// reduce

const myNums = [1, 2, 3, 4, 5];

const myTotal = myNums.reduce((acc, currVal) => {
  console.log(`acc: ${acc} and currVal: ${currVal}`);

  return acc + currVal;
}, 0);

console.log(myTotal);

const shoppingCart = [
  {
    id: 1,
    item: "js",
    price: 2999,
  },
  {
    id: 2,
    item: "java",
    price: 3999,
  },
  {
    id: 3,
    item: "python",
    price: 1999,
  },
];

const cartTotal = shoppingCart.reduce((acc, item)=>{
    return acc + item.price
},0)

console.log(cartTotal);
