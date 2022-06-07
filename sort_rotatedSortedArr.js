/*
33. Search in Rotated Sorted Array
https://leetcode.com/problems/search-in-rotated-sorted-array/
https://www.youtube.com/watch?v=A7dT6UtWEhA&list=PLrClazTqVpJl1yRzqUmxrYO-KKiMvN7Pw&index=7
*/


const search = (nums, target) => {
    let l = 0;
    let r = nums.length - 1;
    while (l <= r) {
        let m = Math.floor(l + (r - l) / 2);
        if (nums[m] === target) return m;

        if (nums[l] <= nums[m]) {
            if (nums[l] <= target && target < nums[m]) {
                r = m - 1;
            } else {
                l = m + 1;
            }
        } else {
            if (nums[m] < target && target <= nums[r]) {
                l = m + 1;
            } else {
                r = m - 1;
            }
        }
    }
    return -1;
}

// console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
console.log(search([4, 5, 6, 7, 0, 1, 2], 3));
