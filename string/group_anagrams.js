/*
49. Group Anagrams
https://leetcode.com/problems/group-anagrams/
https://www.youtube.com/watch?v=7Oyq2rC98-A&list=PLrClazTqVpJmY0TcHROxfaz62i31uiFzr&index=7
*/

const groupAnagrams = strs => {
    const map = {};
    for (let str of strs) {
        const key = [...str].sort().join('');
        if (!map[key]) {
            map[key] = [];
        }
        map[key].push(str);
    }
    return Object.values(map);
};
console.time();
console.log('obj', groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
console.timeEnd();

const groupAnagramObj = (strs) => {
    const sortedStrs = strs.map(word => word.split('').sort().join(''));
    const obj = {};
    for (let i = 0; i < strs.length; i++) {
        if (obj[sortedStrs[i]]) {
            obj[sortedStrs[i]].push(strs[i]);
        } else {
            obj[sortedStrs[i]] = [strs[i]];
        }
    }
    return Object.values(obj);
}
console.time();
console.log('obj', groupAnagramObj(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.timeEnd();

const groupAnagramMap = (strs) => {
    const sortedStrs = strs.map(word => word.split('').sort().join(''));
    const map = new Map();
    for (let i = 0; i < strs.length; i++) {
        if (map.has(sortedStrs[i])) {
            map.set(sortedStrs[i], [...map.get(sortedStrs[i]), strs[i]])
        } else {
            map.set(sortedStrs[i], [strs[i]])
        }
    }
    return [...map.values()];
}
console.time();
console.log('map', groupAnagramMap(["eat", "tea", "tan", "ate", "nat", "bat"]));//  best
console.timeEnd();

