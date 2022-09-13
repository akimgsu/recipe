/**
 * https://leetcode.com/problems/single-number/
 * 136. Single Number
 * XOR(^)   1 0 1 0
 *          0 0 1 1
 *          1 0 0 1
 */


const singleNumberXor = function (nums) {
    // let dummy = 0;
    // for (const n of nums) {
    //     dummy ^= n;
    // }
    // return dummy;
    return nums.reduce((a, c) => a ^ c);
};
const singleNumberSet = function (nums) {
    const sn = new Set();
    for (const n of nums) {
        if (sn.has(n)) sn.delete(n);
        else sn.add(n);
    }
    // console.log([...sn][0]);
    return [...sn][0];
};

/**
 * https://leetcode.com/problems/single-number-ii/submissions/
 * 137. Single Number II
 */
const singleNumber3 = function (nums) {
    const sn = {};
    for (const n of nums) {
        if (!sn[n]) sn[n] = 0;
        sn[n]++;
    };
    const res = Object.keys(sn).filter(e => sn[e] === 1);
    // console.log(parseInt(temp[0]));
    return parseInt(res[0]);
};


// console.log(singleNumberSet([2, 2, 1]));
// console.log(singleNumberXor([2, 2, 1]));
console.log(singleNumber3([2, 2, 3, 2]));

