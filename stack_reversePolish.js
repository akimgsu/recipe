/*
150. Evaluate Reverse Polish Notation 
https://leetcode.com/problems/evaluate-reverse-polish-notation/#
https://www.youtube.com/watch?v=3IO_134DZYA&list=PLrClazTqVpJnoLCprxP1yIjIzAU8HINcY&index=7
Evaluate the value of an arithmetic expression in Reverse Polish Notation.
Valid operators are +, -, *, and /. Each operand may be an integer or another expression.
Note that division between two integers should truncate toward zero.
Input: tokens = ["2","1","+","3","*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9
Input: tokens = ["4","13","5","/","+"]
Output: 6
Explanation: (4 + (13 / 5)) = 6
*/
const evalRPN = (tokens) => {
    const stack = [];
    const operators = {
        '+': (num, num2) => num + num2,
        '-': (num, num2) => num - num2,
        '*': (num, num2) => num * num2,
        '/': (num, num2) => Math.trunc(num / num2)
    }
    for (let token of tokens) {
        if (operators[token]) {
            let num2 = stack.pop();
            let num = stack.pop();
            stack.push(operators[token](num, num2))
        } else {
            stack.push(parseInt(token))
        }
    }
    return stack.pop();
}
console.log(evalRPN(["4", "13", "5", "/", "+"]));