/*
https://leetcode.com/problems/shortest-unsorted-continuous-subarray/
*/
const findUnsortedSub = (nums) => {
    let left = -1, right = -1, len = nums.length - 1;
    let max = nums[0], min = nums[len];
    for (let i = 1; i <= len; i++) {
        let s = nums[i], e = nums[len - i];
        s < max ? right = i : max = s
        e > min ? left = i : min = e
    }
    return Math.max(0, left + right - len + 1);
}
console.log(findUnsortedSub([2, 6, 4, 8, 10, 9, 15]));
// console.log(findUnsortedSub([1, 2, 3, 4]));
// console.log(findUnsortedSub([4, 3, 2, 1]));