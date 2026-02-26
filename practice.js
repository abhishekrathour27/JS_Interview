// Q1 => 
 "A" // Because function declaration is hoisted so it can be access before inislization
 "Type error" // Because we trying to call undefined as a function or get undefined because that is a function exp.


 "Hoisting " = // Hoisting means if you want to access any variable or function before inislizing  is called hoisting

 "Memory creation" = // in first run js create memory space for all variable aur function where in variable let or const leave it as it is or var assign as undefined or function assign ass {}

 "Execution phase" = // In this face js assign value to all variable or function

// Q2 => 
  "Function" // Because the function didn't call 
  "Undefined"  // in this function called so the type of function is object

// Q3

 10 // it refer to current object so it take value 10  
 "Undefined" // and it does'nt have own this so it take while creation so

// Q4 

// Because it take a function as argument  , it return a function from inside it , it it can be assing into a variable or it can be store into a data structure

//Ex1 => 
    function hello (bye){
        return bye();
    }

    function bye(){
        console.log("bye");
    }

    const res = hello(bye);
  
     res();

// Ex2 => 

    const value = function (){
        console.log("object")
    }

    value();

// Ex3 => 

    function hey(){
        let a = 2;
        return function abc(){
            console.log(a)
        }
    }

    hey();

// Q5 => Not understadable

// Q6 => 
    "Callback"  // Callback function is used as an argument inside a another function

   // Ex=  
   function hello2(Callback){
      return Callback();
   }

   function bye2(){
    console.log("Byeee")
   }

   hello2(bye2);

   "HOF" // HOF also known as Higher order function . either it takes a function as argument or return a function inside it

   //Ex => 

    function hof (){
        return function hof2(){
            console.log("object")
        }
    }

// Q7 => 

    function base (val1){
        return function base2(val2){
             return function base3(val3){
                return val1 + val2 + val3;
             }
        }
    }

    const output = base(1)(2)(3);
    console.log(output);

// Q8 => 

    function infiniteCurring (val1){
        // 
        return function(val2){
             if(!val2){
                return val1;
             }
             return infiniteCurring(val1 + val2);
        }
    }

    console.log(infiniteCurring(1)(2)(3)(4)());

    // if user stop giving value that time infinite curring terminated 

// Q9 => 

    // Not accessable

// Q10 => 

 // var = undefined  because in memory insilization var inisilize as undefined 
 // let = reference error because in memory insilization it insilize as it is  or it is not hoisted so it give reference error.

 "Temporal dead zone " // between variable inisilization or assigning a value into a variable is call temporal dead zone

// Q11 => 

    // first log = 10 then x is insilize by 20 

// Q14 =>
    
    //after map  [2,4,6,8] => after filter [6,8] => after reduce 14

// Q15 => 
    // 1 , 3

// Q16 => 

  // Dont know
  
// Q18 => 
    // Start -> end -> promise -> timeout
   
    // call stack => where all js code excuted
    // microtask queue => it handle ansyncronose operation like promise not settimeout or other thing

// Q19 => 
    // 2 -> caught 
   // because it is not returning any thing so next then will not run.

// Q20 => 
    // D -> B -> A -> C



    

