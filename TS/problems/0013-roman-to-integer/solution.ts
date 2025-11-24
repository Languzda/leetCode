/**
 * Problem 13: Roman to Integer
 *
 * Difficulty: Easy
 * Tags: [Hash Table, Math, String]
 *
 * Description:
 *
 */

export function solution(s: string): number {
  const map = new Map([
    ["I", 1],
    ["IV", 4],
    ["V", 5],
    ["IX", 9],
    ["X", 10],
    ["XL", 40],
    ["L", 50],
    ["XC", 90],
    ["C", 100],
    ["CD", 400],
    ["D", 500],
    ["CM", 900],
    ["M", 1000],
  ]);

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const index = s[i] + s[i + 1];
    result += map.get(index) ?? map.get(s[i]);
    if (map.has(index)) {
      i++;
    }
  }

  return result;
}

// Run only when executed directly
if (require.main === module) {
  console.log("Running solution...");
  console.log(solution("MCMXCIV"));
}
