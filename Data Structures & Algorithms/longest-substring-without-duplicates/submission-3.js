class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        // s = "abcabcbb"
        /**
         * 
         * base: 
         * 
         * approach 
         * 
         * complexity
            L
            R 
            a b c b a k h n m
            //increment left 
                L
                    R 
            a b c a b c b b
            r: 4
            l: 2
            curr: 0
            max: 3
            Map: a: 3 , b: 4, c: 2

         /
         */

        let maxSubtring = 0; // 2
        let currentSubtring = 0; //2 
        let leftPointer = 0;
        let rightPointer = 0;
        let map = new Map(); // a:0 , b: 1, c:2, 
        /**
         *      L
                    R 
            a b c a b c b b
         */
        while (leftPointer <= rightPointer && rightPointer < s.length) {
            if (map.has(s[rightPointer])) {
                // ✅ don’t move left backwards
                leftPointer = Math.max(leftPointer, map.get(s[rightPointer]) + 1);
                //recompute current substring length correctly
                currentSubtring = rightPointer - leftPointer;
                // update last seen index
                map.set(s[rightPointer], rightPointer);
                // expand right
                rightPointer++;
                // add the new character into the count
                currentSubtring++;
            } else {
                // standard expansion case
                map.set(s[rightPointer], rightPointer);
                currentSubtring++;
                rightPointer++;
            }

            // always update max after each step
            maxSubtring = Math.max(currentSubtring, maxSubtring);
        }
        return Math.max(currentSubtring, maxSubtring);
    }
}
