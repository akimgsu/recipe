/*
120. Triangle
https://leetcode.com/problems/triangle/
https://www.youtube.com/watch?v=LQUZYf-hr6M&list=PLrClazTqVpJmJOUmYf6wvP1m-ay1y7ui2&index=23
*/
const minimumTotal = (triangle) => {
    const temp = [...triangle];
    let total = 0;
    for (let i = 0; i < temp.length; i++) {
        temp[i].sort((a, b) => a - b);
    }
    for (let i = 0; i < temp.length; i++) {
        total = + temp[i][0];
    }
    return total;
}

var minimumTotalT = function (triangle) {
    const table = [];
    for (let row of triangle) {
        table.push(new Array(row.length).fill(0));
    }
    table[0] = triangle[0];
    for (let row = 1; row < table.length; row++) {
        for (let col = 0; col < table[row].length; col++) {
            if (col === 0) {
                table[row][col] = table[row - 1][col] + triangle[row][col];
            } else if (col === table[row].length - 1) {
                table[row][col] = table[row - 1][table[row - 1].length - 1] + triangle[row][col];
            } else {
                table[row][col] = Math.min(table[row - 1][col], table[row - 1][col - 1]) + triangle[row][col];
            }
        }
    }
    return Math.min(...table[table.length - 1])
};

console.log(minimumTotalT([[-1], [2, 3], [1, -1, -3]]));
// console.log(minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]]));