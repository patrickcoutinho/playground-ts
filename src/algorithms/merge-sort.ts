const merge = (arrOne: number[], arrTwo: number[]): number[] => {
  const output = [];

  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < arrOne.length && rightIndex < arrTwo.length) {
    const leftEl = arrOne[leftIndex];
    const rightEl = arrTwo[rightIndex];

    if (leftEl < rightEl) {
      output.push(leftEl);
      leftIndex++;
    } else {
      output.push(rightEl);
      rightIndex++;
    }
  }

  return [...output, ...arrOne.slice(leftIndex), ...arrTwo.slice(rightIndex)];
};

export const mergeSort = (array: number[]): number[] => {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  const arrOne = array.slice(0, middle);
  const arrTwo = array.slice(middle);

  return merge(mergeSort(arrOne), mergeSort(arrTwo));
};
