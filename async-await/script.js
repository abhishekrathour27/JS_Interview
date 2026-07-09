const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const p1 = new Promise((res, rej) => {
    let status = "200";
    if (status === "200") {
      res("success");
    } else {
      rej("reject");
    }
  });

  p1.then((a) => {
    console.log(a);
  }).catch((b) => {
    console.log(b);
  });
});
