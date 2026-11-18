class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        // s = "abcabcbb"
        /**
                L
                      R 
            a b c b a k h n m
            //increment left 
            L
            R 
            a b c a b c b b
         /
         */

        let maxSubtring = 0; //3
        let currentSubtring = 0; // 2
        let leftPointer = 0;
        let rightPointer = 0;
        let set = new Set(); // c, a , b

        while (leftPointer <= rightPointer && leftPointer < s.length && rightPointer < s.length) {
            if(set.has(s[rightPointer])){
                maxSubtring = Math.max(currentSubtring,maxSubtring);
                currentSubtring--;
                set.delete(s[leftPointer]);
                leftPointer++;
            }else{
                set.add(s[rightPointer]);
                currentSubtring++;
                rightPointer++;
            }
        }
        return Math.max(currentSubtring,maxSubtring);
    }
}
