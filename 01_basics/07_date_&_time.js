// Date
let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);


let myCreatedDate1 = new Date(2024, 10, 26)
let myCreatedDate2 = new Date(2024, 10, 26, 5, 3)
console.log(myCreatedDate2.toLocaleString());


let newDate = new Date("11-26-2024")
console.log(newDate.toLocaleString());


let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate1.getTime());
console.log(Math.floor(Date.now()/1000)); // seconds

let date1 = new Date()
console.log(date1);

console.log(date1.getTime());
console.log(date1.getSeconds());
console.log(date1.getDay());
console.log(date1.toLocaleString('default',{
    weekday:"long",
}));

