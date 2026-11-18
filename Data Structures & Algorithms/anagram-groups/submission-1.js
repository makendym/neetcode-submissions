class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        //a string that a contains the exact characters

        let map = new Map();
        for(let word of strs){
            //use map of just the characters. ex: act :["act","hat", "cat"]
        //need to sort words based on char
            let arr = word.split("").sort().join(""); //["a","c","t"]
             console.log(arr);
            if(map.has(arr)){
                map.get(arr).push(word);
            }else{
                //add to map 
                map.set(arr,[word])
            }
        }

        let result = [];
       for(let group of map.values()){
            result.push(group);
       }

        //go through map and return that 2d array
        return result; 
    }
}
