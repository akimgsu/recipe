/*
912. Sort an Array (bubble)
https://leetcode.com/problems/sort-an-array/#
https://www.youtube.com/watch?v=8drJOS7Yeho&list=PLrClazTqVpJl1yRzqUmxrYO-KKiMvN7Pw
*/

const bubbleSort = (nums) => {
    let swap = true;
    let count = 0;
    while (swap) {
        swap = false;
        for (let i = 0; i < nums.length - count; i++) {
            let j = i + 1;
            if (nums[i] > nums[j]) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
                swap = true;
            }
        }
        count++;
    }
}
// const arr = [5, 2, 3, 1]
// bubbleSort(arr);
// console.log(arr);

/*
912. Sort an Array (selected)
https://www.youtube.com/watch?v=_WOLD8ZKkRA&list=PLrClazTqVpJl1yRzqUmxrYO-KKiMvN7Pw&index=2
*/
const selectedSort = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        let minIdx = i;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[minIdx] > nums[j]) {
                minIdx = j;
            }
        }
        [nums[i], nums[minIdx]] = [nums[minIdx], nums[i]];
    }
    return nums;
}
console.log('selectedSort::', selectedSort([5, 2, 3, 1]));

/*
912. Sort an Array (insertion)
https://www.youtube.com/watch?v=_WOLD8ZKkRA&list=PLrClazTqVpJl1yRzqUmxrYO-KKiMvN7Pw&index=3
*/
const insertedSort = (nums) => {
    for (let i = 1; i < nums.length; i++) {
        let j = i;
        while (j > 0 && nums[j] < nums[j - 1]) {
            [nums[j], nums[j - 1]] = [nums[j - 1], nums[j]];
            j--;
        }
    }
    return nums;
}
console.log('insertedSort::', insertedSort([5, 2, 3, 1]));