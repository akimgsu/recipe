/*
189. Rotate Array
https://leetcode.com/problems/rotate-array/
@return {void} Do not return anything, modify nums in-place instead.
https://www.youtube.com/watch?v=NNkSsmZYU7s&list=PLrClazTqVpJmJOUmYf6wvP1m-ay1y7ui2&index=12
*/
// var rotate_failed = function (nums, k) {
//     k = k % nums.length;
//     for (let i = 0; i < k; i++) {
//         const lastE = nums.pop();
//         nums.unshift(lastE);
//     }
// };
const reverseNums = (nums, s, e) => {
    while (s < e) {
        [nums[s], nums[e]] = [nums[e], nums[s]];
        s++;
        e--;
    }
}

const rotate = (nums, k) => {
    k = k % nums.length;
    nums.reverse();
    reverseNums(nums, 0, k - 1);
    reverseNums(nums, k, nums.length - 1);
}

console.log('merge', rotate([1, 2, 3, 4, 5, 6, 7], 3));