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
