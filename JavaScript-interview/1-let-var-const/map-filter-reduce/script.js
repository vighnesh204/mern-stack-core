// MAP, FILTER & REDUCE Interview Questions

// Question 1 : Array.map()

const nums = [1, 2, 3, 4];

const multiplyThree = nums.map((num, i, arr) => num * 3); // cb can take num, index and array
console.log(multiplyThree);



// Question 2 : Array.filter()

const nums = [1, 2, 3, 4];

const moreThanTwo = nums.filter((num, i, arr) => num > 2 === 0);
console.log(moreThanTwo);



// Question 3 : Array.reduce()

const nums = [1, 2, 3, 4];

const sum = nums.reduce((acc, curr, i, arr) => {
  return acc + curr;
}, 0);

console.log(sum); // 10



