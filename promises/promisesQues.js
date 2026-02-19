// Q -> 1.

// const p1 = new Promise((res,rej)=>{
//     let status = "200";
//     if(status === "200"){
//         res("success");
//     }
//     else{
//         rej("reject");
//     }
// })

// p1.then((a)=>{
//    console.log(a)
// }).catch((b)=>{
//   console.log(b)
// })

// // console.log(p1)

// setTimeout(()=>{
//    console.log("Hello")
// },3000)

// console.log("byeee");

//Q -> 2

// const order = new Promise((resolve, reject) => {
//   console.log('Espresso');
//   resolve('done');
// });

// order.then(() => {
//   console.log('Latte');
// });

// console.log('Mocha');

// // Mocha , done , Latte

//Q -> 3

// const task = new Promise((resolve, reject) => {
//   console.log('Loading');
// });

// task.then(() => {
//   console.log('Complete');
// });

// console.log('Waiting');

// Q -> 4

// console.log('alpha');

// const job = new Promise((resolve, reject) => {
//   console.log('beta');
//   resolve(42);
//   console.log('gamma');
// });

// job.then(val => {
//   console.log(val);
// });

// console.log('delta');

// // alpha , beta , gamma , delta , 42

// / //4
// console.log('red');

// const buildTask = () => new Promise((resolve, reject) => {
//   console.log('green');
//   resolve('blue');
// });

// console.log('yellow');

// buildTask().then(res => {
//   console.log(res);
// });

// console.log('purple');

// //Output => red , yellow , green , purple , blue

//5
// console.log('first');

// Promise.resolve(10).then(val => {
//   console.log(val);
// });

// Promise.resolve(20).then(val => {
//   console.log(val);
// });

// console.log('last');

// //output => first , last , 10 , 20

//6 

// const p1 = new Promise((resolve, reject) => {
//   console.log('init');
//   resolve('payload');
// });

// const p2 = p1.then(res => {
//   console.log(res);
// });

// console.log('p1:', p1);
// console.log('p2:', p2);

// // Output => init , payload , 

// //7 

// const make = () => new Promise((resolve, reject) => {
//   console.log('build');
//   resolve('shipped');
// });

// make().then(res => {
//   console.log(res);
// });

// console.log('deploy');

// //Output => build , deploy , shipped

// //8
// const p = new Promise((resolve, reject) => {
//   console.log('outer');
//   setTimeout(() => {
//     console.log('timerStart');
//     resolve('resolved');
//     console.log('timerEnd');
//   }, 0);
//   console.log('inner');
// });

// p.then(res => {
//   console.log(res);
// });

// console.log('after');

// //Output => outer , inner , after , timerStart , timerEnd , resvoled

/ //9 
// setTimeout(() => {
//   console.log('timeout-A');

//   Promise.resolve().then(() => {
//     console.log('micro-A');
//   });
// }, 0);

// setTimeout(() => {
//   console.log('timeout-B');
// }, 0);

// Output => timeout-A , micro-A , timeout-B

// 10 

// setTimeout(() => {
//   console.log('outer-timer');
//   setTimeout(() => {
//     console.log('nested-timer');
//   }, 0);
// }, 0);

// setTimeout(() => {
//   console.log('second-timer');
// }, 0);

// console.log('sync');

// Output => sync , outer-timer , nested-timer , second-timer -> wrong

// 11
// setTimeout(() => {
//   console.log('timer-1');
//   Promise.resolve().then(() => {
//     console.log('micro-1');
//   });
// }, 0);

// setTimeout(() => {
//   console.log('timer-2');
//   Promise.resolve().then(() => {
//     console.log('micro-2');
//   });
// }, 0);

// console.log('sync');

// Output => sync , timer-1 , micro-1 , timer-2 , micro-2

// Promise.resolve().then(() => {
//   console.log('micro-first');
//   setTimeout(() => {
//     console.log('delayed-macro');
//   }, 0);
// });

// setTimeout(() => {
//   console.log('macro-first');
//   Promise.resolve().then(() => {
//     console.log('delayed-micro');
//   });
// }, 0);

// console.log('sync');

//Output => sync ,  micro-first , delayed-macro , macro-first , delayed-micro -> wrong

// 14
Promise.resolve(1)
  .then(val => {
    console.log('A:', val);
    return val + 1;
  })
  .then(val => {
    console.log('B:', val);
    throw new Error('fail');
  })
  .then(val => {
    console.log('C:', val);
  })
  .catch(err => {
    console.log('D:', err.message);
    return 99;
  })
  .then(val => {
    console.log('E:', val);
  });

  // Output => A:1 , B:2  , C:2 , fail , E: 99 - wrong

  // // 15

// function makeTask() {
//   return new Promise((resolve, reject) => {
//     reject();
//   });
// }

// let t = makeTask();

// t.then(() => {
//   console.log('step-1');
// })
//   .then(() => {
//     console.log('step-2');
//   })
//   .catch(() => {
//     console.log('caught');
//   })
//   .then(() => {
//     console.log('recovered');
//   })
//   .catch(() => {
//     console.log('caught-again');
//   });

// // 16

// function fetchData(success) {
//   return new Promise((resolve, reject) => {
//     if (success) resolve('200 OK');
//     else reject('404 Error');
//   });
// }

// fetchData(true)
//   .then(res => {
//     console.log('response:', res);
//     return fetchData(false);
//   })
//   .catch(err => {
//     console.log('error:', err);
//     return 'cached-data';
//   })
//   .then(data => {
//     console.log('using:', data);
//     return fetchData(true);
//   })
//   .catch(err => {
//     console.log('final-err:', err);
//   });

// // 17

// function run() {
//   return new Promise((resolve, reject) => {
//     console.log('begin');
//     resolve(10);
//     reject('error');
//     resolve(20);
//     console.log('end');
//   });
// }

// run()
//   .then(v => console.log(v + 1))
//   .catch(e => console.log(e));

// // 18

console.log('start');

const p8 = new Promise((resolve, reject) => {
  console.log('executor');
  resolve('RESULT');
  reject('ERR');
  resolve('RESULT-2');
  setTimeout(() => resolve('RESULT-3'), 0);
  console.log('executor-end');
});

setTimeout(() => console.log('slow-timer'), 100);
setTimeout(() => console.log('fast-timer'), 0);

console.log('sync-end');

p8.then(v => {
  console.log('then-A:', v);
}).then(v => {
  console.log('then-B:', v);
});

p8.then(v => {
  console.log('then-C:', v);
}).then(v => {
  console.log('then-D:', v);
});


// start
// execute 
// executer-end
// syncend
// Result
//



