import { solution } from "./solution";

describe("Problem 1929: Concatenation Of Array", () => {
  test("Example 1", () => {
    // Add your test cases here
    const nums = [1, 2, 3];
    const result = solution(nums);
    expect(result).toEqual([1, 2, 3, 1, 2, 3]);
  });

  test("Example 2", () => {
    // Add more test cases here
    const nums = [1, 3, 2, 1];
    const result = solution(nums);
    expect(result).toEqual([1, 3, 2, 1, 1, 3, 2, 1]);
  });
});
