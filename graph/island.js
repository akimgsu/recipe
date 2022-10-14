/**
 * https://leetcode.com/problems/number-of-islands/
 * 323. Number of Connected Components in an Undirected Graph
 */

const getAdjNeighbors = (i, j, grid, visited) => {
    const adjNeighbors = [];

    if (i > 0 && !visited[i - 1][j]) adjNeighbors.push([i - 1, j]);
    if (i < grid.length - 1 && !visited[i + 1][j]) adjNeighbors.push([i + 1, j]);

    if (j > 0 && !visited[i][j - 1]) adjNeighbors.push([i, j - 1]);
    if (j < grid[0].length - 1 && !visited[i][j + 1]) adjNeighbors.push([i, j + 1]);

    return adjNeighbors;
}



const dFS = (i, j, grid, visited) => {
    const stack = [[i, j]];
    let islandSize = 0;
    while (stack.length) {
        let curNode = stack.pop();
        let [i, j] = curNode;

        if (visited[i][j]) continue;
        visited[i][j] = true;

        if (grid[i][j] === '0') continue;
        islandSize++;

        let adjNeighbors = getAdjNeighbors(i, j, grid, visited);
        stack.push(...adjNeighbors)
    }
    return islandSize > 0 ? true : false;

}
var numIslands = function (grid) {
    const visited = grid.map(row => row.map(cell => false));
    let islandsCount = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (dFS(i, j, grid, visited)) islandsCount++;
        }
    }
    return islandsCount;

};


function numIslands2(grid) {
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1') {
                count++;
                dfs2(grid, i, j);
            }
        }
    }

    return count;
}

function dfs2(grid, row, col) {
    // bound check
    if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length) return;

    const value = grid[row][col];
    if (value === '1') {
        grid[row][col] = '#';
        dfs2(grid, row + 1, col);
        dfs2(grid, row - 1, col);
        dfs2(grid, row, col + 1);
        dfs2(grid, row, col - 1);
    }
}
const grid = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
]
const grid2 = [
    ["1", "0", "0"],
    ["1", "0", "0"],
    ["0", "0", "1"]
]
const grid3 = [["1", "1", "1", "1", "0"], ["1", "1", "0", "1", "0"], ["1", "1", "0", "0", "0"], ["0", "0", "0", "0", "0"]]
console.log(numIslands2(grid3));

/**
 * https://leetcode.com/problems/flood-fill/
 * 733. Flood Fill
 */


const floodFill = function (image, sr, sc, newColor, firstColor = image[sr][sc]) {
    // handle if the coordinate is out of bounds
    // or if it is already the new color
    // or if it's not from the original color we're trying to change
    if (sr < 0 || sc < 0 || sr >= image.length || sc >= image[sr].length || image[sr][sc] !== firstColor || image[sr][sc] === newColor) {
        return image; // return image as-is
    }

    image[sr][sc] = newColor;

    floodFill(image, sr + 1, sc, newColor, firstColor);
    floodFill(image, sr - 1, sc, newColor, firstColor);
    floodFill(image, sr, sc + 1, newColor, firstColor);
    floodFill(image, sr, sc - 1, newColor, firstColor);

    // return modified image
    return image;
};

const image = [[1, 1, 1], [1, 1, 0], [1, 0, 1]];
const image2 = [[0, 0, 0], [0, 0, 0]];
console.log(floodFill(image, 1, 1, 2));
console.log(floodFill(image2, 0, 0, 0));