/*
118. Pascal's Triangle
https://leetcode.com/problems/pascals-triangle/
https://www.youtube.com/watch?v=LQUZYf-hr6M&list=PLrClazTqVpJmJOUmYf6wvP1m-ay1y7ui2&index=23
*/
const generate = (rows) => {
    if (rows < 1) return [];
    if (rows === 1) return [[1]];
    const triangle = [[1]];
    for (let i = 1; i < rows; i++) {
        let prevRow = triangle[i - 1];
        const curRow = [];
        curRow.push(1);
        for (let j = 1; j < prevRow.length; j++) {
            curRow[j] = prevRow[j] + prevRow[j - 1];
        }
        curRow.push(1);
        triangle.push(curRow);
    }
    return triangle;
}

console.log(generate(5));