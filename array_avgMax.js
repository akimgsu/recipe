/*
643. Maximum Average Subarray I
https://leetcode.com/problems/maximum-average-subarray-i/
https://www.youtube.com/watch?v=LQUZYf-hr6M&list=PLrClazTqVpJmJOUmYf6wvP1m-ay1y7ui2&index=24
*/
const findMaxAverage = (nums, k) => {
    let avg = -Infinity;
    for (let i = 0; i + k <= nums.length; i++) {
        const subTotal = nums.slice(i, i + k).reduce((acc, cur) => acc += cur, 0);
        const subAvg = subTotal / k;
        avg = subAvg > avg ? subAvg : avg;
    }
    return avg;
}
const findMaxAverageW = (nums, k) => {
    let max = -Infinity;
    let sofar = 0;
    let windowStart = 0;
    for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
        sofar += nums[windowEnd];
        if (windowEnd - windowStart === k - 1) {
            const avg = sofar / k;
            max = Math.max(max, avg);
            sofar -= nums[windowStart];
            windowStart++;
        }
    }
    return max;
}

console.log(findMaxAverageW([1, 12, -5, -6, 50, 3], 4));
