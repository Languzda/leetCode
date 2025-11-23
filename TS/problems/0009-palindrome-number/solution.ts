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
  const numString = x.toString();
  for (let i = 0; i <= numString.length / 2; i++) {
    if (numString[i] != numString[numString.length - 1 - i]) return false;
  }
  return true;
}

// Run only when executed directly
if (require.main === module) {
  console.log("Running solution...");
  console.log(solution(121));
}
