class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     * 
     * Base Case:
     * height length always >= 2
     * 
     * Approach:
     *  move right when its less than left 
     *  move left when its less than right
     *  [1,7,2,5,4,7,3,6]
     *     l         r.  
     *  max = 7, 36
     *   7 - 0 = 7 * 1 = 7
     *   7 - 1 = 6 * 6 = 36
     *   7 - 2 = 5 * 3 = 15
     *  
     *  formula = Distance(r - l) * lowest height of the two
     *  max = 0
     *  while l < r
     *      range  = r - l
     *      if(height[r] <= height[l])
     *      max = Math.max(height[r] * range, max) 
     *      r--
     *      else
     *      max = Math.max(height[l] * range, max)
     *      l++
     * return max
     * Space and Time complexity
     * Time: O(n) visiting the each height atleast once
     * Space: O(1) not using extra space
     */
    maxArea(heights) {
        let max = 0;
        let l = 0; 
        let r = heights.length-1;
    //= [1,7,2,5,4,7,3,6]

        while(l < r){
            let range = r - l; //7 - 0 = 
            if(heights[r] <= heights[l]){
                max = Math.max(heights[r] * range, max);
                r--;
            }else{
                max = Math.max(heights[l] * range, max);
                l++;
            }
        }
        return max;
    }
}
