// Javascript is dynamically typed language.

// Primitive Types

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

//Adding n at the end of the number converts it to bigint;

const score = 100
const scoreVal = 100.3
const isLoggedIn = false
const outsideTemp = null 
let userEmail;

const id = Symbol('123');
const newId = Symbol('123');

// console.log(id);
// console.log(newId);

// console.log(id === newId);

const bigNumber = 12456758665n;

// console.log(typeof bigNumber);

let num = bigNumber + 1n
// console.log(typeof num);
// console.log(num);

// Reference Types (Non primitive)

// Arrays, Objects, Functions


// Arrays

const heros = ["Shaktimaan", "Naagraj"]

// console.log(typeof heros);

let myObj = {
    name: "Sandesh",
    age: 36
}


const myFun = function() {
    console.log("Hello World");
}


// console.log(typeof myObj);


// ==========================================================

// Memory in JavaScript

// Stack (Used for Primitive Types), Heap (Used for Non primitive types)
let username = "Sandesh"
let newUsername = username
newUsername = "Test"
console.log(username);
console.log(newUsername);

let userOne = {
    email: "san@one.in",
    age: 30
}

console.log(userOne);
console.log(userOne.email);

let userTwo = userOne

userTwo.email = "a@m.in"
console.log(userOne.email);

