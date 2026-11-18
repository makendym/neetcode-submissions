class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let sortedNums = [...nums];

        sortedNums.sort((a, b) => a - b);
        console.log("--sortedNums:", sortedNums);

        //[ [ -4, 5 ], [ -1, 0 ], [ -1, 4 ], [ 0, 1 ], [ 1, 2 ], [ 2, 3 ] ]
        //  -- (-4 + 2) = -2 = need +2  = 0 check right of start and left of of end to see if any of those numbers hit our target of 0
        //.    (-1 +2 + 1) = 2 (-1, -1,)
        let result = [];
        for (let i = 0; i < sortedNums.length; i++) {
            if(i > 0 &&  sortedNums[i] === sortedNums[i-1]) continue;
            let start = i + 1;
            let end = sortedNums.length - 1;
            while (start < end) {
                let sum = sortedNums[i] + sortedNums[start] + sortedNums[end];
                if (sum > 0) {
                    end--;
                } else if (sum < 0) {
                    start++;
                } else {
                   result.push([sortedNums[i], sortedNums[start], sortedNums[end]]);
                   start++;
                   while(sortedNums[start] === sortedNums[start-1] && start < end) start++;
                }
            }
        }

        return result;
    }
}
