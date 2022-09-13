/**
 * String matching - KMP or Robin Kuup(Rolling hash)
 * https://leetcode.com/problems/implement-strstr/ 
 * 28. Implement strStr()
 */

const strIncludes = function (haystack, needle) {
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            const temp = haystack.substring(i, i + needle.length);
            if (temp === needle) return i;
        }
    }
    return -1;
};

console.log(strIncludes('hello', 'll'));

/**
 * https://leetcode.com/problems/rotate-string/  796. Rotate String
 */

var rotateString = function (s, goal) {
    if (s.length !== goal.length) return false;
    if (s.length === 0 && goal.length === 0) return true;
    const temp = s + s;
    return temp.includes(goal);
};