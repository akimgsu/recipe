/**
 * https://leetcode.com/problems/keys-and-rooms/
 * 841. Keys and Rooms
 * Traverse DFS(Depth First Search)/BFS(Breath First Search)
 */
const canVisitAllRoomsBFS = (rooms) => {
    const visited = [];
    const q = [];
    q.push(0);
    visited.push(0);
    while (q.length > 0) {
        const idx = q.shift();
        const keys = rooms[idx];
        for (const k in keys) {
            if (!visited.includes(keys[k])) {
                q.push(keys[k]);
                visited.push(keys[k]);
            }
        }
    }
    return rooms.length === visited.length ? true : false;
}
console.log(canVisitAllRoomsBFS([[1, 3], [3, 0, 1], [2], [0]]));
console.log(canVisitAllRoomsBFS([[1], [2], [3], []]));

const canVisitAllRoomsDFS = (rooms) => {
    const visited = [];
    const stack = [];
    stack.push(0);
    visited.push(0);
    while (stack.length > 0) {
        const idx = stack.pop();
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

const iter_factorial = (n) => {
    let res = 1;
    for (let i = 1; i <= n; i++) {
        res *= i;
    }
    return res;
}
console.time();
console.log(iter_factorial(15));
console.timeEnd();

const recur_factorial = (n) => {
    if (n <= 1) return 1;
    return n * recur_factorial(n - 1);
}
console.time();
console.log(recur_factorial(15));
console.timeEnd();

const iter_gcd = (a, b) => {
    while ((a % b) > 0) {
        const r = a % b;
        a = b;
        b = r;
    }
    return b;
}
console.log(iter_gcd(192, 162));
console.log(iter_gcd(25, 7));
const recur_gcd = (a, b) => {
    if (a % b === 0) {
        return b;
    } else {
        return recur_gcd(b, a % b);
    }
}
console.log(recur_gcd(192, 162));
console.log(recur_gcd(25, 7));