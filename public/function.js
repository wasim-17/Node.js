// Arrow Functions

// 1. Syntax: Arrow function expression (ES6)
const sayHello = () => {          // Defines a function using arrow syntax
  console.log(`Hello!, Wasim`);
};

sayHello();                       // Invokes the function



// Immediately Invoked Function Expression (IIFE)
// Executes immediately after definition
const sayHi = (() => {            // Arrow function wrapped in parentheses
  console.log(`Hi!, Wasim`);
})();                             // Function is executed right away



// setTimeout using arrow function callback
// Schedules a function to run after a delay
setTimeout(() => {                // Arrow function passed as callback
  console.log("Delayed for 1 second.");
}, 1000);                         // 1000ms delay


