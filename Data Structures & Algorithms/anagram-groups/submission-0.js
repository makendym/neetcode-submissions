class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        //map with a sorted key and an array as the value

        //go throgh array
        //if map.has(sorted-> str) 
            // add to arr
        //else new key
        //go through final map and add to result array 

        let map = new Map();
        let result = new Array();
        for(let i = 0; i < strs.length; i++){
            let sortedKey = strs[i].split("").sort().join("");
            if(!map.has(sortedKey)){
               map.set(sortedKey, []);
            }
            map.get(sortedKey).push(strs[i]);
        }
        console.log(map);
        for(const arr of map.values()){
            result.push(arr);
        }

        return result;
    }
}
