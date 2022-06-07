/*
49. Group Anagrams
https://leetcode.com/problems/group-anagrams/
https://www.youtube.com/watch?v=7Oyq2rC98-A&list=PLrClazTqVpJl1yRzqUmxrYO-KKiMvN7Pw&index=9
*/


const groupAnagram = (strs) => {
    const sorted = strs.map(word => word.split('').sort().join(''));
    const hash = {};

    for (let i = 0; i < strs.length; i++) {
        if (!hash[sorted[i]]) {
            hash[sorted[i]] = [strs[i]];
        } else {
            hash[sorted[i]].push(strs[i]);
        }
    }
    return Object.values(hash);

}

console.log(groupAnagram(["eat", "tea", "tan", "ate", "nat", "bat"]))