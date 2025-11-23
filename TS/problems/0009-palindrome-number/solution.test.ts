import { solution } from "./solution";

describe("Problem 9: Palindrome Number", () => {
  test("Example 1", () => {
    const input = 121;
    const result = solution(input);
    expect(result).toBeTruthy();
  });

  test("Example 2", () => {
    const input = -121;
    const result = solution(input);
    expect(result).toBeFalsy();
  });

  test("Example 3", () => {
    const input = 10;
    const result = solution(input);
    expect(result).toBeFalsy();
  });
});
