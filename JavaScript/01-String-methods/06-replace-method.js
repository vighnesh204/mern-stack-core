// replace 
// Searches a value in a string and returns a new string with value replaced

let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "React JS");
console.log(newText); // Output: Please visit React JS!

let str = "reactreactreact";
let newStr = str.replace("react", "React JS");
console.log(newStr); // Output: React JSreactreact

// first occurrence of the value is replaced. To replace all occurrences, use a regular expression with the global flag (g)
let str2 = "reactreactreact";
let newStr2 = str2.replace(/react/g, "React JS");
console.log(newStr2); // Output: React JSReact JSReact JS