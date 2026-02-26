"2";
// function sum(val1) {
//   return function sum(val2) {
//     return val1 + val2;
//   };
// }

// const result = sum(2)(5);
// console.log(result)

"3";

// function infiniteCurring(val1) {
//   return function inner(val2) {
//     if (!val2) {
//       return val1;
//     }
//     return infiniteCurring(val1 + val2);
//   };
// }

// const res2 = infiniteCurring(1)(2)(3)(4)();
// console.log(res2);

"4";
// function dowload(callback) {
//   setTimeout(() => {
//     console.log("Dowload file");
//   }, 1000);
//   callback();
// }
// function compress(callback) {
//   setTimeout(() => {
//     console.log("compress file");
//   }, 2000);
//   callback();
// }
// function upload() {
//   setTimeout(() => {
//     console.log("upload file");
//   }, 3000);
// }


// dowload(() => {
//   compress(() => {
//     upload();
//   });
// });

"5"

// const arr = [5, 11, 18, 21, 40, 7];

// const findRes = arr.find((num) => num % 2 === 0 && num > 20);
// console.log(findRes);

"6"

// const arr2 = [1, 2, 3, 4];

// const arr2res = arr2.map((num) => {
//  return num * num;
// });

// console.log(arr2res);

"7"

// const falsyValue = [0, 1, false, 2, "", 3, null];

// const removeFalsyValue = falsyValue.filter(Boolean);

// console.log(removeFalsyValue);

"8"

// const array = [{ price: 100 }, { price: 200 }, { price: 300 }];

// const reduceRes = array.reduce((acc , num)=> acc + num.price , 0)
// console.log(reduceRes)

"9"

// const obj1 = {
//   name: "Abhishek",
//   person: {
//     name: "Something",
//   },
//   pin: 123456,
// };

// console.log(obj1?.number?.name);

"10"

// console.log("Start");

// Promise.resolve()
// .then(()=>{
//  console.log("P1");
// })
// .then(()=>{
//  console.log("P2");
// });

// console.log("End");

"11"

// Promise.resolve(1)
// .then((res)=>{
//  console.log(res);
//  return res + 1;
// })
// .then((res)=>{
//  console.log(res);
//  throw "Error";
// })
// .catch(err=>{
//  console.log(err);
// });

console.log("A");

setTimeout(()=>{
 console.log("B");
},0);

Promise.resolve().then(()=>{
 console.log("C");
});

console.log("D");

