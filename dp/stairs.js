/*
https://leetcode.com/problems/min-cost-climbing-stairs/submissions/
746. Min Cost Climbing Stairs
*/
const minCostClimbingStairs = (cost) => {
    for (let i = cost.length - 3; ~i; i--) {
        cost[i] += Math.min(cost[i + 1], cost[i + 2]);
    }
    return Math.min(cost[0], cost[1]);
};
// console.log(minCostClimbingStairs([10, 15, 20]));
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));

/*
https://leetcode.com/problems/climbing-stairs/
70. Climbing Stairs
*/


const cache = {
    "0": 1,
    "1": 1,
};

const climbStairsCache = function (n) {
    //base cases
    if (n <= 1) return 1;
    for (let i = 2; i <= n; i++) {
        cache[i] = cache[i - 1] + cache[i - 2];
    }
    return cache[n];
};
console.time();
console.log(climbStairsCache(38));
console.timeEnd();

// bottom up 2 to 10000
const climbStairs = (n) => {
    if (n < 3) {
        return n;
    }
    const arr = [1, 2];
    for (let i = 3; i <= n; i++) {
        const sub = arr[0] + arr[1];
        [arr[0], arr[1]] = [arr[1], sub];
    }
    return arr[1];
};
console.time();
console.log(climbStairs(38));
console.timeEnd();

const climbStairsRecur = (n, arr = [1, 2]) => {
    if (n < 3) {
        return n;
    } else {
        const sub = climbStairsRecur(n - 1, arr) + climbStairsRecur(n - 2, arr);
        arr.push(sub);
        return arr[arr.length - 1];
    }
};
// console.time();
// console.log(climbStairsRecur(38));
// console.timeEnd();

const climbStairsHash = (n, h) => {
    if (n < 3) return n;
    if (!h[n]) {
        const sub = climbStairsHash(n - 1, h) + climbStairsHash(n - 2, h);
        h[n] = sub;
    }
    return h[n];
};
console.time();
console.log(climbStairsHash(38, {}));
console.timeEnd();
const climbStairsNaive = (n) => {
    if (n < 3) return n;
    return climbStairsNaive(n - 1) + climbStairsNaive(n - 2);
};
// console.log(climbStairsNaive(4));