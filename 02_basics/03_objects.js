// Singleton
// constructor -> Object.create

// objects literals

// symbol
const mySym = Symbol("key1")
console.log(typeof mySym);

const jsUser = {
    name:"sdm",
    "full name": "sdmbqa",
    age:23,
    occ: "Student",
    isLoggedIn :false,
    lastLoginsDays: ["monday", "wednesday"],
    // using symbol in object
    [mySym]:"key1",
}


// access 1
console.log(jsUser.age);
console.log(jsUser.occ);

// access 2
console.log(jsUser["age"]);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);


jsUser.age = 22
console.log(jsUser["age"]);

// to freeze or prevent any further changes 
// Object.freeze(jsUser)

// no error but will not implemented
jsUser.name ="bqa"

console.log(jsUser);


jsUser.greeting = function(){
    console.log(`Hello ${this.name}!`);
}

console.log(jsUser.greeting);
jsUser.greeting()

