/**
 * Problem 1: Two Sum
 *
 * Difficulty: Easy
 * Tags: Array, Hash Table
 *
 * Description:
 * Given an array of integers nums and an integer target,
 * return indices of the two numbers such that they add up to target.
 */ export function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }
    map.set(nums[i], i);
  }

  return [];
}

export function solution() {
  // Example usage
  const nums = [2, 7, 11, 15];
  const target = 9;
  return twoSum(nums, target);
}

// Run only when executed directly (CommonJS style detection)
if (require.main === module) {
  console.log("Running Two Sum solution...");
  console.log("Input: nums = [2,7,11,15], target = 9");
  console.log("Output:", solution());
}
