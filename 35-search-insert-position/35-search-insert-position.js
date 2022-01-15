/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i;
        } else if (nums[i] > target) {
            return i;
        } else if (i === nums.length - 1) {
            return nums.length;
        }
    }
};

// 찾는 숫자가 있는 경우
//  - index 리턴
//
// 찾는 숫자가 없는 경우
// 1. 중간에 들어가야 하는 경우
// 2. 마지막에 들어가야 하는 경우
