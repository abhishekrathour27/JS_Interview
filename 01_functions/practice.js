// const arr = [2, 4, 6, 8, 5];

// const result = arr.map((n) => n == 2);

// console.log(result);

const arr2 = [1, "s", "abhi", false];

const str = [];
const num = [];
const boolen = [];
const char = [];

function arrayfunction(arr2) {
  arr2.forEach((item, index) => {
    if (typeof item === "number") {
      num.push(item);
    } else if (typeof item === "boolean") {
      boolen.push(item);
    } else if (typeof item === "string") {
      if (item.length === 1) {
        char.push(item);
      } else {
        str.push(item);
      }
    }
  });
  return {
    string : str,
    number : num,
    Boolean : boolen,
    character : char
  }
}

console.log(arrayfunction(arr2))

// function temp (){

// }

// console.log(temp());
// console.log(temp);

// var temp = function () {
//   console.log("hello");
// };
// // name()

// console.log(a);
// let a = 10;
// console.log(a);

// setTimeout(()=>{
//     console.log("hello")
// },0)

// const res = Promise.resolve("abhi");
// console.log("res",res)
// res.then((a)=>{
//   console.log(a)
// })

// const p1 = new Promise((res, rej) => {
//   let status = 204;
//   if (status === 200) {
//     res("i am resolve");
//   } else {
//     rej("i am rejected");
//   }
// });

// p1.then((data) => {
//   console.log(data);
// }).catch((error) => {
//   console.log(error);
// });

// console.log("bye")

// function hey() {
//   console.log("Hey i am ");
//   return "hellolll"
// }

// function hello(hey) {
//  return hey();
// }
// const res = hello(hey);
// console.log("res",res)

// function first(val1){
//    return function sec(val2){
//       return val1 * val2;
//    }
// }

// const a = first(2);
// console.log(a(16));

// for(let i=1; i<=10; i++ ){
//     console.log(` 2 * ${i} = ${a(i)}`)
//     // 2 * 1 = 2
//     // 2* 2 = 4
//     // 2 * 3 = 6
// }

// function first(val1){
//    return function sec(val2){
//      if(!val2){
//         console.log("val1",val1);
//         return val1;
//      }
//      console.log({
//         val1: val1,
//         val2 : val2
//      })
//      return first(val1 + val2)
//    }
// }

// console.log(first(4)(5)(6)(7)())

// function boilWater(callback) {
//   setTimeout(() => {
//     console.log("1 . water boiled");
//     callback();
//   }, 1000);
// }

// function addTealeaves(callback) {
//   setTimeout(() => {
//     console.log("Tea leaves added");
//     callback();
//   }, 2000);
// }
// function addSuger(callback) {
//   setTimeout(() => {
//     console.log("suger  added");
//     callback();
//   }, 3000);
// }
// function serveTea() {
//   setTimeout(() => {
//     console.log("Served ");
//   }, 4000);
// }

// boilWater(() => {
//   addTealeaves(() => {
//     addSuger(() => {
//       serveTea();
//     });
//   });
// });
