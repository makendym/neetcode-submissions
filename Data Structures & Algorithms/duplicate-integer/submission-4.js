class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        //search for duplicates
        //we can sort 
        //use a 2 pointers
        //or use a map so it's only one pass
        const set = new Set(); //{1,2,3}
        for(const n of nums){
            if(set.has(n)) return true;
            set.add(n);
        }

        return false;
    }
}
