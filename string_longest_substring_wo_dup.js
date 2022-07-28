/**
 * https://www.youtube.com/watch?v=sydRChyHRxk&list=PLrClazTqVpJmY0TcHROxfaz62i31uiFzr&index=4
 * 3. Longest Substring Without Repeating Characters
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 */


const longestSubstringWOrepeat = (s) => {
    let wStart = 0;
    let max = 0;
    const sofar = new Map();
    for (let wEnd = 0; wEnd < s.length; wEnd++) {
        let rChar = s[wEnd];
        if (sofar.get(rChar)) {
            sofar.set(rChar, sofar.get(rChar) + 1);
        } else {
            sofar.set(rChar, 1);
        }
        while (sofar.get(rChar) > 1) {
            let lChar = s[wStart];
            if (sofar.get(lChar) > 1) {
                sofar.set(lChar, sofar.get(lChar) - 1);
            } else {
                sofar.delete(lChar);
            }
            wStart++;
        }
        max = Math.max(max, (wEnd - wStart) + 1)
    }
    return max;
}

console.log(longestSubstringWOrepeat("abcabcbb")); // 3
console.log(longestSubstringWOrepeat("bbbbb")); // 1
console.log(longestSubstringWOrepeat("pwwkew")); // 3