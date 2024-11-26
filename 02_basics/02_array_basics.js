const marvel_hero = ["thor", "ironman", "spiderman"];
const dc_hero = ["superman", "flash", "batman"];

// marvel_hero.push(dc_hero)

console.log(marvel_hero);

// concat
const allHero = marvel_hero.concat(dc_hero);
console.log(allHero);

// spread
const allHero1 = [...marvel_hero, ...dc_hero];
console.log(allHero1);

// map
dc_hero.map((hero) => marvel_hero.push(hero));

console.log(marvel_hero);

//  flat
const cong_arr = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];
const simple_arr = cong_arr.flat(Infinity)

console.log(simple_arr);

// isArray
console.log(Array.isArray("ddd"));
console.log(Array.from("ddd"));
console.log(Array.from({name:"sdm"})); // interesting case


// array from multiple values
let s1 = 500
let s2 = 300
let s3 = 400

console.log(Array.of(s1, s2, s3));
