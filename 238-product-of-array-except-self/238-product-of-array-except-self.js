/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    
    
    const result = [];
    
    let start = 1;
    for (let i = 0; i < nums.length; i++) {
        result[i] = start;
        start *= nums[i]
    }
    
    let back = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= back;
        back *= nums[i]
    }
    return result 
};


// [1,2,6,24]
//[24, ]