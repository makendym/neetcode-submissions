class Solution {
    /**
     * @param {number} low
     * @param {number} high
     * @return {number}
     */
    countOdds(low, high) {
        let length = high - low + 1;
        let count = Math.floor(length / 2);
        if (length % 2 === 1 && low % 2 === 1) {
            count++;
        }
        return count;
    }
}
