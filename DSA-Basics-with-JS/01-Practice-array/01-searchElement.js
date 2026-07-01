// Write a function that searches for an element in an array and returns its index if found, or -1 if not found.

function searchElement(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return i;
    }
  }
  return -1;
}

const arr = [5, 2, 4, 10, 6, 3, 9];

const result = searchElement(arr, 10);
console.log(result);

// searchElement(arr, 5); // Output: 0
// searchElement(arr, 3); // Output: 5
// searchElement(arr, 25); // Output: -1
