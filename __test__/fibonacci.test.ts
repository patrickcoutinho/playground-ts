import { createFibonacci } from "../src/fibonacci";

describe("Array Playground Tests", () => {
  test('should create 1 elements of Fibonacci sequence"', () => {
    expect(createFibonacci(1)).toEqual([0]);
  });

  test('should create 2 elements of Fibonacci sequence"', () => {
    expect(createFibonacci(2)).toEqual([0, 1]);
  });

  test('should create 3 elements of Fibonacci sequence"', () => {
    expect(createFibonacci(3)).toEqual([0, 1, 1]);
  });

  test('should create 4 elements of Fibonacci sequence"', () => {
    expect(createFibonacci(4)).toEqual([0, 1, 1, 2]);
  });

  test('should create 5 elements of Fibonacci sequence"', () => {
    expect(createFibonacci(5)).toEqual([0, 1, 1, 2, 3]);
  });

  test('should create 6 elements of Fibonacci sequence"', () => {
    expect(createFibonacci(6)).toEqual([0, 1, 1, 2, 3, 5]);
  });
});
