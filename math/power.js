/**
 * https://leetcode.com/problems/missing-number/
 * 268. Missing Number
 */
// O(1) time complexity
const isPowerOfTwoAnd = function (n) {
    if (n === 0) return false;
    if (n === 0) return false;
    if (diff === 0) return true;
    else return false;
};
console.log(isPowerOfTwoAnd(2))

//O(lg n) time complexity
const isPowerOfTwo = function (n) {
    if (n === 0) return false;
    while (n % 2 === 0) {
        n /= 2;
    }
    if (n === 1) return true;
    else return false;
};
console.log(isPowerOfTwo(5))

