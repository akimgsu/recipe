/**
 * https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/ locked
 * 323. Number of Connected Components in an Undirected Graph
 * https://www.youtube.com/watch?v=bj5iC7Bgr-o
 */
const buildPath = (n, edges) => {
    const path = Array.from({ length: n }, () => []);
    for (let e of edges) {
        let [src, dest] = e;
        path[src].push(dest);
        path[dest].push(src);
    }
    return path;
}

const bfs = (node, path, visited) => {
    const queue = [node];
    visited[node] = true;
    while (queue.length) {
        let curNode = queue.shift();
        for (let p of path[curNode]) {
            if (!visited[p]) {
                visited[p] = true;
                queue.push(p);
            }
        }
    }
}

const countGroup = (n, edges) => {
    const list = buildPath(n, edges);
    const visited = {};
    let cnt = 0;
    for (let v = 0; v < list.length; v++) {
        if (!visited[v]) {
            cnt += 1;
            bfs(v, list, visited);
        }
    }
    return cnt;
}
console.log(countGroup(5, [[0, 1], [1, 2], [3, 4]]));

const myCount = (n, arr) => {
    let res = 1;
    let pre = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i][0] === pre[1]) {
            pre = arr[i];
        } else {
            res += 1;
        }
    }
    return res;
}

console.log(myCount(5, [[0, 1], [1, 2], [3, 4]]));
console.log(myCount(5, [[0, 1], [1, 2], [2, 3], [3, 4]]));