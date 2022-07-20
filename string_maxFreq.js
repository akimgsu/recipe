/*
Amazon is developing a string processing library for some of it's NLP-related use cases. You are tasked with developing a service that takes in a string consisting of lower case English letters and returns an integer.

More formally, given a string, we define the frequency deviation of a substring as the differnece between the maximum and the minimum frequencies of the characters in the substring. A substring of a string is formed by any contiguous segment of the string. For example, given 'bbacccc', the character appearing most frequently is 'c' with 4 occurrences. The character that appears the fewest times is 'a' with 1 occurrence. The frequency deviation of the entire string is 4 - 1 = 3.

Given a string s, representing the input string, find the maximum possible frequency deviation of any substring of the string.

Note: A substring of a string is formed by any contiguous segment of the string.

Example:
s is "aabb"

All distinct substrings are considered below:

    The segment "a" has a frequency deviation of 0. "a" occurs most and least frequently. Both values are 1, and 1 - 1 = 0.
    The segment "b" has a frequency deviation of 0,
    The segment "ab" has a frequency deviation of 0.
    The segment "aabb" has a frequency deviation of 0.
    The segment "aab" has a frequency deviation of 1.
    The segment "abb" has a frequency deviation of 1
*/


function getMaxFreqDeviation(s) {
    const sofar = new Map();
    for (let wEnd = 0; wEnd < s.length; wEnd++) {
        let rChar = s[wEnd];
        if (sofar.get(rChar)) sofar.set(rChar, sofar.get(rChar) + 1);
        else sofar.set(rChar, 1);
    }
    return Math.max(...sofar.values()) - Math.min(...sofar.values());
}
console.log(getMaxFreqDeviation('a')); // 0
console.log(getMaxFreqDeviation('b')); // 0
console.log(getMaxFreqDeviation('aabb')); // 0
console.log(getMaxFreqDeviation('aab')); // 1
console.log(getMaxFreqDeviation('bbacccc')); // 3