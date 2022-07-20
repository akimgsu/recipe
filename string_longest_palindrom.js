/*
5. Longest Palindromic Substring
https://leetcode.com/problems/longest-palindromic-substring/
https://www.youtube.com/watch?v=fhD2pdqAt4s&list=PLrClazTqVpJmY0TcHROxfaz62i31uiFzr&index=5
*/

const getDrome = (left, right, s) => {
    while (left >= 0 && right < s.length) {
        if (s[left] !== s[right]) break;
        left--;
        right++;
    }
    return [left + 1, right];
}

const longestPalindrome = (s) => {
    let max = [0, 1]
    for (let i = 0; i < s.length; i++) {
        let even = getDrome(i - 1, i, s);
        let odd = getDrome(i - 1, i + 1, s);
        let curMax = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
        max = max[1] - max[0] > curMax[1] - curMax[0] ? max : curMax;
    }
    return s.slice(max[0], max[1]);
}

console.log(longestPalindrome("abba"));
console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));