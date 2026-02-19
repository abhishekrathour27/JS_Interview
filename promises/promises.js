const cart = ["shirt", "pant", "jeans"];

const prr = createOrder(cart);

prr.then((orderid)=>{
   console.log(orderid)
})

function createOrder(cart) {
  const promises = new Promise((res, rej) => {
    if (!cart) {
      const err = new Error("cart is not defined");
      rej(err);
    }

    const orderid = "12345";

    if (orderid) {
      res(orderid);
    }
  });
  return promises
}


