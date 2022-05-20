/*
1762 https://leetcode.com/problems/buildings-with-an-ocean-view/
https://www.youtube.com/watch?v=2WJtUacFMpg&list=PLrClazTqVpJnoLCprxP1yIjIzAU8HINcY&index=2
O(n): T, O(n): S
*/
const findBuildings = (heights) => {
    const start = heights.length - 1;
    const result = [start];
    for (let i = heights.length - 2; i >= 0; i--) {
        let curBuilding = heights[i];
        let lastBuilding = heights[result[result.length - 1]];
        if (curBuilding > lastBuilding) {
            result.push(i)
        }
    }
    return result.reverse();
}

const findBuildings2 = (heights) => {
    let result = [];
    let max = 0;
    for (let i = heights.length - 1; i >= 0; i--) {
        if (max <= heights[i]) {
            result.push(i);
            max = (max, heights[i]);
        }
    }
}

console.log(findBuildings2([7, 1, 5, 3, 6, 4]))