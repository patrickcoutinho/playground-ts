import { LinkedList } from '../src/linked-list';

describe('Linked List Tests Playground', () => {
  test('should create a new instance of LinkedList', () => {
    const linkedList = new LinkedList(10);

    expect(linkedList).toBeInstanceOf(LinkedList);
  });
});
