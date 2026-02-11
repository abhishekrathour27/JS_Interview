// JavaScript me find() ek array method hai jo kisi array me se pehla element return karta hai jo di hui condition ko satisfy karta hai. If condition didn't match any element then it returns undefined

let users = [
  { id: 1, name: "Abhishek" },
  { id: 2, name: "Rahul" },
  { id: 3, name: "Amit" }
];

const result = users.find((item)=> item.id === 2 );
console.log(result);

//=>

const arr2 = [10, 20, 30, NaN];
console.log(arr2.find((x)=> x === NaN)); // this becoems undefined because nan is the only value in js that is not equal to itself

//=>

const obj1 = { id: 1 };
const obj2 = { id: 2 };
const obj3 = { id: 3 };

const arr = [obj1, obj2, obj3];

// const result2 = arr.find(item => item === { id: 2 });  

console.log("is this what i am checking",result2);

const ar1=[1,2,3]
const arr3=[1,2,3];

console.log(ar1 === arr3)// Output: False | Objects & Arrays → compare by reference (memory address)

// JavaScript me:
// Primitive values (number, string, boolean) → compare by value
// Objects & Arrays → compare by reference (memory address)

