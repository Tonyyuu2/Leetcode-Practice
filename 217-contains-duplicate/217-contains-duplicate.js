/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
 let obj = {};
    

    
    for (let i = 0; i < nums.length; i++) {
        
        const current = nums[i];
        
        if (obj[current] !== undefined) {
            return true 
        } else {
            obj[current] = current
        }
    }
    return false
};