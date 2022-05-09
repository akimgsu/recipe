
/*
896. Monotonic Array https://leetcode.com/problems/monotonic-array/
https://www.youtube.com/watch?v=Ca2uzjuX7Sw&list=PLrClazTqVpJmJOUmYf6wvP1m-ay1y7ui2&index=4
An array is monotonic if it is either monotone increasing or monotone decreasing.
An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. 
An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].
Input: nums = [1,2,2,3]
Output: true
*/
const monotonic = (arr) => {
    if (nums.length < 1) return false;
    const same = nums[0] === nums[nums.length - 1];
    const increase = nums[0] < nums[nums.length - 1];
    if (same) {
        for (let i = 1; i < nums.length; i++) {
            if (nums[i - 1] !== nums[i]) return false;
        }
    } else if (increase) {
        for (let i = 1; i < nums.length; i++) {
            if (nums[i - 1] > nums[i]) return false;
        }
    } else {
        for (let i = 1; i < nums.length; i++) {
            if (nums[i - 1] < nums[i]) return false;
        }
    }
    return true;
}
console.log('monotonic', monotonic([1, 2, 2, 3]));
