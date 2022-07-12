import Deque from '../src/deque';

describe('Deque Tests Playground', () => {
  test('should create a new instance of Deque', () => {
    const deque = new Deque();

    expect(deque).toBeInstanceOf(Deque);
  });
});
