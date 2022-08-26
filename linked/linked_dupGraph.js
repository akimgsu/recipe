/*
287. Find the Duplicate Number
https://leetcode.com/problems/find-the-duplicate-number/
https://www.youtube.com/watch?v=-KqZ0Miukws&list=PLrClazTqVpJkW4VpUE_2vDQLFIvfQIkZF&index=5
*/

const findDuplicate = nums => {
    let fast = 0;
    let slow = 0;

    while (true) {
        fast = nums[nums[fast]];
        slow = nums[slow];
        if (fast === slow) {
            let pointer = 0;
            while (pointer !== slow) {
                pointer = nums[pointer];
                slow = nums[slow];
            }
            return pointer;
        }
    }
}

console.log(findDuplicate([1, 3, 4, 2, 2]));
