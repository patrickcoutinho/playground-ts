export type MinMaxSumReturn = {
  min: number;
  max: number;
};

export const minMaxSum = (arr: number[]): MinMaxSumReturn => {
  const totalSum = arr.reduce((item, sum) => item + sum);
  const possibleSums: number[] = [];

  arr.forEach((item, index) => {
    possibleSums[index] = totalSum - item;
  });

  possibleSums.sort((a, b) => {
    return a - b;
  });

  return { min: possibleSums[0], max: possibleSums[possibleSums.length - 1] };
};
