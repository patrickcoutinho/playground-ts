import { minMaxSum } from '../src/min-max-sum';

const testCase = [
  { input: [1, 2, 3, 4, 5], expected: { min: 10, max: 14 } },
  { input: [1, 2, 3, 4, 5, 6], expected: { min: 15, max: 20 } },
  { input: [99, 4, 66, 0, 8, -44, 9], expected: { min: 43, max: 186 } },
];

describe('MinMaxSum Tests Playground', () => {
  test.each(testCase)(
    'should returns $expected to supplied array',
    ({ input, expected }) => {
      expect(minMaxSum(input)).toEqual(expected);
    }
  );
});
