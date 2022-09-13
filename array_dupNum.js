/*
287. Find the Duplicate Number
https://leetcode.com/problems/find-the-duplicate-number/
https://www.youtube.com/watch?v=-KqZ0Miukws&list=PLrClazTqVpJmJOUmYf6wvP1m-ay1y7ui2&index=16
floyd algorithm
*/

const findDuplicate = (nums) => {
    nums.sort((a, b) => a - b);
    for (let i = 0; i < arr.length - 1; i++) {
        const isDup = (arr[i + 1] - arr[i]) === 0 ? true : false;
        if (isDup) return nums[i];
    }
}
// tortorise vs hale
const findDuplicateGraph = function (nums) {
    let slow = nums[0];
    let fast = nums[nums[0]];
    while (slow !== fast) { // we are guaranteed to have a cycle
        slow = nums[slow];
        fast = nums[nums[fast]];
    }
    slow = 0;
    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[fast];
    }
    return slow;
};

// const findDuplicateGraph = (nums) => {
//     let fast = 0;
//     let slow = 0;
//     while (true) {
//         fast = nums[nums[fast]];
//         slow = nums[slow];

//         if (fast === slow) {
//             let pointer = 0;
//             while (pointer !== slow) {
//                 pointer = nums[pointer];
//                 slow = nums[slow];
//             }
//             return pointer;
//         }
//     }
// }

console.log(findDuplicateGraph([1, 3, 4, 2, 2]));