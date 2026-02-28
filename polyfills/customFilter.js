const arr = [1, 2, 3, 4];

// const res = arr.filter((item)=> item > 2 );
// console.log(res);

Array.prototype.customfilter = function (callback) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback([this[i]])) {
      newArr.push(this[i]);
    }
  }
  return newArr;
};

function callback(value) {
  return value > 2 ;
}

const result = arr.customfilter(callback);
console.log(result);
