// Using one method after another. Order of execution will be from left to right.

let str = "   React JS   ";
console.log(str.trim().toUpperCase()); // "REACT JS"
console.log(str.trim().toUpperCase().indexOf("JS")); // 6
