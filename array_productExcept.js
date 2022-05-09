/*
https://www.youtube.com/watch?v=XkKmR7RANLY&list=PLrClazTqVpJmJOUmYf6wvP1m-ay1y7ui2&index=6
https://leetcode.com/problems/product-of-array-except-self/
*/


const productExceptSelf = function (nums) {
    const left = new Array(nums.length).fill(0);
    left[0] = 1;
    const right = new Array(nums.length).fill(0);
    right[right.length - 1] = 1;
    const result = new Array(nums.length).fill(0);
    for (let i = 1; i < nums.length; i++) {
        left[i] = nums[i - 1] * left[i - 1];
    }
    for (let i = right.length - 2; i >= 0; i--) {
        right[i] = nums[i + 1] * right[i + 1];
    }
    for (let i = 0; i < nums.length; i++) {
        result[i] = left[i] * right[i];
    }
    return result;
};

console.log(productExceptSelf([1, 2, 3, 4]));