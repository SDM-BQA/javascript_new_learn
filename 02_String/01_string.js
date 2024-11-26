const nam = "sdm";
const repoCount = 26;

console.log(nam + repoCount); // don't use
console.log(`Hello my name is ${nam} and my repo count is ${repoCount}`);

// 2nd way of declaring string
const gameName = new String("hello world");

console.log(typeof gameName);

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.includes("h"));
console.log(gameName.toUpperCase());
console.log(gameName.charAt(1));
console.log(gameName.indexOf("o"));

const newStr1 = gameName.substring(0, 2);
console.log(newStr1);

const newStr = gameName.slice(0, -4);
console.log(newStr);

const newStr2 = `   jfnjfnfn jnjf njfj        

`;
console.log(newStr2.trim());

const newStr3 = gameName.replace("hello", "namaskar");
console.log(newStr3);

const charArr = gameName.split("");
console.log(charArr);
