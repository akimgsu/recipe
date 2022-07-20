/*
More formally, given a string, we define the frequency deviation of a substring as the differnece between the maximum and the minimum frequencies of the characters in the substring.
The segment "a" has a frequency deviation of 0. "a" occurs most and least frequently. Both values are 1, and 1 - 1 = 0.
The segment "aabb" has a frequency deviation of 0.
The segment "aab" has a frequency deviation of 1.
The segment "abb" has a frequency deviation of 1
*/
function subBetweenMaxAndMin(str) {
    const proc = new Map();
    for (let eWin = 0; eWin < str.length; eWin++) {
        let rChar = str[eWin];
        if (proc.get(rChar)) proc.set(rChar, proc.get(rChar) + 1);
        else proc.set(rChar, 1);
    }
    return Math.max(...proc.values()) - Math.min(...proc.values());
}
console.log(subBetweenMaxAndMin("aabb")); // 0
console.log(subBetweenMaxAndMin("aab")); // 1 
console.log(subBetweenMaxAndMin("aabcdddddd")); // 5
/**
 * https://www.youtube.com/watch?v=lz8lyKKZYPY&list=PLrClazTqVpJmY0TcHROxfaz62i31uiFzr&index=2
 * https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters
 * Longest Substring with at most k Distinct Character
 */
function subMostKDistintCharacter(str, num) {
    let sWin = 0;
    let max = 0;
    const proc = new Map();
    for (let eWin = 0; eWin < str.length; eWin++) {
        let rChar = str[eWin];
        if (proc.get(rChar)) proc.set(rChar, proc.get(rChar) + 1);
        else proc.set(rChar, 1);
        while (proc.size > num) {
            lChar = str[sWin];
            if (proc.get(lChar) > 1) proc.set(lChar, proc.get(lChar) - 1);
            else proc.delete(lChar);
            sWin++;
        }
        max = Math.max(max, (eWin - sWin) + 1);
    }
    return max;
}
console.log(subMostKDistintCharacter("eceba", 2)); // 3
console.log(subMostKDistintCharacter("aa", 1)); // 2
/**
 * https://www.youtube.com/watch?v=sydRChyHRxk&list=PLrClazTqVpJmY0TcHROxfaz62i31uiFzr&index=4
 * 3. Longest Substring Without Repeating Characters
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 */
function subWithoutRepatingCharacter(str) {
    let sWin = 0;
    let max = 0;
    const proc = new Map();
    for (let eWin = 0; eWin < str.length; eWin++) {
        let rChar = str[eWin];
        if (proc.get(rChar)) proc.set(rChar, proc.get(rChar) + 1);
        else proc.set(rChar, 1);
        while (proc.get(rChar) > 1) {
            let lChar = str[sWin];
            if (proc.get(lChar) > 1) proc.set(lChar, proc.get(lChar) - 1);
            else proc.delete(lChar);
            sWin++;
        }
        max = Math.max(max, (eWin - sWin) + 1);
    }
    return max;
}
console.log(subWithoutRepatingCharacter("abcabcbb")); // 3
console.log(subWithoutRepatingCharacter("bbbbb")); // 1
console.log(subWithoutRepatingCharacter("pwwkew")); // 3