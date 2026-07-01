// Write a function that returns the largest number in an array.

function largestNumber(arr) {
    let largest = arr[0];
    for (let i = 0; i < arr.length; i++) {
       if(arr[i] > largest){
        largest = arr[i];
       } 
    }
    return `Largest Number in array is ${largest}`
}

const arr = [5, 2, 4, 10, 8, 3, 6]

const result = largestNumber(arr);
console.log(result)