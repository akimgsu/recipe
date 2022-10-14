/*

 */
// Bottom up
const coinChange = (coins, t) => {
    const map = { '0': 0 };
    for (let i = 1; i <= t; i++) {
        let min = Infinity;
        for (const coin of coins) {
            if (i < coin) continue;
            min = Math.min(min, 1 + map[i - coin]);
        }
        map[i] = min;
    }
    console.log(map);
    return map[t] == Infinity ? -1 : map[t];
}
// console.log(coinChange([1, 2, 5], 11));
console.log(coinChange([2], 4));
// console.log(coinChange([3], 4));


const coinChange2 = function (coins, amount) {
    const map = { 0: 1 }
    function dp(n) {
        if (map.hasOwnProperty(n)) return map[n]
        if (n == 0) return 1
        if (n < 0) return -1
        let min = Infinity
        for (let coin of coins) {
            let res = dp(n - coin)
            if (res == -1) continue
            min = Math.min(min, 1 + res)
        }
        map[n] = min
        return min
    }
    for (let i = 1; i <= amount; i++) {
        dp(i)
    }
    return map[amount] == Infinity ? -1 : map[amount] - 1
};

/*
get maxvalue in array
*/

const getMaxVal = (arr) => {
    const dp = Array(arr.length).fill(0);
    dp[0] = arr[0];
    dp[1] = Math.max(arr[0], arr[1]);
    for (let i = 2; i < arr.length; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + arr[i]);
    }
    console.log(dp)
    return dp[1];
}

console.log('getMax', getMaxVal([1, 3, 1, 8]));


const makeOne = (n, k) => {
    let count = 0;
    while (true) {
        if (Number.isInteger(n / k)) {
            count += 1;
            n = n / k;
        } else {
            count += 1;
            n -= 1;
        }
        if (n === 1) break;
    }

    return count;
}
// console.log(makeOne(25, 5));
console.log(makeOne(25, 3));
