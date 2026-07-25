// const arr = [1, 2, 2, 3, 4, 4];

// function removeDublicate(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!newArr.includes(arr[i])) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// console.log(removeDublicate(arr));

// const arr = [1, 2, [3, 4, [5]]];
// // const array = [1, 2, 3];

// const newArr = arr.toString()
// console.log(newArr)

// const array = (newArr.split(','))
// console.log(array)

// const result = array.map(Number)

// console.log(result)

// function converToNumber(arr) {
//   let newArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       newArr.push(...converToNumber(arr[i]))
//     //  console.log(result)
//     } else {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// console.log(converToNumber(arr));

// const arr = [3, 7, 2, 8];

// // let newArr = [];
// let max = arr[0];
// let min = arr[0];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   } else if (arr[i] < min) {
//     min = arr[i];
//   }

//   // newArr.push(min);
// }
// let newArr = [max , min];

// console.log(max);
// console.log(min);
// console.log(newArr);

// const arr = [5, 3, 8, 8, 1, "m", "q", "r", 10, 2, "a", "z", 6, "y", 5];

// function occurence(arr) {
//   let obj = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (obj[arr[i]]) {
//       obj[arr[i]]++;
//     } else {
//       obj[arr[i]] = 1;
//     }
//   }
//   return obj;
// }

// console.log(occurence(arr));

// Output: {'a': 3, "b";4, 2: 2,}

const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

let res = [];

// for (let i = 0; i < arr1.length; i++) {
//   for (let j = 0; j < arr2.length; j++) {
//     if (arr1[i] === arr2[j]) {
//       res.push(arr1[i]);
//     }
//   }
// }

for(let i = 0; i<arr1.length; i++){
   if(arr2.includes(arr1[i])){
    res.push(arr1[i]);
   }
}

console.log(res)
