/*
Back Tracking (Decision Space)
- Subsets
- Permutations
- Combinations
- Sudoku...
*/


const subsetsReduce = (nums) => {
    return nums.reduce((sets, num) => sets.forEach(set => sets.push([...set, num])) || sets, [[]]);
};
// console.log(subsetsReduce([]));

/*
https://leetcode.com/problems/letter-combinations-of-a-phone-number/
17. Letter Combinations of a Phone Number
*/
const mappings = {
    1: [],
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
}
const letterCombinations = (digits) => {
    const results = [];
    const proc = (idx, prefix) => {
        if (idx > digits.length - 1) return results.push(prefix);
        const digit = digits[idx]
        for (const char of mappings[digit]) {
            proc(idx + 1, prefix + char);
        }
    }
    if (digits.length > 0) proc(0, '');
    return results;
}
// console.log(letterCombinations("2"));
// console.log(letterCombinations("25"));
// console.log(letterCombinations("29"));