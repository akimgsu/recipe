/*
https://www.youtube.com/watch?v=EU7ISz76xjw&list=PLDV-cCQnUlIYQOb8_n-d-VPhl_X6cECjg&index=4
https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/
*/

const removeDuplicates = function (s, k) {
    const arr = s.split('');
    const s1 = [];
    const s2 = [];
    for (let i = 0; i < arr.length; i++) {
        if (!s1.length) {
            s1.push(arr[i]);
            s2.push(1);
        } else {
            if (arr[i] === s1[s1.length - 1]) {
                s1.push(arr[i]);
                s2[s2.length - 1]++;
            } else {
                s1.push(arr[i]);
                s2.push(1);
            }
        }
        if (s2[s2.length - 1] >= k) {
            s2.pop();
            for (let i = 0; i < k; i++) s1.pop();
        }
    }
    return s1.join('');
};
// console.log(removeDuplicates('abcd', 3));
console.log(removeDuplicates('deeedbbcccbdaa', 3));
console.log(removeDuplicates('pbbcggttciiippooaais', 2));