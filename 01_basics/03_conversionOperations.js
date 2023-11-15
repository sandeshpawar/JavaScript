let score = '33abc'

let value = null

let undefinedVal;
console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
console.log(valueInNumber);

//The value which is not converted to type number with Number function, will return NaN (Not a number) type.

let valueInNumber1 = Number(value)
// console.log(typeof valueInNumber1);
console.log(valueInNumber1); //Value null is converted to 0 in Number function.


let valueInNumber2 = Number(undefinedVal)
// console.log(typeof valueInNumber2);
console.log(valueInNumber2); //Type undefined will return NaN in Number function.

//Notes:====
//Number function conversion
//"33" => 33
//"33abc" => NaN
//true => 1
//false => 0


let isLoggedIn = "sandesh"
let booleanLoggedIn = Boolean(isLoggedIn)
console.log("isLoggedIn: ", isLoggedIn);
console.log("booleanLoggedIn: ", booleanLoggedIn);


//Notes:====
//Boolean function conversion
//1 => true
//"Sandesh" => true
//0 => false

let someNumber = 33
let strNumber = String(someNumber)
console.log(typeof strNumber);
console.log(strNumber);