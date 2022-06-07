/*
442. Find All Duplicates in an Array
https://leetcode.com/problems/find-all-duplicates-in-an-array/
https://www.youtube.com/watch?v=PGjb8X4g7V8&list=PLrClazTqVpJl1yRzqUmxrYO-KKiMvN7Pw&index=10
*/
const findDuplicatesHash = (nums) => {
    const hash = {};
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        if (!hash[nums[i]]) {
            hash[nums[i]] = 1;
        } else {
            hash[nums[i]] += 1;
        }
    }
    for (let item in hash) {
        if (hash[item] === 2) {
            result.push(item);
        }
    }
}

const findDuplicates = (nums) => {
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        const idx = Math.abs(nums[i]) - 1;
        const val = nums[idx];
        if (val > 0) {
            nums[idx] = -nums[idx];
        } else {
            result.push(Math.abs(nums[i]));
        }
    }
    return result;
}

// console.log(findDuplicates([4,3,2,7,8,2,3,1]));
console.log(findDuplicatesHash([4, 3, 2, 7, 8, 2, 3, 1]));