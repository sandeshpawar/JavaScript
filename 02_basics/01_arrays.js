let myArray = [0, 1, 2, 3, 4, 5] 

// console.log(typeof myArray);
// console.log(myArray[6]);


const array = new Array(1, 2, 3, 4)
// console.log(array);
array.push(5)
array.push(6)
// console.log(array);

array.pop()
// console.log(array);

array.unshift(19)
// console.log(array);

array.shift()
// console.log(array);

// console.log(array.includes(9));
console.log(array.indexOf(3));

const newArr = array.join()
console.log(newArr);
console.log((typeof newArr));

console.log("A ", array);
const n1 = array.slice(1,3)
console.log(n1);
console.log("B ", array);
const n2 = array.splice(1, 3)
console.log(n2);
console.log("C ", array);



// ############################# NOTES ##################################
//- Javascript array-copy operations create shallow copies.
//- Shallow copies share the same reference. Hence, it is stored in Heap.
//- Deep copies don't share the same reference. Hence, it is stored in Stack.
//- Arrays are limitless.
//- Function unshift will add element to the start of the array.
//- Join converts array elements to string
//- Slice doesn't include end Range in the array and operations are done of copy of the data; not original array.
//- Splice includes the end range in the array. Also the operations are done on the original array reference. Hence, splice removes the range from the original array.
