// Q1 What is Hoisting ?
// => Hoisting is phenoemena in Javascript by which you ca access this variables and functions even before you have initialized it or you can put some value in it 
// => you can access it without any error 

// Q1 What is Hoisting ?

// 🚀 "Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their scope during the memory creation phase of the Execution Context — before any code actually runs. var variables are accessible before their declaration line but return undefined, while let and const remain in a 'Temporal Dead Zone' and throw a ReferenceError if accessed before their actual declaration."

console.log(x); // undefined
console.log(getName); // [Function: getName]
console.log(y); // ❌ ReferenceError: Cannot access 'y' before initialization

var x = 7;
let y = 10;
function getName() {
  console.log("Namaste JavaScript");
}

// Q1. What is Temporal Dead Zone (TDZ)?
// Dekho, pichli baar humne bola tha ki let/const bhi hoist hote hai — lekin ek "locked" state mein rehte hai. Chalo ab is lock ko thoda aur deeply samajhte hai.
// Jab JavaScript Memory Creation Phase mein let/const variables ke liye memory allocate karta hai, unko undefined nahi deta (jaise var ko deta hai). Balki unhe ek special uninitialized state mein daal deta hai.

// Temporal Dead Zone = wo time-period jo shuru hota hai scope ke start hone se, aur khatam hota hai jab variable ki actual declaration line execute ho jaati hai. Isi period ke andar agar variable ko access karne ki koshish karo, JavaScript ReferenceError phek deta hai.

// "Temporal" isliye bola gaya hai kyunki ye time se related hai — position se nahi.

// javascript:
console.log(a); // ❌ ReferenceError: Cannot access 'a' before initialization
let a = 5;
console.log(a); // ✅ 5, ab TDZ khatam ho gaya


// Interview mein bologe:

// "TDZ is the time span between the start of a variable's scope and its actual initialization line, during which accessing the variable throws a ReferenceError. It's JavaScript's way of enforcing safer variable usage compared to var's silent undefined behavior."

// Q2. Function Declaration vs Function Expression — Hoisting Alag Kaise Hoti Hai?
// Ye interviewer ka favorite trap hai, isliye dhyaan se samjho.
// Function Declaration — poora function body hi memory phase mein copy ho jaata hai. Matlab tum usko use karne se pehle bhi call kar sakte ho, bina kisi problem ke.

// javascript

sayHi(); // ✅ "Hi!" — chal gaya
function sayHi() {
  console.log("Hi!");
}
// Function Expression — ye ek variable (var/let/const) mein function assign karne jaisa hai. Isliye iska hoisting behavior us variable jaisa hota hai, function jaisa nahi.

javascriptsayHello(); // ❌ TypeError: sayHello is not a function
var sayHello = function () {
  console.log("Hello!");
};

// Kya hua yaha? Memory phase mein sayHello ke liye jagah bani, undefined daal diya gaya (kyunki var hai). Jab call kiya gaya us line se pehle, JS ne dekha sayHello abhi undefined hai, aur undefined toh function hai hi nahi — isliye TypeError.


// Interview mein bologe:

// "Function declarations are fully hoisted with their body, so they can be invoked before their definition. Function expressions are hoisted only as per their variable type (var/let/const) — so a var-based expression is undefined before assignment, causing a TypeError if called early."



// Q2. Difference between var, let, and const

// var — sabse purana, sabse "loose". Function ke andar ho toh function-scoped, warna globally attach ho jaata hai. Isko baar-baar redeclare bhi kar sakte ho, koi rok-tok nahi.

// let — thoda "disciplined". Block {} ke andar hi simit rehta hai. Redeclare nahi kar sakte, but reassign kar sakte ho.

// const — sabse "strict". Block scoped hai, and ek baar value assign karne ke baad, reference change nahi kar sakte.

// javascript

{
  var a = 10;
  let b = 20;
  const c = 30;
}
console.log(a); // 10 ✅ (var block ke bahar bhi accessible)
console.log(b); // ❌ ReferenceError
console.log(c); // ❌ ReferenceError

// Ab ek cheez jo 90% fresher galat samajhte hai — const ka matlab "immutable" nahi hota. const sirf binding ko lock karta hai, value ko nahi.

// javascript:
const user = { name: "Akshay" };
user.name = "Saini"; // ✅ ye chalega, object mutate ho sakta hai
user = {}; // ❌ ye nahi chalega, reference change nahi kar sakte

// Interview mein bologe:
// "var is function-scoped and allows redeclaration; let and const are block-scoped and don't allow redeclaration. const additionally prevents reassignment of the binding itself — but it does NOT make the value immutable, so objects and arrays declared with const can still have their internal properties mutated."


// Q3. Difference between == and ===

// Chalo isko ek line se shuru karte hai jo tumhe hamesha yaad rakhni hai:

// == pehle "convert" karta hai, fir "compare" karta hai. === seedha "compare" karta hai, koi convert nahi.

// Ye conversion wali cheez ek fancy naam se jaani jaati hai — Type Coercion. JavaScript dono values ko ek common type mein la ke fir unhe compare karta hai jab tum == use karte ho.

// javascript

console.log(5 == "5");    // true  (string "5" number 5 mein convert hui)
console.log(5 === "5");   // false (type match nahi, string vs number)
console.log(0 == false);  // true  (false, 0 mein convert hua)
console.log(0 === false); // false

// Ye coercion kabhi kabhi bohot weird results deta hai — isiliye industry mein rule hi bana diya gaya hai:


// Always use ===, never use == (except jab tum jaan-boojh kar null aur undefined dono ko ek saath check karna chahte ho: value == null)



// Interview mein bologe:
// "== performs type coercion before comparison, converting operands to a common type, while === compares both value and type strictly without coercion. Modern JS style guides (Airbnb, industry standard) recommend always using === to avoid unpredictable bugs from implicit conversions."

// Bonus trap jo interviewer poochega: [] == false → true hai kyunki array pehle empty string mein convert hota hai, fir 0 mein — aur false bhi 0 ban jaata hai. Isi wajah se seniors bolte hai — "never trust == with objects/arrays."