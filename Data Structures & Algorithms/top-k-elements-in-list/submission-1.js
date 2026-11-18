class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        //use map to get frequency 
        let map = new Map();
        for(let num of nums){
            map.set(num, (map.get(num) ?? 0) + 1);
        }
        let buckets = Array(nums.length + 1).fill(null).map(() => []);
        for(let [num, freq] of map.entries()){
            buckets[freq].push(num);
        }

        let result = [];
        for(let i = buckets.length - 1; i >= 0 && result.length < k; i--){
            if(buckets[i].length > 0){
                result.push(...buckets[i]);
            }
        }
        return result.slice(0,k);
    }
}
