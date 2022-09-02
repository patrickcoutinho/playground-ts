import Stack from './stack';

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

  test('should try to remove an element from empty stack and receive undefined', () => {
    const stack = new Stack();

    const item = stack.pop();

    expect(item).toBeUndefined();
    expect(stack.size()).toBe(0);
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

  test('should return the value of the item on top of the stack', () => {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);
    stack.push(99);

    expect(stack.peek()).toBe(99);
    expect(stack.size()).toBe(3);
  });
});
