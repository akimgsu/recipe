/*
1. problem to subproblem
2. subproblem to problem
3. duplicating subproblem => memoization
*/
// bottom up 2 to 10000
const fib_dp_recur = (n) => {
    const arr = [0, 1];
    if (n < arr.length) {
        return arr[n];
    }
    for (let i = 2; i <= n; i++) {
        const num = arr[0] + arr[1];
        [arr[0], arr[1]] = [arr[1], num];
    }
    return arr[1];
}
console.time();
console.log('fib_dp_recur', fib_dp_recur(1007));
console.timeEnd();

// top down 10000 to 2 --- make call stack issue with big number
const fib_hash = (n, memo) => {
    if (n === 0 || n === 1) {
        return n;
    }
    if (!memo[n]) {
        memo[n] = fib_hash(n - 1, memo) + fib_hash(n - 2, memo);
    }
    return memo[n];
}
// console.time();
// console.log('hash', fib_hash(10000, {}));
// console.timeEnd();

const fib_recur = (n, arr = [0, 1]) => {
    if (n < arr.length) {
        return arr[n];
    } else {
        const fib = fib_recur(n - 1, arr) + fib_recur(n - 2, arr);
        arr.push(fib);
        return fib;
    }
}
// console.time();
// console.log('recur', fib_recur(10000));
// console.timeEnd();


const fib_naive = (n) => {
    if (n === 0 || n === 1) return n;
    return fib_naive(n - 1) + fib_naive(n - 2);
}
// console.time();
// console.log('naive', fib_naive(35));
// console.timeEnd();