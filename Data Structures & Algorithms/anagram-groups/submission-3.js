class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        //1#0#.. : [act, cat]
        //aht : [hat]
        //opst: [stops, pots, tops]
        //map O(m*n)  
        //[1,0,1,0,0,0,0,0,0,0,0,0,1,0]
        //[1,0,1,0,0,0,0,0,0,0,0,0,1,0]
        //["act","pots","tops","cat","stop","hat"]

        let map = new Map();
        for(let word of strs){
            let count = new Array(26).fill(0);
            for(let letter of word){
                count[(letter.charCodeAt(0) - 'a'.charCodeAt(0))]++;
            }
            let key = count.join("#");

            if(map.has(key)){
                map.get(key).push(word);
            }else{
                 map.set(key,[word])
            }
             
        }
        return Array.from(map.values());
    }
}
