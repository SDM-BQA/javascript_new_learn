// loops
// for

for (let index = 0; index < 10; index++) {
  console.log(index);
}

console.log();

for (let index = 0; index < 10; index++) {
  if (index == 7) {
    console.log("THALA FOR REASON!!!!");
  }
  console.log(index);
}

// pattern
for (let i = 0; i < 5; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row += "* ";
  }
  console.log(row);
}

// break and continue

for (let i = 0; i < 10; i++) {
  if (i === 5) continue;
  if (i === 9) break;
  console.log(i);
}
