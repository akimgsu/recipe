/*
73. Set Matrix Zeroes
https://leetcode.com/problems/set-matrix-zeroes/
https://www.youtube.com/watch?v=8-a6dNedR68&list=PLrClazTqVpJmJOUmYf6wvP1m-ay1y7ui2&index=10
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
*/
const setZero = (row, col, matrix) => {
    for (let i = 0; i < matrix.length; i++) {
        matrix[i][col] = 0;
    }

    for (let i = 0; i < matrix[0].length; i++) {
        matrix[row][i] = 0;
    }
}

var setZeroes = function (matrix) {
    const zeroA = [];
    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[0].length; c++) {
            if (matrix[r][c] === 0) {
                zeroA.push([r, c]);
            }
        }
    }
    for (let position of zeroA) {
        const row = position[0];
        const col = position[1];
        setZero(row, col, matrix);
    }
};
console.log(setZeroes([[1, 1, 1], [1, 0, 1], [1, 1, 1]]));