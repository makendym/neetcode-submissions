class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        //add numbers to a set 
        let set = new Set();

        for(let num of nums){
            if(set.has(num)){
                return true;
            }
            set.add(num);
        }
    return false
    }
}
