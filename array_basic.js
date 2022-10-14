/*
https://leetcode.com/problems/binary-search/submissions/ 704 binary search
*/
const bSearch = (arr, target) => {
    let l = 0;
    let r = arr.length - 1;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (arr[mid] === target) { return mid; }
        else if (arr[mid] < target) { l = mid + 1; }
        else { r = mid - 1; }
    }
    return -0;
}

// console.log(bSearch([-1, 0, 3, 5, 9, 12], 9));
console.log(bSearch([-1, 0, 3, 5, 9, 12], 2));
// console.log(bSearch([0, 3, 5, 7, 9, 11, 19, 25, 26, 29], 12));

/**
283. Move Zeroes
https://leetcode.com/problems/move-zeroes/
*/
const moveZeroSwap = (arr) => {
    let idx = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            [arr[idx], arr[i]] = [arr[i], arr[idx]];
            idx++;
        }
    }
    return arr;
}
const moveZero = (arr) => {
    let idx = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[idx] = arr[i];
            idx++;
        }
    }
    for (let i = idx; i < arr.length; i++) {
        arr[i] = 0;
    }
    return arr;
}
// console.log(moveZeroSwap([1, 2, 3, 4, 5, 6, 7]));
// console.log(moveZeroSwap([0, 1, 0, 3, 12]));
console.log(moveZero([1, 2, 3, 4, 5]));
console.log(moveZero([0, 1, 0, 3, 12]));
/*
https://leetcode.com/problems/find-pivot-index/ 
724. Find Pivot Index
Brute force o(n) + n => o(n2)
 */
const findPivot = (arr) => {
    const sum = arr.reduce((cur, pre) => cur += pre, 0);
    let lSum = 0;
    let rSum = sum;
    let pastPivot = 0;
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        rSum -= num;
        lSum += pastPivot;
        if (lSum === rSum) return i;
        pastPivot = num;
    }
    return -1;
}
console.log(findPivot([1, 8, 2, 9, 2, 3, 6]));
console.log(findPivot([1, 7, 3, 6, 5, 6]));

/*
https://leetcode.com/problems/merge-sorted-array/
*/
const mergeSorted = (nums, nums2) => {
    const result = [];
    let i = 0;
    let j = 0;
    while (i < nums.length && j < nums2.length) {
        if (nums[i] <= nums[j]) {
            result.push(nums[i]);
            i++;
        } else {
            result.push(nums2[j]);
            j++;
        }
    }
    while (i < nums.length) {
        result.push(nums[i]);
        i++;
    }
    while (j < nums2.length) {
        result.push(nums2[j]);
        j++;
    }
    return result;
}
const mergeSorted2 = (arr, m, arr2, n) => {
    let f = m - 1;
    let s = n - 1;
    let idx = m + n - 1;
    while (s >= 0) {
        let fVal = arr[f];
        let sVal = arr2[s];
        if (fVal > sVal) {
            arr[idx] = fVal;
            idx--
            f--;
        } else {
            arr[idx] = sVal;
            idx--;
            s--;
        }
    }
    return arr;
}

console.log(mergeSorted([1, 3, 5, 6], [2, 4, 6]));
console.log(mergeSorted2([1, 3, 5, 6], 3, [2, 4, 6], 3));
/*
https://leetcode.com/problems/find-peak-element/
*/
const findFeak = (nums) => {
    let l = 0;
    let r = nums.length - 1;
    while (l < r) {
        let mid = Math.floor((l + r) / 2);
        if (nums[mid] > nums[mid + 1]) {
            r = mid;
        } else {
            l = mid + 1;
        }
    }
    return l;
}
console.log(findFeak([1, 2, 1, 3, 5, 6, 4]));
console.log(findFeak([1, 9, 1, 3, 5, 6, 4])); // hm... 