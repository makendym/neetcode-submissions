class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        /**
         * add to map and count  using pointer - s adds and t removes
         * array of char would help with space
         * size 26 []
         */
        if(s.length !== t.length) return false; //false not same size

        const arr = new Array(26).fill(0); // fill arr with 0

        for(let c = 0; c < s.length; c++){
            arr[s.charCodeAt(c) - 'a'.charCodeAt(0)]++; //add 1 
            arr[t.charCodeAt(c)- 'a'.charCodeAt(0)]--; // remove 1
        }

        for(const i of arr){
            if(i !== 0) return false; //return false if not filled with zeros
        }
        return true;
    }
}
