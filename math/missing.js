/**
 * https://leetcode.com/problems/missing-number/
 * 268. Missing Number
 */

const missingNumXor = (nums) => {
    let totalXor = 0;
    for (let i = 0; i < nums.length + 1; i++) {
        totalXor ^= i;
    }
    for (const n of nums) {
        totalXor ^= n;
    }
    return totalXor;
}
console.log(missingNumXor([3, 0, 1]));

const missingNumSet = (nums) => {
    const s = new Set();
    for (let i = 0; i <= nums.length; i++) {
        s.add(i);
    }
    for (const n of nums) {
        s.delete(n);
    }
    return [...s][0];
}
console.log(missingNumSet([3, 0, 1]));

const missingNumber = function (nums) {
    const gSum = (nums.length * (nums.length + 1)) / 2;
    const numsSum = nums.reduce((acc, el) => acc += el, 0);
    return gSum - numsSum;
};
console.log(missingNumber([3, 0, 1]));