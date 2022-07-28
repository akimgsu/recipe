/*
438. Find All Anagrams in a String
https://leetcode.com/problems/find-all-anagrams-in-a-string/
https://www.youtube.com/watch?v=Q-7-ErtYr5c&list=PLrClazTqVpJmY0TcHROxfaz62i31uiFzr&index=6
Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
Input: s = "cbaebabacd", p = "abc" Output: [0,6]
*/

const findCandidates = (str, len) => {
    const result = [];
    for (let i = 0; i <= str.length - len; i++) {
        result.push(str.slice(i, i + len));
    }
    return result;
}

const findAnagrams = (str, tStr) => {
    const result = []
    const tLength = tStr.length;
    const candidates = findCandidates(str, tLength);
    const sortedStrs = candidates.map(word => word.split('').sort().join(''));
    sortedStrs.forEach((elem, idx) => {
        if (elem === tStr) result.push(idx);
    });
    return result;
}
console.log(findAnagrams("cbaebabacd", "abc"));
console.log(findAnagrams("abab", "ab")); // [0,1,2]

const arrayValuesEqual = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

const findAnagram = (s, p) => {
    const sArr = new Array(26).fill(0);
    const pArr = new Array(26).fill(0);
    const result = [];

    for (let i = 0; i < p.length; i++) {
        const index = p.charCodeAt(i) % 26;
        pArr[index]++;
    }

    for (let i = 0; i < s.length; i++) {
        const index = s.charCodeAt(i) % 26;
        sArr[index]++;
        if (i > p.length - 1) {
            const headIndex = s.charCodeAt(i - p.length) % 26;
            sArr[headIndex]--;
        }
        if (i >= p.length - 1) {
            if (arrayValuesEqual(sArr, pArr)) result.push(i - (p.length - 1));
        }
    }
    return result;
}
//console.log(findAnagram2("cbaebabacd", "abc"));
// console.log(findAnagram("baa", "aa"));
/*
function shallowEqual(object1, object2) {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    if (keys1.length !== keys2.length) {
        return false;
    }
    for (let key of keys1) {
        if (object1[key] !== object2[key]) {
            return false;
        }
    }
    return true;
}

const findAnagram2 = (s, p) => {
    const sArr = s.split('');
    const pArr = p.split('');
    const pHash = {};
    const result = [];
    if (pArr.length > sArr.length) return null;

    for (let i = 0; i < pArr.length; i++) {
        const pVal = pArr[i];
        pHash[pVal] = pHash[pVal] ? pHash[pVal]++ : 1;
    }
    for (let i = 0; i < sArr.length; i++) {
        if (i + pArr.length - 1 > sArr.length) break;
        const tArr = sArr.slice(i, pArr.length + i);
        const tHash = {};
        for (let i = 0; i < tArr.length; i++) {
            const tVal = tArr[i];
            tHash[tVal] = tHash[tVal] ? tHash[tVal]++ : 1;
        }
        if (shallowEqual(tHash, pHash)) result.push(i);
    }
    return result;
}
*/
