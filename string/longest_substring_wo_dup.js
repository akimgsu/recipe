/**
 * https://www.youtube.com/watch?v=sydRChyHRxk&list=PLrClazTqVpJmY0TcHROxfaz62i31uiFzr&index=4
 * 3. Longest Substring Without Repeating Characters
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 */


const longestSubstringWOrepeat = (str) => {
    let s = 0;
    let max = 0;
    const map = new Map();
    for (let e = 0; e < str.length; e++) {
        let r = str[e];
        if (map.get(r)) {
            map.set(r, map.get(r) + 1);
        } else {
            map.set(r, 1);
        }
        while (map.get(r) > 1) {
            let l = str[s];
            if (map.get(l) > 1) {
                map.set(l, map.get(l) - 1);
            } else {
                map.delete(l);
            }
            s++;
        }
        max = Math.max(max, (e - s) + 1)
    }
    return max;
}

const ls = (str) => {
    let s = 0;
    let max = 0;
    const maxStr = [];
    const map = new Map();

    for (let e = 0; e < str.length; e++) {
        let r = str[e];
        if (map.get(r)) {
            map.set(r, map.get(r) + 1);
        } else {
            map.set(r, 1);
        }
        while (map.get(r) > 1) {
            let l = str[s];
            if (map.get(l) > 1) {
                map.set(l, map.get(l) - 1);
            } else {
                map.delete(l);
            }
            if (max === (e - s)) maxStr.push(str.slice(s, e))
            s++;
        }
        max = Math.max(max, (e - s) + 1)
    }
    console.log(maxStr);

    return max;
}

console.log(ls("abcabcbb")); // 3
console.log(longestSubstringWOrepeat("bbbbb")); // 1
console.log(longestSubstringWOrepeat("pwwkew")); // 3

