/*
48. Rotate Image
https://leetcode.com/problems/rotate-image/
https://www.youtube.com/watch?v=HehiIRa4geE&list=PLrClazTqVpJmJOUmYf6wvP1m-ay1y7ui2&index=9
Swap (row -> col, col - row), reverse()
*/
// DO NOT allocate another 2D matrix and do the rotation.
const rotate = (matrix) => {
    const result = Array.from({ length: matrix[0].length }, () => new Array(matrix.length).fill(0));
    for (let row = 0; row < matrix.length; row++) {
        for (let column = 0; column < matrix[0].length; column++) {
            result[column][row] = matrix[row][column];
        }
    }
    for (let row of result) {
        row.reverse();
    }
    return result;
};
const rotate2 = (matrix) => {
    for (let row = 0; row < matrix.length; row++) {
        for (let column = row; column < matrix[0].length; column++) {
            [matrix[row][column], matrix[column][row]] = [matrix[column][row], matrix[row][column]];
        }
    }
    for (let row of matrix) {
        row.reverse();
    }
};
console.log(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
