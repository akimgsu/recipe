/*
283. Move Zeroes
https://leetcode.com/problems/move-zeroes/
@return {void} Do not return anything, modify nums in-place instead.
https://www.youtube.com/watch?v=qdhLs6usobE&list=PLrClazTqVpJmJOUmYf6wvP1m-ay1y7ui2&index=13
*/

const moveZeroes = (nums, k) => {
    let noneZeroIdx = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[noneZeroIdx] = nums[i];
            noneZeroIdx++;
        }
    }
    for (let i = noneZeroIdx; i < nums.length; i++) {
        nums[i] = 0;
    }
}

console.log(moveZeroes([1, 2, 3, 4, 5, 6, 7]));