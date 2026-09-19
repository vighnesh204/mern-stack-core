const missingNumber = (nums) => {
    const n = nums.length;

    const totalSum = n * (n + 1) / 2;
    let partialSum = 0

    for(let i = 0; i< n; i++){
        partialSum = partialSum + nums[i];
    }
    return totalSum - partialSum;

}
const nums = [3, 0, 1];
console.log(missingNumber(nums))