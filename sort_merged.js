/*
88. Merge Sorted Array
https://leetcode.com/problems/merge-sorted-array/
https://www.youtube.com/watch?v=FhIhUy8bZww&list=PLrClazTqVpJl1yRzqUmxrYO-KKiMvN7Pw&index=6
*/
const sortMerged = (arr, m, arr2, n) => {
    let first = m - 1;
    let second = n - 1;
    let t = m + n - 1;
    while (second >= 0) {
        let firstValue = arr[first];
        let secondValue = arr[second];
        if (firstValue > secondValue) {
            arr[t] = firstValue;
            i--;
            first--;
        } else {
            arr[t] = secondValue;
            i--;
            second--;
        }
    }
}

console.log(sortMerged([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
