/**
 * https://www.youtube.com/watch?v=M04IJUf_jEQ&list=PLrClazTqVpJmY0TcHROxfaz62i31uiFzr
 * https://leetcode.com/problems/rotate-string/submissions/
 * Brutal or tricky with linear (O(n))
 */


const stringRotate = (origin, goal) => {
    if (origin.length !== goal.length) return false;
    if (origin.length === 0 && origin.length === 0) return ture;
    const temp = origin + origin;

    return temp.includes(goal);
}

const origin = "abcde";
const goal = "cdeab";
console.log(stringRotate(origin, goal));