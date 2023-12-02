const score = 400
// console.log(score)

let balance = new Number(100.0)
// console.log(balance)

// console.log(typeof balance.toString());

// console.log(balance.toFixed(2));

const other = 2333.4999;

// console.log(other.toPrecision(4));

//Precision converts 0.5 to ceiling number.
//e.g. n = 2333.4999 ==> toPrecision(4) returns 2333
//e.g. n = 2333.5 ==> toPrecision(4) returns 2334

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

//##################################################################
// ++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++
console.log(Math);

// console.log(Math.PI);
// console.log(Math.abs(-4));
// console.log(Math.round(4.3));
// console.log(Math.ceil(4.3));
// console.log(Math.floor(4.3));
// console.log(Math.min(4,8,1,6,3));
console.log(Math.random());

//To pick random value from a range
const min = 10
const max = 20

let value = (Math.floor(Math.random() * (max - min + 1))) + min
console.log(value);