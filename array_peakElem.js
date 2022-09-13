/*
https://www.youtube.com/watch?v=SjDuYZ1RR0s&list=PLrClazTqVpJmJOUmYf6wvP1m-ay1y7ui2&index=5
https://leetcode.com/problems/find-peak-element/ 162. Find Peak Element
*/

const findPeakElement = function (nums) {
    if (nums.length === 1) return 0;
    if (nums[0] > nums[1]) return 0; // error----
    if (nums[nums.length - 1] > nums[nums.length - 2]) return nums.length - 1;

    for (let i = 0; i < nums.length - 2; i++) {
        let left = nums[i];
        let mid = nums[i + 1];
        let right = nums[i + 2];
        if (mid > left && mid > right) {
            return i + 1;
        }
    }
};
const findPeakElement2 = function (nums) {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] > nums[mid + 1]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
};

console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]));