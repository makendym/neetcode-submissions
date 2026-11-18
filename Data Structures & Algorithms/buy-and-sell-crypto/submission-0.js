class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     * 
     * Base case : 
     * 1. you don't make profit going from a high day to a low day
     * 2. return 0 if there is no profit
     * 3. Does it have to be consecutive?
     * 4. can't buy and sell on the same day
     * Approach :
     *  use sliding window to see how much profit you can make
     *  l
     *     r 
     * [10,1,5,6,7,1,10]
     * 1. have a max profit
     * go through list - while l <= r
     *  if prices[l] > prices[r]:
     *      l++;
     *      r++;
     *  else:
     *      max = Math.max(max, prices[r] - prices[l] )
     *      r++
     * 
     * Space and Time Complexity:
     * 
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let l = 0;
        let r = 1;
        while(l <= r && r < prices.length){
            if(prices[l] > prices[r]){
                l++;
                // r++;
            }else{
                maxProfit = Math.max(maxProfit, prices[r] - prices[l]);
                r++;
            }
        }

        return maxProfit;

    }
}
