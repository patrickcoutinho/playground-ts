import { minMaxSum } from '../src/min-max-sum';

const testCase = [
  { input: [1, 2, 3, 4, 5], expected: [10, 14] },
  { input: [1, 2, 3, 4, 5, 6], expected: [15, 20] },
  { input: [99, 4, 66, 0, 8, -44, 9], expected: [133, 76] },
];
describe('MinMaxSum Tests Playground', () => {
  test.each(testCase)(
    'should returns min and max sum equals $expected',
    ({ input, expected }) => {
      expect(minMaxSum(input)).toEqual(expected);
    }
  );
});
