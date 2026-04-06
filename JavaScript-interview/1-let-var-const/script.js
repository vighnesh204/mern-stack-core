// var vs let vs const
// Scope
// Scope is a certain region of a program where a defined variable can be recognized and beyond that it cannot be recognized.
// In JavaScript, there are three types of scope: global scope, function scope, and block scope.
// Variables declared outside of any function or block have global scope, while variables declared inside a function or block have local scope.

// var is function-scoped, which means that it is only accessible within the function in which it is declared. If a variable is declared with var outside of any function, it has global scope and can be accessed from anywhere in the code. However, if a variable is declared with var inside a function, it is only accessible within that function and cannot be accessed from outside of it.

var a = 5;
console.log(a); // 5

{
    var b = 5;
    // console.log(b); // 5
}
console.log(b); // 5 - var is not block-scoped, it is function-scoped, so it can be accessed outside of the block as well

// let

{
    let a = 5;
    console.log(a); // 5
}
// console.log(a); // ReferenceError: a is not defined - let is block-scoped, so it cannot be accessed outside of the block

// const
{
    const a = 5;
    console.log(a); // 5
}
// console.log(a); // ReferenceError: a is not defined - const is also block-scoped, so it cannot be accessed outside of the block

// var can be re-declared and updated
// let can be updated but not re-declared
// const cannot be updated or re-declared

// var is function-scoped, let and const are block-scoped

// variable Shadowing
// Variable shadowing is a phenomenon in which a variable declared within a certain scope (e.g., a function or block) has the same name as a variable declared in an outer scope. In such cases, the inner variable "shadows" the outer variable, meaning that the inner variable takes precedence over the outer variable within its scope.

const test = () => {
    let a = "React";

    if(true){
        let a = "JavaScript";
        console.log(a); // JavaScript - the inner variable shadows the outer variable
    }
    console.log(a); // React - the outer variable is still accessible outside of the block
}
test(); // yha pr dono variables ka scope alag hai, isliye dono variables apne apne scope mein accessible hai
// output will be:
// JavaScript
// React

// var ke case mein agar humne var a = "React" declare kiya hota to uske baad var a = "JavaScript" declare karne par pehle wala variable overwrite ho jata, isliye var mein variable shadowing nahi hoti hai

// 🚀 Illegal Shadowing
// if we try to shadow var variable using let or const, it will work because let and const are block-scoped, but if we try to shadow let or const variable using var, it will not work because var is function-scoped and it will overwrite the outer variable
// agr hmne try kiya to it is known as illegal shadowing and it will throw an error

function test2(){
    var a = "React";
    // let b = "TailwindCSS";
    if(true){
        let a = "JavaScript";
        // var b = "Bootstrap";
        console.log(a); // JavaScript - the inner variable shadows the outer variable
        console.log(b); // Bootstrap - var is function-scoped, so it overwrites the outer variable
    }
}
test2(); 
// yha pr we try to shadow var variable using let and it works absolutely fine, but when we try to shadow let variable using var it going to give us an error that is b is already declared in the upper scope, so it is illegal shadowing and it will throw an error
// output will be:
// JavaScript
// Uncaught SyntaxError: Identifier 'b' has already been declared

// Declaration
// var

var a;
var a;
// we can redeclare it as many times as we want

// let

let a;
let a; // SyntaxError: Identifier 'a' has already been declared - we cannot redeclare a variable declared with let

let b;
{
    let b; // we can declare a variable with the same name in a different block scope
}
// it is also known as variable shadowing, where the inner variable shadows the outer variable

// const

// const a;
// const a; SyntaxError: Missing initializer in const declaration - we cannot redeclare a variable declared with const and we also need to initialize it at the time of declaration

// we need to provide some value when we declare a variable with const, otherwise it will throw an error that is Missing initializer in const declaration 
const b = 5;

// let and const cannot be redeclared in the same scope, but they can be declared in different scopes. var can be redeclared in the same scope, but it is not recommended to use var because it can lead to bugs and confusion in the code.

// Re-Initialization
// var
var a = 5;
a = 6; // we can reassign a new value to a variable declared with var

// let
let b = 5;
b = 6; // we can reassign a new value to a variable declared with let

// const
const c = 5;
c = 6; // TypeError: Assignment to constant variable. - we cannot reassign a new value to a variable declared with const
// basically var and let be updated but const cannot be updated, it is constant and it cannot be changed once it is assigned a value