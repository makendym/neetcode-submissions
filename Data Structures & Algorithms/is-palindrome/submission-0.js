class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const cleaned = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        const reversed = cleaned.split("").reverse().join("");
        return cleaned === reversed;
    }
}
