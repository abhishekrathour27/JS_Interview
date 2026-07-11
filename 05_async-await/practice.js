async function getString() {
  return "Frontend Developer";
}

// const result = getString();
// console.log(result)

async function main() {
  const value = await getString();   // await unwraps the Promise
  console.log(value);                // Frontend Developer
}

main();