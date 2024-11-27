// let a = 10
// const b = 20
// var c = 30


// console.log(a);
// console.log(b);
// console.log(c);

let a = 200
{
    let a = 10
    const b = 20
    var c = 30  
    console.log("Inner: ", a);
      
}

// console.log(a); // local scope
console.log("Outer: ", a); 
// console.log(b); // local scope
console.log(c); //->global scope
