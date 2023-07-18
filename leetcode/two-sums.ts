// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// Exemple: [0,1]
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Brute force method, O(n^2)
function twoSum(nums: number[], target: number): number[] {
  for (var i = 0; i < nums.length; i++) {
    for (var j = 1; j < nums.length + 1; j++) {
      if (nums[i] + nums[j] == target && i !== j) {
        return [i, j];
      }
    }
  }
  return [];
}

// HashMap method, O(n)
function twoSum2(nums: number[], target: number): number[] {
  var prevMap = new Map();
  for (var index = 0; index < nums.length; index++) {
    var difference = target - nums[index];
    if (prevMap.has(difference)) {
      return [prevMap.get(difference), index];
    }
    prevMap.set(nums[index], index);
  }
  return [];
}
