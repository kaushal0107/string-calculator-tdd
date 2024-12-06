import { add } from "../src/utils/stringCalculator";

describe("String Calculator", () => {
  test("returns 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  test("returns number for a single input", () => {
    expect(add("1")).toBe(1);
  });

  test("returns sum for two numbers", () => {
    expect(add("1,2")).toBe(3);
  });

  test("handles new line as delimiter", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  test("supports custom delimiter", () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  test("throws error for negative numbers", () => {
    expect(() => add("1,-2,3")).toThrow(
      "Negative numbers not allowed: -2"
    );
  });
});
