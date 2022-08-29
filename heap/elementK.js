/**
 * https://leetcode.com/problems/top-k-frequent-elements/
 * 347. Top K Frequent Elements
 */


const topKFrequent = function(nums, k) {
    const map = {};
    const arr = [];
    for (const n of nums) {
        if (!map[n]) map[n] = 0;
        map[n]++;
    }
    for (const num in map) {
        arr.push({ num, cnt: map[num] });
    }
    return arr.sort((a,b) => b.cnt - a.cnt)
    .slice(0,k)
    .map(e => e.num)
};

topKFrequent([7,7,7,7,7,7,1,1,1,2,2,3,1,4,4,4], 3)