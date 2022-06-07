/*
202. Happy Number
https://leetcode.com/problems/happy-number/
https://www.youtube.com/watch?v=CUoAon6Ef-g&list=PLrClazTqVpJkW4VpUE_2vDQLFIvfQIkZF&index=4
*/

const getNum = num => {
    let total = 0;
    while (num !== 0) {
        const lastDigit = num % 10;
        num = Math.floor(num / 10);
        total += Math.pow(lastDigit, 2);
    }
    return total;
}
var isOne = n => {
    let fast = n;
    let slow = n;
    while (true) {
        fast = getNum(getNum(fast));
        slow = getNum(slow);
        if (fast === slow) {
            return fast === 1;
        }
    }
}

console.log(isOne(19));
console.log(isOne(2));