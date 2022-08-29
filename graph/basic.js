/**
 * https://leetcode.com/problems/keys-and-rooms/
 * 841. Keys and Rooms
 * Traverse DFS(Depth First Search)/BFS(Breath First Search)
 */
const canVisitAllRoomsBFS = (rooms) => {

}

const canVisitAllRoomsDFS = (rooms) => {
    const visited = [];
    const stack = [];
    stack.push(0);
    visited.push(0);
    while (stack.length > 0) {
        const idx = stack.pop(); npm
        const keys = rooms[idx];
        for (const k in keys) {
            if (!visited.includes(keys[k])) {
                stack.push(keys[k]);
                visited.push(keys[k]);
            }
        }
    }
    return rooms.length === visited.length ? true : false;
}
console.log(canVisitAllRoomsDFS([[1, 3], [3, 0, 1], [2], [0]]));

const canVisitAllRoomsRecur = (rooms) => {
    const visited = [];
    const helperRecur = (elem) => {
        visited.push(elem);
        const keys = rooms[elem];
        for (const k in keys) {
            if (!visited.includes(keys[k]))
                helperRecur(keys[k]);
        }
    }
    recurDFS(0);
    return rooms.length === visited.length ? true : false;
}
// console.log(canVisitAllRoomsRecur([[1], [2], [3], []]));