class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        //create map 
        let sets = new Set();
        // store nums in map 
        for(let num of nums){
             // return true if seen
            if(sets.has(num)){
                return true;
            }
            //add to set otherwise
            sets.add(num);
        }
       
        //else return false 
        return false;
    }
}
