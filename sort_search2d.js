/*
74. Search a 2D Matrix
https://leetcode.com/problems/search-a-2d-matrix/
https://www.youtube.com/watch?v=OZmDCOF8KW0&list=PLrClazTqVpJl1yRzqUmxrYO-KKiMvN7Pw&index=11
*/


const search2D = (matrix, target) => {
    let row = matrix.length;
    let cols = matrix[0].length;
    let left = 0;
    let right = row * cols - 1;

    while (left <= right) {
        let mid = Math.floor(left + (right - left));
        let midVal = matrix[Math.floor(right / cols)][right % cols];
        if (midVal === target) return true;

        if (target < midVal) right = mid - 1
        else mid = right + 1;
    }
    return false;

}

console.log(search2D([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13));