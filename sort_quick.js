/*
912. Sort an Array 
https://leetcode.com/problems/sort-an-array/#
https://www.youtube.com/watch?v=8drJOS7Yeho&list=PLrClazTqVpJl1yRzqUmxrYO-KKiMvN7Pw
pivot + partitioning
*/


// make tree o(nlogn) = t, o(n) = s
// quick sort (povot) > partitioning
// const pivot = (nums, left, right) => {
//     let p = right;
//     let j = left;
//     let i = left - 1;
//     while (j <= p) {
//         if (nums[j] < nums[p]) {
//             i++;
//             [nums[i], nums[j]] = [nums[j], nums[i]];
//             j++;
//         } else {
//             j++;
//         }
//     }
//     i++;
//     [nums[i], nums[p]] = [nums[p], nums[i]];

//     return i;
// }
// const sortQuick = (nums, left = 0, right = nums.length - 1) => {
//     if (left < right) {
//         let pIdx = pivot(nums, left, right);
//         sortQuick(nums, left, pIdx - 1);
//         sortQuick(nums, pIdx + 1, right);
//     }
//     return nums;
// }
const pivotIdx = (arr, left, right) => {
    let r = right;
    let l = left;
    let idx = left - 1;
    while (l <= r) {
        if (arr[l] < arr[r]) {
            idx++;
            [arr[idx], arr[l]] = [arr[l], arr[idx]];
            l++;
        } else {
            l++;
        }
    }
    idx++;
    [arr[i], arr[r]] = [arr[r], arr[i]];
    return idx;
}

const quickSort = (arr, left = 0, right = arr.length - 1) => {
    if (left <= right) {
        const pIdx = pivotIdx(arr, left, right);
        quickSort(arr, left, pIdx - 1);
        quickSort(arr, pIdx + 1, right);
    }
    return arr;
}


console.log('sortQuick ::', sortQuick([5, 2, 3, 1]));
console.log(sortQuick([5, 1, 1, 2, 0, 0]));