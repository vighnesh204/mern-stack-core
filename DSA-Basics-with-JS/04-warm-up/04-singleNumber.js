const singleNumber = (nums) => {
    let hash = {};
    for (let i = 0; i < nums.length; i++) {
        if(!hash[nums[i]]){
            hash[nums[i]] = 1;
        }else{
             hash[nums[i]]++;
        }
    }
    for (let i = 0; i < nums.length; i++){
        if(hash[nums[i]] == 1){
            return nums[i];
        }
    }
}

console.log(singleNumber([4,1,2,1,2])); // Output: 4