/*
https://leetcode.com/problems/permutations/
46. Permutations
*/
const permute = function (nums) {
    const result = [];
    const bt = (result, n) => {
        if (n === nums.length - 1) {
            // console.log('nums::::', nums)
            return result.push([...nums]);
        }
        for (let i = n; i < nums.length; i++) {
            [nums[i], nums[n]] = [nums[n], nums[i]];
            bt(result, n + 1);
            [nums[i], nums[n]] = [nums[n], nums[i]];
        }
    }
    bt(result, 0);
    return result;
};
console.time();
console.log(permute(['a', 'b', 'c']));
console.timeEnd();


const permuteDP = function (nums, n = 0) {
    if (n >= nums.length) return [[]];
    const res = [];
    const prevs = permuteDP(nums, n + 1);  // permutations of elements after n
    for (let prev of prevs) {
        for (let i = 0; i <= prev.length; i++) {
            let p = prev.slice(0);
            p.splice(i, 0, nums[n]);  // successively insert element n
            res.push(p);
        }
    }
    return res;
};
// console.time();
// console.log(permuteDP([1, 2, 3]));
// console.timeEnd();