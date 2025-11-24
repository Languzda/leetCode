import { solution } from "./solution";

describe("Problem 13: Roman to Integer", () => {
  test("Example 1", () => {
    const input = "III";
    const result = solution(input);
    expect(result).toBe(3);
  });

  test("Example 2", () => {
    const input = "LVIII";
    const result = solution(input);
    expect(result).toBe(58);
  });

  test("Example 3", () => {
    const input = "MCMXCIV";
    const result = solution(input);
    expect(result).toBe(1994);
  });
});
