/**
 * https://leetcode.com/problems/valid-palindrome/ 125. Valid Palindrome
 */
const isPalindrome = (s) => {
    const regex = /[^a-z0-9]/g;
    const d = s.toLowerCase().replace(regex, '');
    for (let i = 0; i <= Math.floor(d.length / 2); i++) {
        if (d[i] !== d[d.length - (i + 1)]) return false;
    }
    return true;
};
// console.log(isPalindrome('aba'));
// console.log(isPalindrome('A man, a plan, a canal: Panama'));

/**
 * https://leetcode.com/problems/valid-palindrome-ii/ 680. Valid Palindrome II
 */

const isDromeDelOne = (s) => {
    let r = s.length - 1;
    let l = 0;
    while (l < r) {
        if (s[l] !== s[r]) {
            return isPd(cut(s, l)) || isPd(cut(s, r));
        }
        r--;
        l++;
    }
    return true;
}
const cut = (s, i) => s.substring(0, i) + s.substring(i + 1);
const isPd = (s) => s === s.split('').reverse().join('');

console.log(isDromeDelOne('aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga'));
/*
aguokepatgbnvfqmgml                                                                                   
aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga
                                                                                  lmgmqfvnbgtapekouga
*/