class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        //  s = "racecar", t = "carrace" 
        if(s.length !== t.length) return false;
        
        let arr = new Array(26).fill(0);
       
        // add the characters to empty alphabet array based on 26 char number
       for(let i = 0; i < s.length; i++){
        arr[(s.charCodeAt(i) - "a".charCodeAt(0))]++;
        arr[(t.charCodeAt(i) - "a".charCodeAt(0))]--;
       }
 
        // If all counts are zero, it's an anagram
        for (let count of arr) {
            if (count !== 0) return false;
        }
        return true;
    }
}
