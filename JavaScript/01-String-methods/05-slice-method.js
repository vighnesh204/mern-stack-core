// slice
// Returns a part of the original string as a new string, without modifying the original string.

// str.slice(startIndex)
// endIndex will be the length of the string if not provided. It will return a new string from startIndex to end of the string.

// str.slice(startIndex, endIndex)
// in this endIndex is non inclusive, means it will not include the character at endIndex position in the new string.

// str.slice(-n) = str.slice(str.length - n)


let str = "ILoveProgramming"; 
console.log(str.slice(5)); // "Programming"
console.log(str.slice(1, 5)); // "Love"
console.log(str.slice(-11)); // "Programming" // 16 - 11 = 5