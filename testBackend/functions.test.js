const { add, subtract } = require("./function");

// Test cases for the add function
test("add function adds two numbers correctly", () => {
  expect(add(1, 2)).toBe(3);
  expect(add(-1, 1)).toBe(0);
  expect(add(0, 0)).toBe(0);
});

// Test cases for the subtract function
test("subtract function subtracts two numbers correctly", () => {
  expect(subtract(5, 3)).toBe(2);
  expect(subtract(10, 7)).toBe(3);
  expect(subtract(0, 0)).toBe(0);
});
