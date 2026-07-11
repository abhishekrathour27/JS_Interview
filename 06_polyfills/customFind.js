const arr = [
  { id: 1, name: "Abhi" },
  { id: 2, name: "Rohan" },
  { id: 1, name: "Ram" },
];

const res = arr.find((num) => num.id === 1);
// console.log(res);

Array.prototype.customFind = function (callback) {
  let res;
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      return (res = this[i]);
    }
  }
  return res;
};

function callback(value) {
  return value.id === 1;
}

const result = arr.customFind(callback);
console.log(result)
