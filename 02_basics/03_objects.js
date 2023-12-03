// Singleton

//Object literals
const mySym = Symbol("key1")
const jsUser = {
    name: "Sandesh",
    [mySym]: "key-value",
    age: 36,
    location: "Pune",
    email: "a@m.in",
    isLoggedIn: false
}
// console.log(jsUser);

// console.log(jsUser.name);
// console.log(jsUser['name']);

// console.log(jsUser[mySym]);

// jsUser.age = 24
// console.log(jsUser.age);
// Object.freeze(jsUser)
// jsUser.age = 37
// console.log(jsUser.age);

jsUser.greeting = function() {
    console.log("Hello World JS");
}

// console.log(jsUser.greeting());
jsUser.greeting();


jsUser.greetingTwo = function() {
    console.log(`Hello World JS, ${this.name}`);
}

jsUser.greetingTwo();

//################### NOTES ###################################
//- If object is created with constructor, it will create Singleton
//- To refer Symbol data type as a key in object, you need to use it following way:
// const mySym = Symbol("key1")
//let obj = { 
//      [mySym]: "Test"
// }
//- We can freeze the contents of the object using Object.freeze(ArrayName)