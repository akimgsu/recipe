/*
912. Sort an Array 
https://leetcode.com/problems/sort-an-array/#
https://www.youtube.com/watch?v=8drJOS7Yeho&list=PLrClazTqVpJl1yRzqUmxrYO-KKiMvN7Pw
Given an array of integers nums, sort the array in ascending order.
Input: nums = [5,1,1,2,0,0]
Output: [0,0,1,1,2,5]
*/


// make tree o(nlogn) = t, o(n) = s
const merge = (nums, nums2) => {
    const result = [];
    let i = 0;
    let j = 0;
    while (i < nums.length && j < nums2.length) {
        if (nums[i] <= nums2[j]) {
            result.push(nums[i]);
            i++;
        } else {
            result.push(nums2[j]);
            j++;
        }
    }
    while (i < nums.length) {
        result.push(nums[i]);
        i++;
    }
    while (j < nums2.length) {
        result.push(nums2[j]);
        j++;
    }
    return result
}

const mergedSort = (nums) => {
    if (nums.length <= 1) return nums;
    let mid = Math.floor(nums.length / 2);
    let left = mergedSort(nums.slice(0, mid));
    let right = mergedSort(nums.slice(mid));

    return merge(left, right);
}

console.log(mergedSort([5, 1, 1, 2, 0, 0]));