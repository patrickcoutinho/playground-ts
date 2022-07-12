import Deque from '../src/deque';

describe('Deque Tests Playground', () => {
  test('should create a new instance of Deque', () => {
    const deque = new Deque();

    expect(deque).toBeInstanceOf(Deque);
  });

  test('should return the Deque size', () => {
    const deque = new Deque();

    expect(deque.size()).toBe(0);

    deque.addFront(21);
    deque.addFront(44);
    deque.addFront(67);

    expect(deque.size()).toBe(3);
  });

  test('should return if Deque is empty', () => {
    const deque = new Deque();

    expect(deque.isEmpty()).toBeTruthy();

    deque.addFront(21);

    expect(deque.isEmpty()).toBeFalsy();
  });

  test('should add an item to front of Deque', () => {
    const deque = new Deque();

    deque.addFront(21);

    expect(deque.size()).toBe(1);
  });

  test('should add an item to back of Deque', () => {
    const deque = new Deque();

    deque.addBack(21);

    expect(deque.size()).toBe(1);
  });
});
