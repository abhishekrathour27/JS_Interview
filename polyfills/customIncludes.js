const arr = [5, 9, 15, 77, 49];

// const res = arr.includes(16);
// console.log(res);

Array.prototype.customIncludes = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      return true;
    }
  }
  return false;
};

function callback(value) {
  return value === 16;
}

const result = arr.customIncludes(callback);
console.log(result);
