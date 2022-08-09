/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    
    
    let max = nums[0];
    let tempVal = 0;
    
    for (let i = 0; i < nums.length; i++) {
        
        tempVal += nums[i];
        
        if (tempVal > max) {
            max = tempVal;
        }
        if (tempVal < 0) {
            tempVal = 0;
        }
    }
    return max
};