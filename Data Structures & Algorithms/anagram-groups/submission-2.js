class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        //a string that a contains the exact characters

        let map = new Map();
        for (let word of strs) {
            // build frequency count for 26 letters
            let count = new Array(26).fill(0);
            for (let char of word) {
                count[char.charCodeAt(0) - 97]++; // 'a' -> 0, 'z' -> 25
            }

            // use the count array as a unique key
            let key = count.join("#"); // join with separator to avoid ambiguity
            console.log(key);
            if (map.has(key)) {
                map.get(key).push(word);
            } else {
                map.set(key, [word]);
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
