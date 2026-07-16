// QUES =>  Remove dublicate element .
// const arr = [1,2,3,2,5];
// let newArr = []
// let res;

// for(let i = 0; i < arr.length; i++){
//     if(!newArr.includes(arr[i])){
//         newArr.push(arr[i])
//     }
//     else{
//         res = arr[i]
//     }
// }

// console.log(res)

//=> Without inbuild method

const arr = [1, 2, 3, 2, 5];
let newArr = [];

for (let i = 0; i < arr.length; i++) {
  let found = false;
  for (let j = 0; j < newArr.length; j++) {
    if (arr[i] === newArr[j]) {
      found = true;
      break;
    }
  }
  if (!found) {
    newArr.push(arr[i]);
  }
}

console.log(newArr);

// QUES => Find Second largest :

// const arr = [4, 7, 2, 9, 5];

// let max = arr[0];
// let secMax = -Infinity;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     secMax = max;
//     max = arr[i];
//   } else if (arr[i] > secMax) {
//     secMax = arr[i];
//   }
// }

// console.log(max, secMax);

// QUES =>find sum of remaining element after first even number

// const arr = [3, 5, 6, 8, 10];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     for (let j = i + 1; j < arr.length; j++) {
//       sum = sum + arr[j];
//     }
//      break
//   }
// }

// console.log(sum)

//QUES => reverese a array :

// const arr = [1, 2, 3, 4];
// let temp;

// for (let i = 0; i < arr.length / 2; i++) {
//   let j = arr.length - 1 - i;
//   temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// }

// console.log(arr);
