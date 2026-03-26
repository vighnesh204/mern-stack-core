/*{
🚀 How do you make two module work together in Node.js?

=> require() function is used to import one module into another.
=> You can export functions, objects, or values from one module and then require that module in another file to use its functionality.
}*/

require("./newFile"); // execute first 
const obj = require("./calculateSum"); 

var a = 5;
var b = 10;

obj.calculateSum(a, b);

console.log(obj.x)
console.log(globalThis === global);