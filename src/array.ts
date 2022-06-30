export const createFibonacci = (n: number): number[] => {
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const newFib = createFibonacci(n - 1);

  const lastItem = newFib[newFib.length - 1];
  const penultimateItem = newFib[newFib.length - 2];

  return [...newFib, lastItem + penultimateItem];
};
