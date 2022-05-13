/*
20. Valid Parentheses 
https://leetcode.com/problems/valid-parentheses/#
https://www.youtube.com/watch?v=HhBo1fckgBM&list=PLrClazTqVpJnoLCprxP1yIjIzAU8HINcY&index=9
*/
const isValid2 = (s) => {
    const stack = [];
    const parens = '() {} []';
    let i = 0;
    while (i < s.length) {
        stack.push(s[i])
        i++;
        let open = stack[stack.length - 2];
        let closed = stack[stack.length - 1];
        let patParens = open + closed;
        if (parens.includes(patParens)) {
            stack.pop();
            stack.pop();
        }
    }
    return stack.length === 0;
}
console.log(isValid('[()]'));

const isValid = (s) => {
    const stack = [];
    const sample = '() {} []';
    for (let i = 0; i < s.length; i++) {
        stack.push(s[i]);
        const open = stack[stack.length - 2];
        const close = stack[stack.length - 1];
        const patParentheses = open + close;
        if (sample.includes(patParentheses)) {
            stack.pop();
            stack.pop();
        }
    }
    return stack.length === 0;
};

console.log(isValid2('){'));
