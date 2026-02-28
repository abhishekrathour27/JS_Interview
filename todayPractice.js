"Q1"; // => Guess the output

sayHello();

function sayHello() {
  console.log("Hello");
}

sayHi();

var sayHi = function () {
  console.log("Hi");
};

// Output => Hello , typeError

("Q2"); // => Curring "find this sum(2)(5)"

function sum(val1) {
  return function sum(val2) {
    return val1 + val2;
  };
}

const result = sum(2)(5);
console.log(result);

("Q3"); // => infinite curring to find add(1)(2)(3)(4)() = 10

function infiniteCurring(val1) {
  return function inner(val2) {
    if (!val2) {
      return val1;
    }
    return infiniteCurring(val1 + val2);
  };
}

const res2 = infiniteCurring(1)(2)(3)(4)();
console.log(res2);

("Q4"); // => write a callback hell code to print this in this order "dowload file" , "compress file" , "upload file"

function dowload(callback) {
  setTimeout(() => {
    console.log("Dowload file");
  }, 1000);
  callback();
}
function compress(callback) {
  setTimeout(() => {
    console.log("compress file");
  }, 2000);
  callback();
}
function upload() {
  setTimeout(() => {
    console.log("upload file");
  }, 3000);
}

dowload(() => {
  compress(() => {
    upload();
  });
});

("Q5"); // => using find() , find first even no which is > 20 in this [5,11,18,21,40,7]

const arr = [5, 11, 18, 21, 40, 7];

const findRes = arr.find((num) => num % 2 === 0 && num > 20);
console.log(findRes);

("Q6"); // => convert this aaray into square [1,2,3,4]

const arr2 = [1, 2, 3, 4];

const arr2res = arr2.map((num) => num * num);

console.log(arr2res);

("Q7"); // => using filter remove falsy value [0,1,false,2,"",3,null]

const falsyValue = [0, 1, false, 2, "", 3, null];

const removeFalsyValue = falsyValue.filter(Boolean);

console.log(removeFalsyValue);

("Q8"); // => find total price using reduce

const array = [{ price: 100 }, { price: 200 }, { price: 300 }];

const reduceRes = array.reduce((acc, num) => acc + num.price, 0);

("Q9"); // =>

const obj1 = {
  name: "Abhishek",
  person: {
    name: "Something",
  },
  pin: 123456,
};

console.log(obj1?.person?.no);

("Q10"); // Guess the output

console.log("Start");

Promise.resolve()
  .then(() => {
    console.log("P1");
  })
  .then(() => {
    console.log("P2");
  });

console.log("End");

// Output => start -> End -> p1 -> p2

"Q11" //

Promise.resolve(1)
.then((res)=>{
 console.log(res);
 return res + 1;
})
.then((res)=>{
 console.log(res);
 throw "Error";
})
.catch(err=>{
 console.log(err);
});

// Output => 1 -> 2 -> Error

console.log("A");

setTimeout(()=>{
 console.log("B");
},0);

Promise.resolve().then(()=>{
 console.log("C");
});

console.log("D");

//Output => A -> D -> C -> D
