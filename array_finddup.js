/*
442. Find All Duplicates in an Array
https://leetcode.com/problems/find-all-duplicates-in-an-array
https://www.youtube.com/watch?v=PGjb8X4g7V8&list=PLrClazTqVpJmJOUmYf6wvP1m-ay1y7ui2&index=20
*/


const findDuplicates = (nums) => {
    const hash = {};
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        const val = nums[i];
        if (hash[val]) {
            hash[val]++;
        } else {
            hash[val] = 1
        }
    }
    for (const prop in hash) {
        if (hash[prop] > 1) result.push(prop);
    }
    return result;
}

const findDuplicatesAbs = (nums) => {
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        const idx = Math.abs(nums[i]) - 1;
        const val = nums[idx];
        if (val < 0) {
            result.push(Math.abx(nums[i]));
        } else {
            nums[idx] = -nums[idx];
        }
    }
    return result;
}
console.log(findDuplicatesAbs([4, 3, 2, 7, 8, 2, 3, 1]));