/*
https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/
*/
const minRemoveToMakeValid = (s) => {
    const arr = s.split('');
    const stack = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ')') {
            if (stack.length) stack.pop();
            else delete arr[i];
        } else if (arr[i] === '(') {
            stack.push(i);
        }
    }
    for (let i = 0; i < stack.length; i++) {
        delete arr[stack[i]];
    }
    return arr.join('');
}
// console.log(minRemoveToMakeValid('lee(t(c)o)de)'));
// console.log(minRemoveToMakeValid('))(('));
console.log(minRemoveToMakeValid('))((a)'));

/*
20. Valid Parentheses 
https://leetcode.com/problems/valid-parentheses/#
https://www.youtube.com/watch?v=HhBo1fckgBM&list=PLrClazTqVpJnoLCprxP1yIjIzAU8HINcY&index=9
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





