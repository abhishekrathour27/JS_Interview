//     When boilWater() is called, it returns a Promise object immediately.
//     The Promise constructor runs its executor   function: (resolve) => { ... }

//     Inside the executor, setTimeout is registered to run after 1000ms (1 second).
//     This timer is handled by the browser's Web APIs (or libuv in Node.js).

//     Meanwhile, JavaScript continues executing other code (non-blocking)
//     After 1000ms, the callback inside setTimeout (console.log("boil"), resolve()) is placed in the callback queue

//     When the call stack is clear, the event loop pushes the callback onto the call stack.

//     console.log("boil") runs.

//     Then resolve() is called — this tells the Promise: "we’re done".

//     The Promise transitions from pending to fulfilled.

//     Any .then() handlers attached to boilWater() will now execute


function boilWater() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Water boiled");
      res();
    }, 1000);
  });
}
function addTeaLeaves() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Tea leaves added");
      res();
    }, 2000);
  });
}
function addMilk() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Milk added");
      res();
    }, 3000);
  });
}
function teaServed() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Tea served");
      res();
    }, 4000);
  });
}

 // 🔗 Chaining Promises

boilWater()
  .then(() => addTeaLeaves())
  .then(() => addMilk())
  .then(() => teaServed())
  .catch((error) => {
    console.error("errors = ", error);
  });

  const p1 = new Promise((res, rej) => {
  let status = 204;
  if (status === 200) {
    res("i am resolve");
  } else {
    rej("i am rejected");
  }
});

p1.then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});
