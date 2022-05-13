/*
867. Transpose Matrix
https://leetcode.com/problems/transpose-matrix/
https://www.youtube.com/watch?v=8x8nFNpVUFw&list=PLrClazTqVpJmJOUmYf6wvP1m-ay1y7ui2&index=8
*/
const transpose = (matrix) => {
    const result = Array.from({ length: matrix[0].length }, () => new Array(matrix.length).fill(0));
    for (let row = 0; row < matrix.length; row++) {
        for (let column = 0; column < matrix[0].length; column++) {
            result[column][row] = matrix[row][column]
        }
    }
    return result;
};
console.log(transpose([[1, 2, 3], [4, 5, 6]]));
