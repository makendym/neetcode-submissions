class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // Early exit if lengths differ
        if (s.length !== t.length) return false;

        // Frequency array for 26 lowercase letters
        let arr = new Array(26).fill(0);

        // Count up for s and down for t
        for (let i = 0; i < s.length; i++) {
            arr[s.charCodeAt(i) - "a".charCodeAt(0)]++;
            arr[t.charCodeAt(i) - "a".charCodeAt(0)]--;
        }

        // If all counts are zero, it's an anagram
        for (let count of arr) {
            if (count !== 0) return false;
        }
        return true;
    }
}
