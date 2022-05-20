/*
20. Valid Parentheses 
https://leetcode.com/problems/valid-parentheses/#
https://www.youtube.com/watch?v=HhBo1fckgBM&list=PLrClazTqVpJnoLCprxP1yIjIzAU8HINcY&index=9
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Input: s = "()"
Output: true
*/
const isValid = (s) => {
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





