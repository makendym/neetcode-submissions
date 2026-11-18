class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map(); // map that contains all the anagrams
        //go through the list 
        for(let word of strs){
            let key = new Array(26).fill(0);
            for(let i = 0; i< word.length; i++){
                key[word.charCodeAt(i) - "a".charCodeAt(0)]++;
            }
            let code = key.join('#');
            console.log(code);
            if(map.has(code)){
                map.get(code).push(word);
            }else{
                map.set(code,[word]);
            }
        }

        return Array.from(map.values());

    }
}
