/*
49. Group Anagrams
https://leetcode.com/problems/group-anagrams/
https://www.youtube.com/watch?v=7Oyq2rC98-A&list=PLrClazTqVpJmY0TcHROxfaz62i31uiFzr&index=7
*/

const groupAnagram = (strs) => {
    const sortedStrs = strs.map(word => word.split('').sort().join(''));
    const hash = {};

    for (let i = 0; i < strs.length; i++) {
        if (!hash[sortedStrs[i]]) {
            hash[sortedStrs[i]] = [strs[i]];
        } else {
            hash[sortedStrs[i]].push(strs[i]);
        }

    }
    return Object.values(hash);
}

console.log(groupAnagram(["eat", "tea", "tan", "ate", "nat", "bat"]));