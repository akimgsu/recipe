/**
 * 1578. Minimum Deletion Cost to Avoid Repeating Letters
 * https://leetcode.ca/all/1578.html
 */

const minDelCost = (str, arr) => {
    let res = 0;
    const t = str.split('');
    for (let i = 0; i < arr.length; i++) {
        if (t[i - 1] === t[i]) {
            res += Math.min(arr[i - 1], arr[i]);
            if (arr[i - 1] > arr[i]) [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]]
        }
    }
    return res;
}
console.log(minDelCost('abaac', [1, 2, 3, 4, 5]));
console.log(minDelCost('bbbaaac', [3, 1, 2, 1, 5, 3, 2]));