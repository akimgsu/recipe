
/*
15 3sum. 
https://leetcode.com/problems/3sum/
https://www.youtube.com/watch?v=K8bmvM2_ZZQ&list=PLrClazTqVpJmJOUmYf6wvP1m-ay1y7ui2&index=2
*/
const twoSumSub = (j, target, nums) => {
    let k = nums.length - 1;
    let result = [];
    while (j < k) {
        let leftVal = nums[j];
        let rightVal = nums[k];
        if (leftVal + rightVal < target) {
            j++;
        } else if (leftVal + rightVal > target) {
            k--;
        } else {
            result.push([target * -1, leftVal, rightVal]);
            // remove duplicated values
            while (j < k && nums[j] === nums[j + 1]) j++;
            while (j < k && nums[k] === nums[k - 1]) k--;
            j++;
            k--;
        }
    }
    return result;
}
const threeSumZero = async (nums) => {
    const result = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) continue;
        const target = nums[i] * -1;
        const subResult = await twoSumSub(i + 1, target, nums);
        result.push(...subResult);
    }
    return result;
}
console.log('threeSumZero:', threeSumZero([-1, 0, 1, 2, -1, -4]))
/*
https://leetcode.com/problems/two-sum/
*/
const twoSumHash = (nums, t) => {
    const hash = {};
    for (let i = 0; i < nums.length; i++) {
        const val = nums[i];
        hash[val] = i
    }
    for (let i = 0; nums.length; i++) {
        const pk = t - nums[i];
        if (hash[pk] && hash[pk] !== i) {
            return [i, hash[pk]];
        }
    }
}
const twoSumPointers = (nums, t) => {
    nums.sort((a, b) => a - b);
    let len = nums.length - 1, l = 0, r = len;
    while (l < r) {
        if (nums[l] + nums[r] === t) {
            return [nums[l], nums[r]];
        }
        if (nums[l] + nums[r] < t) {
            l++;
        } else {
            r--;
        }
    }
}
const twoSum = (nums, t) => {
    const len = nums.length - 1;
    for (let i = 0; i <= len; i++) {
        if (nums[i] + nums[len] === t) return []
    }
}
console.log('twoSumHash::', twoSumHash([2, 7, 11, 15], 9));
console.log('twoSumPointers::', twoSumPointers([2, 7, 11, 15], 9));
console.log('twoSum::', twoSum([3, 2, 4], 6));




