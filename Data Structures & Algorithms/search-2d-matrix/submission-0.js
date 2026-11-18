class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        //matrix = [[1,2,4,8],[10,11,12,13],[14,20,30,40]] 
        //target = 10

        //if target is less than matrix[middle][i] 
        let m = matrix.length;
        let n = matrix[0].length;
        let found = false;
        
        for (let row = 0; row < m; row++) {
            for (let col = 0; col < n; col++) {
                if (matrix[row][col] === target) {
                    found = true;
                }
            }
        }

        return found;
    }
}
