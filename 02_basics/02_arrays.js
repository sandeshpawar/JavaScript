const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3]);

const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const new_all_heros = [...marvel_heros, ...dc_heros]            //Spread operator
// console.log(new_all_heros);

const other_array = [1, 2, 3, [4, 5], 6, 7, [8, 9, [10, 11]]]
// console.log(other_array);

const new_other_array = other_array.flat(Infinity)
// console.log(new_other_array);


console.log(Array.isArray("Sandesh"));
console.log(Array.from("Sandesh"));
console.log(Array.from({ name: "Sandesh"}));

let n1 = 100
let n2 = 200
let n3 = 300

console.log(Array.of(n1, n2, n3));

//############################## NOTES ###################################
//- Array.push doesn't merge one array elements with other. Instead of that it adds second array as a element in first array.
//- Array.concat will merge elements from second array in contents of the first array itself. This will return new array.
//- Array spread can be used to concat elements from two or more arrays.
//- Array.flat will remove all the depths of arrays in existing array.