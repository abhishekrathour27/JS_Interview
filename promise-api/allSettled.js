const p1 = new Promise((resolve,reject)=>{
   setTimeout(()=>{
     resolve("p1 Success")
   },3000)
})
const p2 = new Promise((resolve,reject)=>{
   setTimeout(()=>{
     reject("p2 rejected")
   },1000)
})
const p3 = new Promise((resolve,reject)=>{
   setTimeout(()=>{
     resolve("p3 Success")
   },2000)
})


Promise.allSettled([p1,p2,p3])
.then((res)=>{
  console.log(res)
})
.catch((rej)=>{
  console.log(rej)
})





// success jo hai vo 3 sec ke baadh he aata hai sab ka wait karta hai

// failure but agar p2 fail hojat ahai to vo 1 sec pe he reply de deta hai kyuke vo error aagay us array of promise me then vo kise ka wait nhi karta hai agar 2 sec baadh hoga to 2 sec baadh error aayega

// 1. Promise.all([])
// Waits for all promises to fulfill, and returns an array of results.
// If any promise rejects, it immediately rejects with that error.

// 2. Promise.race([])
// Settles (resolve or reject) as soon as the first promise settles, and returns that result.

// 3. Promise.allSettled([])
// Waits for all promises to settle, then returns an array of objects showing each promise's status and value/reason.

//  4. Promise.any([])
// Returns the first fulfilled promise.
// If all promises reject, then it throws an AggregateError.