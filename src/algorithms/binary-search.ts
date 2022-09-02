/**
 * Binary Search Algorithm: The basic steps to perform Binary Search are:
 * ----------------------------------------------------------------------
 *
 * - Begin with the mid element of the whole array as a search key.
 * - If the value of the search key is equal to the item then return an index of the search key.
 * - Or if the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half.
 * - Otherwise, narrow it to the upper half.
 * - Repeatedly check from the second point until the value is found or the interval is empty.
 *
 */

type InputTypes = {
  collection: number[];
  target: number;
  lower: number;
  higher: number;
};

export const binarySearch = ({
  collection,
  target,
  lower,
  higher,
}: InputTypes) => {
  if (higher >= lower) {
    const middle = Math.floor((higher + lower) / 2);

    if (collection[middle] == target) return middle;

    if (collection[middle] > target) {
      return binarySearch({ collection, target, lower, higher: middle - 1 });
    }

    return binarySearch({ collection, target, lower: middle + 1, higher });
  }

  return -1;
};
