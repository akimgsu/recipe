
/*
15 3sum. https://leetcode.com/problems/3sum/
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




