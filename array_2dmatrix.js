/*
74. Search a 2D Matrix
https://leetcode.com/problems/search-a-2d-matrix/
https://www.youtube.com/watch?v=OZmDCOF8KW0&list=PLrClazTqVpJmJOUmYf6wvP1m-ay1y7ui2&index=21
https://www.youtube.com/watch?v=4-y6eGUY-sI&list=PLDV-cCQnUlIYFOXYzqLoXnEye4WxDa_30&index=14
*/

const searchMatrix = (matrix, target) => {
    let r = matrix.length;
    let c = matrix[0].length;
    let left = 0;
    let right = r * c - 1;
    while (left <= right) {
        let mid = Math.floor(left + (right - left));
        let midVal = matrix[Math.floor(right / c)][right % c];
        if (midVal === target) return true;

        if (target < midVal) right = mid - 1;
        else left = mid + 1;
    }
    return false;
}
console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3));