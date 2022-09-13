/**
 * Greedy - local & global minimum
 * https://leetcode.com/problems/maximum-units-on-a-truck/
 * 1710. Maximum Units on a Truck
 */

const maximumUnits = function (boxTypes, truckSize) {
    let res = 0;
    boxTypes.sort((a, b) => b[1] - a[1]);
    for (let idx = 0; ;) {
        if (idx >= boxTypes.length) break;
        let [box, units] = boxTypes[idx];
        if (box === 0) { idx++; continue; }
        if (truckSize <= box) {
            res += truckSize * units;
            break;
        }
        truckSize -= box;
        res += box * units;
        idx++;
    }
    return res;
};
maximumUnits([[1, 3], [2, 2], [3, 1]], 2);
// maximumUnits([[1, 3], [5, 5], [2, 5], [4, 2], [4, 1], [3, 1], [2, 2], [1, 3], [2, 5], [3, 2]], 35);