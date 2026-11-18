class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        //edge cases

        //create a frequency map (num, frequency)
        let frequency = new Map();
        for (const num of nums) {
            frequency.set(num, (frequency.get(num) || 0) + 1)
        }
        //based on the number add frequency to arr
        let arr = [];
        for (const [key, value] of frequency.entries()) {
            if (!arr[value]) {
                arr[value] = [key];
            } else {
                arr[value].push(key);
            }

        }
        //go through it and add to results array    
        let result = [];
        for (let i = arr.length - 1; i >= 0 && result.length < k; i--) {
            if (arr[i]) {
                result.push(...arr[i]);
            }
        }

       return result.slice(0, k);
    }
}
