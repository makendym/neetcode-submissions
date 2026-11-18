class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     * Base case:
     * 1. i,j,k indices are all distinct
     * 2. all have to add up to 0 
     * 3. length always greater than 3
     * 
     * Approach:
     * two pointers
     * 
     *   i 
     *         j
     *               k
     * [-1,0,1,2,-1,-4]
     * 1st : (-1) + 0 + 1 = 0
     * 2nd : 0 + 1 + 2 = 3
     * 3nd : 0 + 1 + (-1) = 0 same
     * 4.  : 0 + 1 + (-4) = -3
     * 5.  : 
     * 
     * 
     * loop with I 
     *   loop with I + 1 = j
     *       target = (i + j ) - 0
     *    save target 
     *   loop with j + 1 = k to see if we find target
     *      store indices if it matches target
     *      i,j,k to result 
     *   return result 
     * Time and Space Complexity
     * Time  :O(n^3)
     * Space :O(m) Where m is the number of triplets and n is the length of the given array.
     */
    threeSum(nums) {
        let result = new Set();
        nums.sort((a,b) =>  a - b)
        for(let i  = 0; i < nums.length; i++){
            for(let j = i+1; j < nums.length; j++){
                for(let k = j+1; k < nums.length; k++){
                    if(nums[i] + nums[j] + nums[k] === 0){
                    result.add(JSON.stringify([nums[i], nums[j], nums[k]]));
                    }
                }
            }
        }
        return [...result].map((item) => JSON.parse(item));
    }
}
