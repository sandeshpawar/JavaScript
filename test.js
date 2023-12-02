const obj = { name: "Test", age: 30, city: "Pune"}
const myJson = JSON.stringify(obj);
console.log(myJson);


const object = { name: "Test", age: Number(parseFloat(30.0).toFixed(1)), city: "Pune"}
let myJsons = JSON.stringify(object);
console.log(myJsons);