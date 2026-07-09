const user1 = {
  firstName: "Abhi",
  lastName: "singh",
};
const user2 = {
  firstName: "Rishu",
  lastName: "singh",
};

function printName(thirdParameter) {
  console.log(`${this.firstName}  ${this.lastName} from ${thirdParameter}`);
}

printName.call(user1, "Mumbai");

printName.apply(user2 ,["delhi"]);

const result = printName.bind(user2 , "chennai");
result();

// call , apply and bind are the special functions that helps us to execute a function imediatly with the given this value
// the only way by which different is 
