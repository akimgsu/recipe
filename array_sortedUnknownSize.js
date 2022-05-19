/*
https://www.youtube.com/watch?v=m7GyMS67110&list=PLrClazTqVpJmJOUmYf6wvP1m-ay1y7ui2&index=17
*/

const search = (nums, target) => {
    let left = 0;
    let right = 1;
    while (nums[right] < target) {
        left = right;
        right = right * 2 > nums.length ? nums.length : right * 2;
    }
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) return mid;
        if (nums[left] <= target && target < nums[mid]) {
            right = mid - 1
        } else {
            left = mid + 1;
        }
    }
    return -1

}

console.log(search([-1, 0, 1, 3, 4, 6, 8, 9, 19]));