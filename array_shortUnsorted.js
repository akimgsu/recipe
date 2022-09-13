/*
581. Shortest Unsorted Continuous Subarray
https://leetcode.com/problems/shortest-unsorted-continuous-subarray/
*/
const findUnsortedSub = (nums) => {
    let left = -1;
    let right = -1;
    let len = nums.length - 1;
    let max = nums[0], min = nums[len];
    for (let i = 1; i <= len; i++) {
        let s = nums[i], e = nums[len - i];
        s < max ? right = i : max = s
        e > min ? left = i : min = e
    }
    return Math.max(0, left + right - len + 1);
}
// console.log(findUnsortedSub([2, 6, 4, 8, 10, 9, 15]));
// console.log(findUnsortedSub([1, 2, 3, 4]));
// console.log(findUnsortedSub([4, 3, 2, 1]));

/*
Brute force
*/
const findUnsoredSubB = (nums) => {
    const compare = [...nums];
    compare.sort((a, b) => a - b);
    const les = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== compare[i]) les.push(i);
    }
    return les.length > 0 ? les[les.length - 1] - les[0] + 1 : 0;
}
// console.log(findUnsoredSubB([2, 6, 4, 8, 10, 9, 15]));
// console.log(findUnsoredSubB([1, 2, 3, 4]));