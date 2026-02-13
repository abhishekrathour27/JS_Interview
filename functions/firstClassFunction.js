// 1.first class fucntion are the fucntion that are treated as any other varibles
// 2.we can pass it to a fucntion as a an argiment
// 3.we can retuen it from the fucntion
// 4.asin it an other valrible
// 5.and store them in data structure like array or objects

// 1) passing as an argument
const fc = () => {
  console.log("Hello");
};

function firstClass(fc) {
  return fc;
}

const fcRef = firstClass(fc);
fcRef();

//2) assigning it to some other variable 

const fun = function () {
  console.log("Hello world");
};


//3) returned from another fucntion
function hello(){
    let a=10;
    function b(){
        console.log(a);
    }
    return b;
}

const bRef=hello();
bRef();

//4) store then in data structure called array
const sayHello = () => console.log("Hello");
const sayHi = () => console.log("Hi");
const sayBye = () => console.log("Bye");

const greetings = [sayHello, sayHi, sayBye];

greetings[0](); // Hello
greetings[1](); // Hi
greetings[2](); // Bye
