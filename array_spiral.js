/*
54. Spiral Matrix
https://leetcode.com/problems/spiral-matrix/
https://www.youtube.com/watch?v=pFk4wX9yANw&list=PLrClazTqVpJmJOUmYf6wvP1m-ay1y7ui2&index=22
*/

const spiralOrder = (matrix) => {
    let top = 0;
    let right = matrix[0].length - 1;
    let bottom = matrix.length - 1;
    let left = 0;
    const size = matrix.length * matrix[0].length;
    const result = [];
    while (result.length < size) {
        for (let i = left; i <= right && result.length < size; i++) {
            result.push(matrix[top][i]);
        }
        top++;
        for (let i = top; i <= bottom && result.length < size; i++) {
            result.push(matrix[i][right]);
        }
        right--;
        for (let i = right; i >= left && result.length < size; i--) {
            result.push(matrix[bottom][i]);
        }
        bottom--;
        for (let i = bottom; i >= top && result.length < size; i--) {
            result.push(matrix[i][left]);
        }
        left++;

    }
    return result;
}
// console.log(spiralOrder([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]]));
console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));