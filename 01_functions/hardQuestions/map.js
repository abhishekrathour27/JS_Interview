// Map hamesha same length ka naya array return karta hai.
// map() is an array method used to iterate over an array and create a new array by applying a function to each element.
const arr = [1, 2, 3, 4, 5];

const result = arr.map(num => num < 3);

console.log(result);
// Output: [true, true, false, false, false]

//=>
const arr2 = [1, 2, 3, 4, 5];
const result2 = arr2.filter((item)=> item != 3);
console.log(result2); // Output : [ 1, 2, 4, 5 ]

// 0, null, undefined, false, NaN, "" → falsy value in JS

if([]){
    console.log("Hello")
}

console.log(typeof([])); // type -> object


// array always returns object and object is a true value

