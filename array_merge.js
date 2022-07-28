/*
56. Merge Intervals 
https://leetcode.com/problems/merge-intervals/
https://www.youtube.com/watch?v=LvygwImtvEw&list=PLrClazTqVpJmJOUmYf6wvP1m-ay1y7ui2&index=3
*/
const merge = (arr) => {
    arr.sort((a, b) => a[0] - b[0]);
    // console.log(intervals);
    const result = [arr[0]];
    for (let interval of arr) {
        let preEnd = result[result.length - 1][1];
        let curS = interval[0];
        let curE = interval[1];
        if (preEnd >= curS) {
            result[result.length - 1][1] = Math.max(curS, curE)
        } else {
            result.push(interval)
        }
    }
    return result;
}

console.log('merge', merge([[15, 18], [1, 3], [2, 6], [8, 10]]));
console.log('merge', merge([[1, 5], [3, 7], [10, 15], [8, 16]]));