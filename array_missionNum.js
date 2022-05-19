/*
268. Missing Number
https://leetcode.com/problems/missing-number/
https://www.youtube.com/watch?v=8rMNikLmheI&list=PLrClazTqVpJmJOUmYf6wvP1m-ay1y7ui2&index=14
*/

const missingNum = (nums) => {
    const gSum = (nums.length * (nums.length + 1)) / 2;
    const numsSum = nums.reduce((acc, el) => acc += el, 0);
    return gSum - numsSum;
}

console.log(missingNum([3, 0, 1]));