/*
1200. Minimum Absolute Difference
https://leetcode.com/problems/minimum-absolute-difference/
https://www.youtube.com/watch?v=DeKlsRpFoZc&list=PLrClazTqVpJmJOUmYf6wvP1m-ay1y7ui2&index=15
*/

const minimumAbsDifference = (arr) => {
    arr.sort((a, b) => a - b);
    const result = [];
    let min = Infinity;
    for (let i = 0; i < arr.length - 1; i++) {
        const diff = arr[i + 1] - arr[i];
        min = Math.min(diff, min);
    }
    for (let i = 0; i < arr.length - 1; i++) {
        const diff = arr[i + 1] - arr[i];
        if (diff === min) {
            result.push([arr[i], arr[i + 1]]);
        }
    }
    return result;
}

console.log(minimumAbsDifference([4, 2, 1, 3]));