// A callback is a function that is passed as an argument to another function and is executed later, usually after some task or event.
// 👉 Callback ka main purpose hota hai: "Hey, after you finish your job, call this function!"

// setTimeout(function(){
//   console.log("This is a callback function");
// },3000)

// A function is called a Higher-Order Function if it does either of the following:
// Takes a function as an argument ✅
// Returns a function from inside it  ✅
// 🔸 Doing even one of these is functionenough to be called a higher-order function.

// 2nd example when it return the fucntion

function greet() {
  return function hello() {
    console.log("hello world");
  };
}

//  greet()(); another method to call function which is inside in another function

const greetRef = greet();
greetRef();

// 2nd when takes a fucntion as an arguent

const arr = [1, 2, 3, 4, 5];

const newArr = arr.map((num) => num * 2);

console.log(newArr);// [ 2, 4, 6, 8, 10 ]
