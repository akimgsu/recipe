/*
912. Sort an Array (merging sort or concur and divided )
https://leetcode.com/problems/sort-an-array/#
https://www.youtube.com/watch?v=RUUTazjpFWQ&list=PLrClazTqVpJl1yRzqUmxrYO-KKiMvN7Pw&index=4
*/

const mergingHelper = (arr, nums2) => {
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
const mergedSort = (arr) => {
    if (arr.length <= 1) return nums;
    let mid = Math.floor(arr.length / 2);
    let left = mergedSort(arr.slice(0, mid));
    let right = mergedSort(arr.slice(mid));
    // console.log('left:::', left, 'end');
    // console.log('right:::', right, 'end');
    return mergingHelper(left, right);
}



console.log(mergedSort([6, 5, 4, 3, 2, 1]));
// console.log(mergedSort([5, 1, 1, 2, 0, 0]));