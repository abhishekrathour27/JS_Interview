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
// const array = [1, 2, 3];

// const newArr = arr.toString()

// const array = (newArr.split(','))

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

const arr = [3, 7, 2, 8];

// let newArr = [];
let max = arr[0];
let min = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  } else if (arr[i] < min) {
    min = arr[i];
  }

  // newArr.push(min);
}
let newArr = [max , min];

console.log(max);
console.log(min);
console.log(newArr);
