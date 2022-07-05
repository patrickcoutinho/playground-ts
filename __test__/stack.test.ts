import Stack from '../src/stack';

describe('Stack Tests Playground', () => {
  test('should add an element to stack', () => {
    const stack = new Stack();

    stack.push(21);

    expect(stack.size()).toBe(1);
  });

  test('should return the stack size', () => {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);

    expect(stack.size()).toBe(2);
  });
});
