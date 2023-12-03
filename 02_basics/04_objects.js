const app = new Object()
app.id = "123abc"
app.name = "Sandesh"
app.isLoggedIn = false

// console.log(app);

const newUser = {
    email: "a@m.in",
    fullName: {
        userFullName: {
            firstName: "Sandesh",
            lastName: "Pawar"
        }
    }
}

// console.log(newUser);

// console.log(newUser.fullName.userFullName);


const obj1 = { 0: 'a', 1: 'b'}
const obj2 = { 2: 'c', 3: 'd'}

// console.log(obj1[0]);

// const obj3 = { obj1, obj2 }
// console.log(obj3);
// console.log(obj3.obj2[3]);


// const obj3 = Object.assign(obj1, obj2)
// console.log(obj1);
// console.log(obj3);

//Spread operator
const obj3 = {...obj1, ...obj2}
// console.log(obj3);


// console.log(Object.keys(app));
// console.log(Object.values(app));
// console.log(Object.entries(app));


// console.log(app.hasOwnProperty('email'));

const course = {
    courseName: "JS",
    price: "999",
    courseInstructor: "Sandesh"
}

// console.log(course.courseInstructor);

//Destructruting of objects
const {courseInstructor: instructor} = course

console.log(instructor);




//############################ NOTES ##############################
//- Object.assign will have all the objects merged in target
//Object.assign(target, source)