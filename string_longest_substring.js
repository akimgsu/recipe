/**
 * https://www.youtube.com/watch?v=lz8lyKKZYPY&list=PLrClazTqVpJmY0TcHROxfaz62i31uiFzr&index=2
 * https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters
 * Brutal or 
 */

const temp = (s, k) => {
    let wStart = 0;
    const sofar = new Map();
    let max = 0;

    for (let wEnd = 0; wEnd < s.length; wEnd++) {
        let rChar = s[sEnd];

        if (!sofar.get(rChar)) sofar.set(rChar, 1);
        else sofar.set(rChar, sofar(rChar) + 1);

        while (sofar.size > k) {
            let lChar = s[wStart];
            if (sofar.get(lChar) > 1) sofar.set(lChar, sofar.get(lChar) - 1);
            else sofar.delete(lChar);
            wStart++;
        }
        max = Math.max(max, (sEnd - wStart) + 1);
    }
    return max;

}

const longestSubstringK = (s, k) => {
    let windowStart = 0;
    const sofar = new Map();
    let max = 0;
    for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
        let rightChar = s[windowEnd];

        if (!sofar.get(rightChar)) sofar.set(rightChar, 1);
        else sofar.set(rightChar, sofar.get(rightChar) + 1);

        while (sofar.size > k) {
            let leftChar = s[windowStart];
            if (sofar.get(leftChar) > 1) sofar.set(leftChar, sofar.get(leftChar) - 1);
            else sofar.delete(leftChar);
            windowStart++;
        }
        max = Math.max(max, (windowEnd - windowStart) + 1);
    }
    return max;
}

console.log(longestSubstringK("eceba", 2));