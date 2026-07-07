// write a function that takes a number as input and returns the count of digits in that number.

// Math.floor() method returns the largest integer less than or equal to a given number.
// Math.floor() method rounds a number DOWNWARDS to the nearest integer, and returns the result.
// Example: Math.floor(4.9) returns 4, Math.floor(4.5) returns 4

// Math.round() method returns the value of a number rounded to the nearest integer.
// Example: Math.round(4.9) returns 5, Math.round(4.5) returns 5, Math.round(4.4) returns 4

// Math.ceil() method returns the smallest integer greater than or equal to a given number.
// Example: Math.ceil(4.1) returns 5, Math.ceil(4.5) returns 5

function countDigit(n){
    if(n === 0) return 1; // Edge case for 0

    n = Math.abs(n); // Handle negative numbers
    let count = 0;
    while(n > 0){
        n = Math.floor(n / 10); 
        count++;
    }
    return count;
}

let num = 12345;

const result = countDigit(num);
console.log(result)