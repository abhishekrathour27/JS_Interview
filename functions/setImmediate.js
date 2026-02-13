// What is setImmediate()?
// setImmediate() is a Node.js-only function (not available in browsers) that allows you to execute a callback after the current event loop phase ends — before any timers like setTimeout() with 0ms.

 setTimeout(() => {
    console.log("hello guys")
}, 3000);

setImmediate(()=>{
 console.log("This is immediate section")
},4000)

