/*
48. Rotate Image
https://leetcode.com/problems/rotate-image/
https://www.youtube.com/watch?v=HehiIRa4geE&list=PLrClazTqVpJmJOUmYf6wvP1m-ay1y7ui2&index=9
Swap (row -> col, col - row), reverse()
*/
// DO NOT allocate another 2D matrix and do the rotation.
const rotate = (mat) => {
    const result = Array.from({ length: mat[0].length }, () => new Array(mat.length).fill(0));
    for (let r = 0; r < mat.length; r++) {
        for (let c = 0; c < mat[0].length; c++) {
            result[c][r] = mat[r][c];
        }
    }
    for (let r of result) {
        r.reverse();
    }
    return result;
};

const rotate2 = (nums) => {
    for (let r = 0; r < nums.length; r++) {
        for (let c = r; c < nums[0].length; c++) {
            if (c === r) continue;
            [nums[r][c], nums[c][r]] = [nums[c][r], nums[r][c]];
        }
    }
    for (let r of nums) {
        r.reverse();
    }
    return nums;
};
console.log(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(rotate([[1, 2, 3], [4, 5, 6]]));
