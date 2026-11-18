class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        /**
         * set array with 26 characters or can reverse the word and compare
         */
        if(s.length !== t.length){
            return false;
        }

        let arr = new Array(26).fill(0);
        //add/ remove char count from array
        for(let i = 0; i < s.length; i++){
            arr[s.charCodeAt(i) - "a".charCodeAt(0)]++;
            arr[t.charCodeAt(i) - "a".charCodeAt(0)]--;
        }
        //checking if there is any numbers greater than 0
        for(let i of arr){
            if(i > 0){
                return false;
            }
        }

        return true;
    }
}
