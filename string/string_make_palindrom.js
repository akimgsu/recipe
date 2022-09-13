function checkPalindrome(s) {
    const len = s.length;
    for (let i = 0; i < len / 2; i++) {
        if (s[i] !== s[len - 1 - i]) return false;
    }
    return true;
}

function minSwapsRequired(s) {
    // Write your code here
    if
}