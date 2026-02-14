// if we want to execute the fucntion only once in a code then taht case of senario we use the iife fcuntion
// it doesnt polutes the global scope just because evverthing is inside the fucntin itself it has no matter with the other
// varibles doesnt takes memeory after execution as garbage collector removes automatically once it work is done
// we cannot call it more then once in ouer code

(function hello() {
  console.log("This is iife function");
})(); // IIFE => imediately invoked function expression

function greet() {
  console.log("This is normal function");
}
greet();

import React, { useEffect, useState } from "react";
function app() {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async function fetchData() {
      try {
        const response = await fetch("https://api.example.com/data");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("error fetching data", error);
      }
    });
  }, []);

  return (
    <div>
      <h1>API Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default app;
