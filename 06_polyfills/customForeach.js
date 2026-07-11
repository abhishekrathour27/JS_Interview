const arr = [2, 5, 7, 1, 6];

// arr.forEach((num) => {
//   console.log(num * 2);
// });

Array.prototype.customForeach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

function callback(value) {
  console.log(value * value);
}

arr.customForeach(callback);
