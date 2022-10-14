
/*
139. Word Break https://leetcode.com/problems/word-break/#
https://www.youtube.com/watch?v=cQsbVsLHAUo&list=PLrClazTqVpJl6yQhoftw9qflztFavxYJT&index=5
Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.
Input: s = "leetcode", wordDict = ["leet","code"]
Output: true
Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
Output: false
*/
const wordBreadk = (s, wordDict) => {
    const table = new Array(s.length + 1).fill(false);
    table[0] = true;
    for (let i = 0; i < table.length; i++) {
        if (table[i] === false) continue;
        for (let j = i + 1; j < table.length; j++) {
            if (wordDict.includes(s.slice(i, j))) {
                table[j] = true;
            }
        }
    }
    console.log(table)
    return table[table.length - 1];
}
// console.log(wordBreadk('leetcode', ['leet', 'code']));
console.log(wordBreadk("applepenapple", ["apple", "pen"]));
// console.log(wordBreadk("catsandog", ["cats", "dog", "sand", "and", "cat"]));
/*
72. Edit Distance https://leetcode.com/problems/edit-distance/
Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.
https://www.youtube.com/watch?v=Fzct6wfrjSI&list=PLrClazTqVpJl6yQhoftw9qflztFavxYJT&index=4
Input: word1 = "horse", word2 = "ros"
Output: 3
Explanation: 
horse -> rorse (replace 'h' with 'r')
rorse -> rose (remove 'r')
rose -> ros (remove 'e')
*/
const bulidTable = (len1, len2) => {
    const table = [];
    for (let r = 0; r < len1 + 1; r++) {
        table[r] = [];
        for (let c = 0; c < len2 + 1; c++) {
            table[r].push(0);
        }
    }
    for (let r = 0; r < table.length; r++) {
        table[r][0] = r;
        for (let c = 0; c < table[r].length; c++) {
            table[0][c] = c;
        }
    }
    return table;
}
const minDistance = (word1, word2) => {
    const table = bulidTable(word1.length, word2.length);
    for (let r = 1; r < table.length; r++) {
        for (let c = 1; c < table[r].length; c++) {
            if (word1[r - 1] === word2[c - 1]) {
                table[r][c] = table[r - 1][c - 1];
            } else {
                table[r][c] = 1 + Math.min(table[r - 1][c], table[r][c - 1], table[r - 1][c - 1]);
            }
        }
    }
    console.log(table);
    return table[table.length - 1][table[0].length - 1]
}
console.log(minDistance('horse', 'ros'));
/**
https://leetcode.com/problems/longest-common-subsequence/#
1143. Longest Common Subsequence
Given two strings text1 and text2, return the length of their longest common subsequence. 
If there is no common subsequence, return 0.
A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted 
without changing the relative order of the remaining characters.
Input: text1 = "abcde", text2 = "ace" 
Output: 3  
Explanation: The longest common subsequence is "ace" and its length is 3.
 */
const lcb = function (txt, txt2) {
    const table = Array.from({ length: txt.length + 1 }, () => new Array(txt2.length + 1).fill(''));
    for (let i = 1; i < table.length; i++) {
        for (let j = 1; j < table[i].length; j++) {
            if (txt[i - 1] === txt2[j - 1]) {
                table[i][j] = table[i - 1][j - 1] + txt[i - 1];
            } else {
                const preChar = table[i - 1][j];
                const leftChar = table[i][j - 1]
                table[i][j] = preChar.length > leftChar.length ? preChar : leftChar;
            }
        }
    }
    return table[table.length - 1][table[0].length - 1];
}
console.log(lcb('abcd', 'ace'));
/*
118. Pascal's Triangle: https://leetcode.com/problems/pascals-triangle/
https://www.youtube.com/watch?v=LQUZYf-hr6M&list=PLrClazTqVpJl6yQhoftw9qflztFavxYJT&index=2
Given an integer numRows, return the first numRows of Pascal's triangle.
In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
*/
const p_triangle = (num) => {
    const triangle = [[1]];
    if (num < 1) return [];
    if (num === 1) return triangle;
    for (let i = 1; i < num; i++) {
        let prevRow = triangle[i - 1];
        const curRow = [];
        curRow.push(1)
        for (let j = 1; j < prevRow.length; j++) {
            curRow[j] = prevRow[j] + prevRow[j - 1];
        }
        curRow.push(1);
        triangle.push(curRow);
    }
    return triangle;
}
console.log(p_triangle(4));
/*
120. Triangle https://leetcode.com/problems/triangle/
https://www.youtube.com/watch?v=iNDXLhmV0iU&list=PLrClazTqVpJl6yQhoftw9qflztFavxYJT&index=3
Given a triangle array, return the minimum path sum from top to bottom.
For each step, you may move to an adjacent number of the row below. More formally, 
if you are on index i on the current row, you may move to either index i or index i + 1 on the next row.
Input: triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
Output: 11
*/
const minimumTotal = (triangle) => {
    const table = [];
    for (let row of triangle)
        table.push(new Array(row.length).fill(0));
    console.log('table::', table);
    table[0] = triangle[0];
    for (let row = 1; row < table.length; row++) {
        for (let col = 0; col < table[row].length; col++) {
            if (col === 0) {
                table[row][col] = table[row - 1][col] + triangle[row][col];
            } else if (col === table[row].length - 1) {
                table[row][col] = table[row - 1][table[row - 1].length - 1] + triangle[row][col];
            } else {
                table[row][col] = Math.min(table[row - 1][col], table[row - 1][col - 1]) + triangle[row][col];
            }
        }
    }
    return table;
}
const minimumTotal2 = (triangle) => {
    let result = 0;
    for (let row of triangle) {
        row.sort((a, b) => a - b);
        result += row[0];
    }
    return result;
}
console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));
// console.log(minimumTotal2([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));
