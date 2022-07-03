function getMaxFreqDeviation(s) {
    // Write your code here
    const hash = {};
    for (let i = 0; i < s.length; i++) {
        const val = s[i];
        if (hash[val]) {
            hash[val]++;
        } else {
            hash[val] = 1;
        }
    }
}