import { createFibonacci } from '../src/fibonacci';

const fibonacci: number[] = [
  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584,
  4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811,
];

const fibonacciSlices = [];
for (const num in fibonacci) {
  fibonacciSlices[num] = fibonacci.slice(0, num as unknown as number);
}

const testCase = [
  ...fibonacciSlices.map((slice, index) => {
    return { items: index, expected: slice };
  }),
];

describe('Fibonacci Sequence Playground Tests', () => {
  test.each(testCase)(
    'should create $items elements of Fibonacci sequence',
    ({ items, expected }) => {
      expect(createFibonacci(items)).toEqual(expected);
    },
  );
});
