/*
Back Tracking (Decision Space)
- Subsets
- Permutations
- Combinations
- Sudoku...
*/
/*
https://leetcode.com/problems/subsets-ii/
90. Subsets II
*/

const subsetsWithDup = function (nums) {
    const result = [];
    nums.sort((a, b) => a - b);
    const subset = (path, idx) => {
        result.push(path);
        for (let i = idx; i < nums.length; i++) {
            if (i !== idx && nums[i] === nums[i - 1]) continue;
            subset([...path, nums[i]], i + 1);
        }
    }
    subset([], 0);
    return result;
};


console.log(subsetsWithDup([1, 2, 2]));
/*
https://leetcode.com/problems/subsets/
78. Subsets
*/
const subsets = (nums) => {
    const result = [];
    const proc = (path, idx) => {
        result.push(path)
        for (let i = idx; i < nums.length; i++) {
            proc([...path, nums[i]], i + 1);
        }
    }
    proc([], 0);
    return result;
};
// console.log(subsets([1, 2, 3]));