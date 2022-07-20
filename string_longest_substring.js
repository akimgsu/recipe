/**
 * https://www.youtube.com/watch?v=lz8lyKKZYPY&list=PLrClazTqVpJmY0TcHROxfaz62i31uiFzr&index=2
 * https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters
 * Longest Substring with at most k Distinct Character
 */

const longestSubstringK = (s, k) => {
    let wStart = 0;
    let max = 0;
    const sofar = new Map();
    for (let wEnd = 0; wEnd < s.length; wEnd++) {
        let rChar = s[wEnd];
        if (!sofar.get(rChar)) sofar.set(rChar, 1);
        else sofar.set(rChar, sofar.get(rChar) + 1);
        while (sofar.size > k) {
            let lChar = s[wStart];
            if (sofar.get(lChar) > 1) sofar.set(lChar, sofar.get(lChar) - 1);
            else sofar.delete(lChar);
            wStart++;
        }
        max = Math.max(max, (wEnd - wStart) + 1);
    }
    return max;
}

console.log(longestSubstringK("eceba", 2)); // 3
console.log(longestSubstringK("aa", 1)); // 2