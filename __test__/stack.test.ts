import Stack from '../src/stack';

describe('Stack Tests Playground', () => {
  test('should add an element to stack', () => {
    const stack = new Stack();

    stack.push(21);

    expect(stack.size()).toBe(1);
  });

  test('should remove an element from stack', () => {
    const stack = new Stack();

    stack.push(21);
    stack.push(99);

    expect(stack.size()).toBe(2);

    const item = stack.pop();

    expect(item).toEqual(99);
    expect(stack.size()).toBe(1);
  });

  test('should return the stack size', () => {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);

    expect(stack.size()).toBe(2);
  });

  test('should return if stack is empty', () => {
    const stack = new Stack();

    expect(stack.isEmpty()).toBeTruthy();

    stack.push(1);
    stack.push(2);

    expect(stack.isEmpty()).toBeFalsy();
  });
});
