
// https://leetcode.com/problems/make-the-string-great/submissions/
// 1544. Make The String Great
const makeGood = function (s) {
    const st = [''];
    for (let c of s) {
        const top = st[st.length - 1];
        // if (Math.abs(c.charCodeAt() - top.charCodeAt()) === 32) {
        if (top.toLowerCase() === c.toLowerCase() && top !== c) {
            st.pop();
        } else {
            st.push(c);
        }
    }
    return st.join('');
};
console.log(makeGood('abBAcC'));
console.log(makeGood('leEeetcode'));

const bruteF = (h) => {
    let count = 0;
    for (let i = 0; i < h + 1; i++) {
        for (let j = 0; j < 60; j++) {
            for (let k = 0; k < 60; k++) {
                const str = `${i}:${j}:${k}`;
                if (str.includes('3')) count += 1;
            }
        }
    }
    return count;
}
console.log(bruteF(5));

