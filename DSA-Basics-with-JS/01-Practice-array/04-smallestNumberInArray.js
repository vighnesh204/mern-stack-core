// Write a function that returns the smallest number in an array.
function findSmallestNumber(arr) {
    let smallest = arr[0];
    // let smallest = Infinity; // Alternative way to initialize smallest number
    // let smallest = Math.min(...arr); // Alternative way to find the smallest number
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return smallest;
}

const arr = [5, 2, 4, 10, 8, 3, 6];
const result = findSmallestNumber(arr);
console.log(`Smallest Number in array is ${result}`);
