class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
         //use map to store nums while looking for the complement in the map
         let map = new Map();

         for(let i = 0; i < nums.length; i++){
            const complement = target - nums[i];
            if(map.has(complement)){
                return [map.get(complement), i]
            }
            map.set(nums[i], i);
         }

         return [-1,-1];

         //time: o(n) n = number of items in the nums array
         //space: o(n) n = number of items we add to our map
    }
}
