/*
977. Squares of a Sorted Array
https://leetcode.com/problems/squares-of-a-sorted-array/submissions/
https://www.youtube.com/watch?v=mwDKqAVVr6c&list=PLrClazTqVpJmJOUmYf6wvP1m-ay1y7ui2&index=7
*/
const sortedSquares = (nums) => {
    const result = nums.map(e => e * e);
    return result.sort((a, b) => a - b);
}
const sortedSquares2 = (nums) => {
    let left = 0;
    let right = nums.length - 1;
    let resultIdx = nums.length - 1;

    const result = Array(nums.length).fill(0);
    while (left <= right) {
        const leftVal = Math.pow(nums[left], 2);
        const rightVal = Math.pow(nums[right], 2);

        if (leftVal > rightVal) {
            result[resultIdx] = leftVal;
            left++;
        } else {
            result[resultIdx] = rightVal;
            right--;
        }
        resultIdx--;
    }
    return result;
}

console.log(sortedSquares([-4, -1, 0, 3, 10]));
