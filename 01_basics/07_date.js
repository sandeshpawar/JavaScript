let myDate = new Date()

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

let currentDate = new Date(2021, 3, 11)
// console.log(currentDate.toDateString());

// currentDate = new Date("2021-03-11")
// console.log(currentDate.toDateString());

// currentDate = new Date("18-03-1987")
// console.log(currentDate.toDateString());

let timeStamp = Date.now()
// console.log(timeStamp);

// console.log(currentDate.getTime());
// console.log(currentDate.getTime());

let newDate = new Date()
console.log(newDate.getFullYear());

newDate.toLocaleString('default', {
    weekday: "long",
    timeZone: 'IST'
})


console.log(newDate.toLocaleString());



//========================= Notes ==================================
//- Date doesn't accept dd-mm-yyyy string in Date constructor.
//- Date if passed in string mm-dd-yyyy in Date constructor, then mm will start from 1 to 12
//- Date if passed in constructor(year, month, day); then month will start from 0 to 11
//- Compare dates in seconds.
