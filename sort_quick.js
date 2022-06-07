/*
912. Sort an Array 
https://leetcode.com/problems/sort-an-array/#
https://www.youtube.com/watch?v=8drJOS7Yeho&list=PLrClazTqVpJl1yRzqUmxrYO-KKiMvN7Pw
Given an array of integers nums, sort the array in ascending order.
Input: nums = [5,1,1,2,0,0]
Output: [0,0,1,1,2,5]
*/


// make tree o(nlogn) = t, o(n) = s
// quick sort (povot) > partitioning
const pivot = (nums, left, right) => {
    let p = right;
    let j = left;
    let i = left - 1;
    while (j <= p) {
        if (nums[j] < nums[p]) {
            i++;
            [nums[i], nums[j]] = [nums[j], nums[i]];
            j++;
        } else {
            j++;
        }
    }
    i++;
    [nums[i], nums[p]] = [nums[p], nums[i]];
    return i;
}


const sortQuick = (nums, left = 0, right = nums.length - 1) => {
    if (left < right) {
        let pIdx = pivot(nums, left, right);
        sortQuick(nums, left, pIdx - 1);
        sortQuick(nums, pIdx + 1, right);
    }
    return nums;
}

console.log(sortQuick([5, 1, 1, 2, 0, 0]));