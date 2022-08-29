/**
 * https://leetcode.com/problems/top-k-frequent-words/
 * 692. Top K Frequent Words
 */

 const topKFrequent = function(words, k) {
    const obj = {};
    for(const w of words){
        if(obj[w] == null) obj[w] = 0;
        obj[w]++;
    }
    const arr = Object
        .keys(obj)
        .sort((a,b)=>{
            const sorted = obj[b] - obj[a];
            if(sorted === 0) return a > b ? 1 : -1;
            return sorted
        })
    return arr.slice(0,k);
};
const topKFrequentArr = function(words, k) {
    const map = {};
    const arr = [];
    for(const w of words){
        if(map[w] == null) map[w] = 0;
        map[w]++;
    }
    for(const num in map){
        arr.push({num, cnt:map[num]});
    }
    return arr.sort((a,b) => {
        const sorted = b.cnt - a.cnt;
        if(sorted === 0) return a.name > b.name ? 1 : -1;
        return sorted;
    })
    .slice(0,k)
    .map(e => e.num)
};
// console.log(topKFrequent( ["i","love","leetcode","i","love","coding"], 2));
console.log(topKFrequent( ["the","day","is","sunny","the","the","the","sunny","is","is"], 4));
console.log(topKFrequent( ["the","day","is","sunny","the","the","the","sunny","is","is"] , 4));