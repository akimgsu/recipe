/**
 * https://www.youtube.com/watch?v=Z_-hZm-4WfA&list=PLDV-cCQnUlIYjwJ_b-f8Z0OQlIqKpMkDr&index=3
 * 205. Isomorphic Strings
https://leetcode.com/problems/isomorphic-strings/
 */
const isIsomorphic = function (s, t) {
    if (s.length !== t.length) return false;
    let result = true;
    const h1 = {};
    const h2 = {};
    for (let i = 0; i < s.length; i++) {
        if (h1[s[i]] !== h2[t[i]]) {
            return result = false;
        } else {
            h1[s[i]] = i;
            h2[t[i]] = i;
        }
    }
    return result;
};

// console.log(isIsomorphic('egg', 'add'));
// console.log(isIsomorphic('foo', 'bar'));
// console.log(isIsomorphic('badc', 'baba')); // false

/**
https://leetcode.com/problems/first-unique-character-in-a-string/
387. First Unique Character in a String
 */
const firstUniqChar = (s) => {
    const h = [];
    for (let i = 0; i < s.length; i++) {
        if (h[s[i]]) {
            h[s[i]]++;
        } else {
            h[s[i]] = 1;
        }
    }
    for (let i = 0; i < s.length; i++) {
        if (h[s[i]] === 1) return i;
    }
    return -1;
};
// console.log(firstUniqChar('leetcode'));
// console.log(firstUniqChar('loveleetcode'));

/*
https://leetcode.com/problems/word-pattern/
290. Word Pattern
*/
const wordPattern = function (pattern, s) {
    const arr = s.split(' ');
    let result = true;
    if (arr.length !== pattern.length) return false;
    const h = {};
    // const h2 = [];
    for (let i = 0; i < pattern.length; i++) {
        if (h[pattern[i]]) {
            if (h[pattern[i]] !== arr[i]) return false;
        } else {
            if (Object.values(h).indexOf(arr[i]) > -1) {
                return false;
            } else {
                h[pattern[i]] = arr[i];
            }
        }
    }
    return result;
};
// console.log(wordPattern('abba', 'dog cat cat dog'));
// console.log(wordPattern('abba', 'dog cat cat fish'));
// console.log(wordPattern('abba', 'dog dog dog dog'));

/*
https://leetcode.com/problems/valid-anagram/
242. Valid Anagram
*/
const isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
    const h = {};
    for (let i = 0; i < s.length; i++) {
        if (h[s[i]]) {
            h[s[i]]++;
        } else {
            h[s[i]] = 1;
        }
    }
    for (let i = 0; i < t.length; i++) {
        if (h[t[i]]) {
            h[t[i]]--;
        } else {
            return false;
        }
    }
    if (Object.values(h).every(el => el !== 0)) return false;
    return true;
};
const isAnagram2 = function (s, t) {
    if (s.length !== t.length) return false;
    const s2 = s.split('').sort().join('');
    const t2 = t.split('').sort().join('');
    for (let i = 0; i < s2.length; i++) {
        if (s2[i] !== t2[i]) return false;
    }
    return true;
};
console.log(isAnagram('anagram', 'nagaram'));
// console.log(isAnagram('rat', 'car'));
