/**
 * https://www.youtube.com/watch?v=sydRChyHRxk&list=PLrClazTqVpJmY0TcHROxfaz62i31uiFzr&index=4
 * 3. Longest Substring Without Repeating Characters
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 */


const longestSubstringWOrepeat = (s) => {
    let wStart = 0;
    const sofar = new Map();
    let max = 0;
    for (let wEnd = 0; wEnd < s.length; wEnd++) {
        let rightChar = s[wEnd];

        if (!sofar.get(rightChar)) sofar.set(rightChar, 1);
        else sofar.set(rightChar, sofar.get(rightChar) + 1);

        while (sofar.get(rightChar) > 1) {
            let leftChar = s[wStart];
            if (sofar.get(leftChar) > 1) sofar.set(leftChar, sofar.get(leftChar) - 1);
            else sofar.delete(leftChar);
            wStart++;
        }
        max = Math.max(max, (wEnd - wStart) + 1);
    }
    return max;
}

console.log(longestSubstringWOrepeat("pwwkew"));