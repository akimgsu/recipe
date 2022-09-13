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

/*
57. Insert Interval
https://leetcode.com/problems/insert-interval/submissions/
*/
const insert = function (intervals, newInterval) {
    intervals.push(newInterval);
    intervals.sort((a, b) => a[0] - b[0]);
    const result = [intervals[0]];
    for (const i of intervals) {
        let preE = result[result.length - 1][1];
        let currS = i[0];
        let currE = i[1];
        if (preE >= currS) {
            result[result.length - 1][1] = Math.max(preE, currE)
        } else {
            result.push(i);
        }
    }
    return result;
};
console.log('insert', insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]));