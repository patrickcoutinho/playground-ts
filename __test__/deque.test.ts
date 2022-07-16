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

  test('should clear the Deque', () => {
    const deque = new Deque();

    deque.addFront(21);

    expect(deque.size()).toBe(1);

    deque.clear();

    expect(deque.size()).toBe(0);
    expect(deque.isEmpty()).toBeTruthy();
  });

  test('should remove front item of the Deque', () => {
    const deque = new Deque();

    deque.addFront(1);
    deque.addBack(21);
    deque.addFront(2);
    deque.addFront(3);

    expect(deque.size()).toBe(4);

    const frontItem = deque.removeFront();

    expect(deque.size()).toBe(3);
    expect(frontItem).toEqual(3);
  });

  test('should remove back item of the Deque', () => {
    const deque = new Deque();

    deque.addFront(1);
    deque.addBack(21);
    deque.addFront(2);
    deque.addFront(3);

    expect(deque.size()).toBe(4);

    const backItem = deque.removeBack();

    expect(deque.size()).toBe(3);
    expect(backItem).toEqual(21);
  });

  test('should peek front item of the Deque', () => {
    const deque = new Deque();

    deque.addFront(1);
    deque.addBack(21);
    deque.addFront(2);
    deque.addFront(3);
    deque.addBack(33);

    expect(deque.size()).toBe(5);

    const frontItem = deque.peekFront();

    expect(frontItem).toEqual(3);
    expect(deque.size()).toBe(5);
  });

  test('should peek back item of the Deque', () => {
    const deque = new Deque();

    deque.addFront(1);
    deque.addBack(21);
    deque.addFront(2);
    deque.addFront(3);
    deque.addBack(33);

    expect(deque.size()).toBe(5);

    const backItem = deque.peekBack();

    expect(backItem).toEqual(33);
    expect(deque.size()).toBe(5);
  });
});
