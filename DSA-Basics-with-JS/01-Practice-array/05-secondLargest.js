// Find Second Largest Number in an Array
function findSecondLargest(arr) {
    let largest = -Infinity;
    let secondLargest = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > largest){
            secondLargest = largest;
            largest = arr[i];
        }
        else if(arr[i] > secondLargest){
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

const arr = [5, 2, 4, 10, 8, 3, 6];
const result = findSecondLargest(arr);
console.log(`Second Largest Number in array is ${result}`);