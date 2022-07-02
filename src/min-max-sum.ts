export const minMaxSum = (arr: number[]): number[] => {
  const totalSum = arr.reduce((item, sum) => item + sum);
  const possibleSums: number[] = [];

  arr.forEach((item, index) => {
    possibleSums[index] = totalSum - item;
  });

  possibleSums.sort((a, b) => {
    return a - b;
  });

  return [possibleSums[0], possibleSums[possibleSums.length - 1]];
};
