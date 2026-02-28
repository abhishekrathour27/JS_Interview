// Def => Polyfills are the small peice of code which provides morden
//  javascript functionality to the older browser that does'not natively support is

// Map =>

// const res = arr.map((item, index) => {
//   return item * 2;
// });

const arr = [1, 2, 3, 4];
const arr2 = ["a", "b", "c", "d"];
const arr3 = [{ name: "abhi" }];

Array.prototype.myMap = function (callback) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(callback(this[i]));
  }
  return newArr;
};

function callback(incomingValue) {
  return incomingValue * incomingValue;
}

const result = arr.myMap(callback);
const result2 = arr2.myMap(callback);
const result3 = arr3.myMap(callback)

console.log(result , result2 , result3)
