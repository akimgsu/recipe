/*
912. Sort an Array https://leetcode.com/problems/sort-an-array/#
https://www.youtube.com/watch?v=8drJOS7Yeho&list=PLrClazTqVpJl1yRzqUmxrYO-KKiMvN7Pw
Given an array of integers nums, sort the array in ascending order.
Input: nums = [5,1,1,2,0,0]
Output: [0,0,1,1,2,5]
*/
const bubbleSort = (nums) => {
    let swap = true;
    let count = 0;
    while (swap) {
        swap = false;
        for (let i = 0; i < nums.length - count; i++) {
            let j = i + 1;
            if (nums[i] > nums[j]) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
                swap = true;
            }
        }
        count++;
    }
}
const selectingSort = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        let minIdx = i;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[minIdx]) {
                minIdx = j;
            }
        }
        [nums[i], nums[minIdx]] = [nums[minIdx], nums[i]];
    }
    return nums;
}
const insertionSort = (nums) => {
    for (let i = 1; i < nums.length; i++) {
        let j = i;
        while (j > 0 && nums[j] < nums[j - 1]) {
            [nums[j], nums[j - 1]] = [nums[j - 1], nums[j]];
            j--;
        }
    }
    return nums;
}
