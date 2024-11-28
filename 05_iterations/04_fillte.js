const coding = ["js", "ruby", "python", "cpp"];

const values = coding.forEach((item) => {
  // console.log(item);
  return item;
});
// console.log(values);
// for each does not return any value

// **************************************************** //

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// *************** fillter **************** //
let newNums = nums.filter((num) => num >= 5);
// let newNums = nums.filter((num) => {num >= 5});

// console.log(newNums);

// ************************************************ //
let myNums = [];
nums.forEach((num) => {
  if (num >= 5) {
    myNums.push(num);
  }
});
// console.log(myNums);
// ************************************************ //

const books = [
  {
    bookName: "To Kill a Mockingbird",
    genre: "Fiction",
    publishYear: 1960,
  },
  {
    bookName: "1984",
    genre: "Dystopian",
    publishYear: 1949,
  },
  {
    bookName: "The Great Gatsby",
    genre: "Fiction",
    publishYear: 1925,
  },
  {
    bookName: "Moby-Dick",
    genre: "Adventure",
    publishYear: 1851,
  },
  {
    bookName: "Pride and Prejudice",
    genre: "Romance",
    publishYear: 1813,
  },
  {
    bookName: "The Catcher in the Rye",
    genre: "Fiction",
    publishYear: 1951,
  },
  {
    bookName: "Brave New World",
    genre: "Science Fiction",
    publishYear: 1932,
  },
  {
    bookName: "The Hobbit",
    genre: "Fantasy",
    publishYear: 1937,
  },
  {
    bookName: "The Lord of the Rings",
    genre: "Fantasy",
    publishYear: 1954,
  },
  {
    bookName: "War and Peace",
    genre: "Historical Fiction",
    publishYear: 1869,
  },
];

// books genre is history
const userBooks1 = books.filter((bk) => bk.genre === "Fiction");
const userBooks2 = books.filter((bk) => bk.publishYear >= 1930);

// console.log(userBooks1);
console.log(userBooks2);
