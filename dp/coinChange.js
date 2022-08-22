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