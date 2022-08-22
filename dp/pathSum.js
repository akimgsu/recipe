/*
https://leetcode.com/problems/minimum-path-sum/
64. Minimum Path Sum
*/
const minPathSum = (grid) => {
    function gett(x, y) {
        if (x < 0 || y < 0) return Infinity
        return grid[x][y]
    }

    grid.forEach((col, x) => {
        col.forEach((e, y) => {
            if (x === 0 && y === 0) return;
            grid[x][y] += Math.min(gett(x - 1, y), gett(x, y - 1))
        })
    })
    return grid[grid.length - 1][grid[0].length - 1]
};
console.log(minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]));


const minPathSumBasic = (grid) => {
    const rows = grid.length;
    const cols = grid[0].length;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (j !== 0 && i !== 0) {
                grid[i][j] = Math.min(grid[i - 1][j] + grid[i][j], grid[i][j - 1] + grid[i][j]);
            } else if (i !== 0) {
                grid[i][j] += grid[i - 1][j];
            } else if (j !== 0) {
                grid[i][j] += grid[i][j - 1];
            }
        }
    }
    return grid[rows - 1][cols - 1];
}

console.log(minPathSumBasic([[1, 3, 1], [1, 5, 1], [4, 2, 1]]));

