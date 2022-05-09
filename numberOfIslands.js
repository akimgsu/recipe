/*
https://www.youtube.com/watch?v=PbsNVXacaVU&list=PLrClazTqVpJlyey7Szwe_XX9meD4wl2Ma
https://leetcode.com/problems/number-of-islands/

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

const islands = (grid) => {
    const visited = grid.map(row => row.map(cell => false));
    let islandsCount = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (dFS(i, j, grid, visited)) islandsCount++;
        }
    }
    return islandsCount;
}

const grid = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
]

console.log(islands(grid));