/*
1. Two Sum https://leetcode.com/problems/two-sum/
https://www.youtube.com/watch?v=mq6ZQv_apmc&list=PLrClazTqVpJmJOUmYf6wvP1m-ay1y7ui2
Given an array of integers nums and an integer target, return indices of the two numbers 
such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
*/
/*
var twoSum = function(nums, target) {
    const hash = {}
    for(let i = 0; i < nums.length; i++){
        const val = nums[i];
        hash[val] = i;
    }
    for(let i = 0; i < nums.length; i++){
        const pk = target - nums[i];
        if(hash[pk] && hash[pk] !== i){
            return [i, hash[pk]];
        }
    }
    
};
*/

const twoSum = (nums, target) => {
    const hash = {}
    for (let i = 0; i < nums.length; i++) {
        hash[nums[i]] = i;
    }
    for (let i = 0; i < nums.length; i++) {
        const key = target - nums[i];
        if (hash[key] && hash[key] !== i) {
            return [i, hash[key]];
        }
    }
}
const twoSum2 = (nums, t) => {
    const hash = nums.reduce((p, v, i) => ({ ...p, [v]: i }), {});
    for (let i = 0; i < nums.length; i++) {
        let pk = t - nums[i];
        if (hash[pk] && hash[pk] !== i) {
            return [i, hash[pk]];
        }
    }
}

console.log(twoSum2([15, 2, 7, 11], 9));



