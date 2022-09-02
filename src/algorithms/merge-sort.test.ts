import { mergeSort } from './merge-sort';

const unorderedArray = [6, 1, 78, 99, 3, 11, 56, 32, 67];
const orderedArray = [1, 3, 6, 11, 32, 56, 67, 78, 99];

describe('Merge Sort Playground', () => {
  test('should sort a unordered array using merge sort', () => {
    expect(mergeSort(unorderedArray)).toEqual(orderedArray);
  });
});
