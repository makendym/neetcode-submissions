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
     *       i 
     *          j
     *              k
     * [-4, -1,-1,0,1,2]
     * 
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
nums.sort((a, b) => a - b);
        const res = [];

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > 0) break;
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            let l = i + 1;
            let r = nums.length - 1;
            while (l < r) {
                const sum = nums[i] + nums[l] + nums[r];
                if (sum > 0) {
                    r--;
                } else if (sum < 0) {
                    l++;
                } else {
                    res.push([nums[i], nums[l], nums[r]]);
                    l++;
                    r--;
                    while (l < r && nums[l] === nums[l - 1]) {
                        l++;
                    }
                }
            }
        }
        return res;
    }
}
