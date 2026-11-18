class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        //count frequency
        //add to sorted array from low to high 
        // return last top k

        let map = new Map();

        for(let i = 0; i < nums.length; i++){
            map.set(nums[i], (map.get(nums[i]) || 0) + 1);
        }
        console.log('Frequency Map:', map);

        // Step 2: Convert map entries into array and sort by frequency
        let sorted = Array.from(map.entries()).sort((a, b) => a[1] - b[1]);
        
        console.log('Sorted entries:', sorted);

        // Step 3: Take the last k elements (highest frequency)
        let result = sorted.slice(-k).map(entry => entry[0]); // entry[0] is the number

        return result;
    }
}
