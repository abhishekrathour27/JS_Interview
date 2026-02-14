let student = {
  name: "Rohit",
  address: {
    city: "Mumbai"
  }
};

console.log(student.address?.hello)
// Yeh error nahi dega, kyunki address object exist karta hai,
// bas uske andar hello property nahi hai → so result undefined.

let student2 = {
  name: "Rohit"
};


// bina optional chaining:
console.log("this is the working of the comodity right now at here ",student2?.address?.city); 
// ❌ Error: Cannot read properties of undefine