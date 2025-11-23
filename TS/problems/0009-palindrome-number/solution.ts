/**
 * Problem 9: Palindrome Number
 *
 * Difficulty: Easy
 * Tags: [Math]
 *
 * Description: Given an integer x, return true if x is a palindrome, and false otherwise.
 *
 */

export function solution(x: number): boolean {
  return String(x) == String(x).split("").reverse().join("");
}

// Run only when executed directly
if (require.main === module) {
  console.log("Running solution...");
  console.log(solution(121));
}
