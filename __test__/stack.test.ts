import Stack from '../src/stack';

describe('Stack Tests Playground', () => {
  test('should add an element to stack', () => {
    const stack = new Stack();

    stack.push(21);

    expect(stack.size()).toBe(1);
  });
});
