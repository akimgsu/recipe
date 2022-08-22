/*
https://leetcode.com/problems/top-k-frequent-words/
692. Top K Frequent Words
*/
const topKFrequentWord = function (words, k) {
    const result = [];
    const sub = [];
    const h = {};
    // for (const w of words) {
    //     if (h[w]) {
    //         h[w]++;
    //     } else {
    //         h[w] = 1;
    //     }
    // }
    words.map(e => {
        if (h[e]) h[e]++;
        else h[e] = 1;
    });
    for (const prop in h) {
        sub.push([prop, h[prop]])
    };
    sub.sort().sort((a, b) => b[1] - a[1]).slice(0, k).map(e => result.push(e[0]));
    console.log(h);
    return result;
};
console.log(topKFrequentWord(["i", "love", "leetcode", "i", "love", "coding"], 2)) // ["i","love"]
console.log(topKFrequentWord(["i", "love", "leetcode", "i", "love", "coding"], 3)) // ["i","love"]

/*
https://leetcode.com/problems/top-k-frequent-elements/
347. Top K Frequent Elements
*/
const topKFrequent = function (nums, k) {
    let result = [];
    const subResult = [];
    const h = {};
    for (const k of nums) {
        if (h[k]) {
            h[k]++;
        } else {
            h[k] = 1;
        }
    }
    for (const prop in h) {
        subResult.push([parseInt(prop), h[prop]]);
    }
    subResult.sort((a, b) => b[1] - a[1]).slice(0, k).map(el => result.push(el[0]));
    return result;
};

// console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2))
// console.log(topKFrequent([1, 2], 2)) // 