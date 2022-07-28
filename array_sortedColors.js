/*
https://leetcode.com/problems/sort-colors/
*/

const sortColors2 = (nums) => {
    let l = 0;
    let r = nums.length - 1;
    let idx = 0;
    while (idx <= r) {
        if (nums[idx] === 0) {
            [nums[idx], nums[l]] = [nums[l], nums[idx]];
            l++;
            idx++;
        }
        else if (nums[idx] === 2) {
            [nums[idx], nums[r]] = [nums[r], nums[idx]];
            r--;
        } else {
            idx++;
        }
    }
    return nums;
}
const sortColors = (nums) => {
    const hash = {};
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]]) hash[nums[i]]++;
        else hash[nums[i]] = 1;
    }
    for (const [key, val] of Object.entries(hash)) {
        for (let i = 0; i < val; i++) {
            result.push(key);
        }
    }
    return result;
}

console.log(sortColors2([2, 0, 2, 1, 1, 0]));
console.log(sortColors2([2, 0, 2, 2, 0, 1, 1, 1, 0]))