// Write a function that returns the number of negative numbers in an array.

const negativeNumbers = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      console.log(arr[i]);
      count++;
    }
  }
  return `The number of negative numbers in the array is: ${count}`;
};

const arr = [5, -4, 0, 2, -8, 3, 10];

const result = negativeNumbers(arr);

console.log(result); 

