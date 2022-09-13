/*
https://leetcode.com/problems/minimum-size-subarray-sum/ 209. Minimum Size Subarray Sum
slinding only use positive nums
*/
const minSubArrayLen = (nums, t) => {
    let d = Infinity;
    let l = 0;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        while (sum >= t) {
            d = Math.min(d, i - l + 1);
            sum -= nums[l];
            l += 1;
        }
    }
    return d === Infinity ? 0 : d;
}
console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));