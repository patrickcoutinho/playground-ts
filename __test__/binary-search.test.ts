import { binarySearch } from '../src/binary-search';
import { createFibonacci } from '../src/fibonacci';

const collection = [...new Set(createFibonacci(30))];

const testCase = [
  ...collection.map((number, index) => {
    return { number, expected: index };
  }),
];

describe('Binary Search Playground Tests', () => {
  test.each(testCase)(
    'should search for $number and receive $expected as index',
    ({ number, expected }) => {
      expect(
        binarySearch({
          collection,
          target: number,
          lower: 0,
          higher: collection.length,
        })
      ).toEqual(expected);
    }
  );

  test('should returns -1 if the element is not found', () => {
    expect(
      binarySearch({
        collection,
        target: 99,
        lower: 0,
        higher: collection.length,
      })
    ).toEqual(-1);
  });

  test('should returns -1 if the collection is empty', () => {
    expect(
      binarySearch({
        collection: [],
        target: 99,
        lower: 0,
        higher: 0,
      })
    ).toEqual(-1);
  });
});
