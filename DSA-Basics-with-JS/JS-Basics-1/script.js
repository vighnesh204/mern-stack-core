/* 
- functions
- if / else
- loops
    - for 
    -while
*/

// Function with return value
function add(a, b) {
    return a + b;
}

// Core intrinsic properties or core intrinsic values of functions are we can reuse them, we can pass parameters to them and they can return values.

// Functions are kind of like a black box, we give them some input and they give us some output.no matter what is inside the function 

/**
 * Core Intrinsic Properties of Functions

Functions are one of the most fundamental building blocks in JavaScript.

The core intrinsic properties of functions are:

Reusability
A function allows us to write a piece of logic once and use it multiple times wherever needed.
Parameterization
Functions can accept input in the form of parameters, which makes them dynamic and flexible.
Returnability
Functions can process input and return some output/value back to the caller.
Abstraction
Functions hide implementation details and expose only necessary behavior.

Think of a function as a black box.

You give some input
Internally, some computation happens
You receive output

You don’t always need to know how the function works internally; you only need to understand:

What input it takes
What output it gives

That is the beauty of abstraction.

Example:

function add(a, b) {
    return a + b;
}

const result = add(10, 20);
console.log(result); // 30

Here:

10 and 20 are inputs
Function performs computation internally
30 is returned as output
Fundamental Thought

A function is a reusable, parameterized, abstract unit of execution that takes input, processes it, and optionally returns output.

This is why functions are powerful — they help us write modular, maintainable, and scalable code.
 */