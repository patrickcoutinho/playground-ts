import { LinkedList } from '../src/linked-list';
import { faker } from '@faker-js/faker';

describe('Linked List Tests Playground', () => {
  test('should create a new instance of LinkedList', () => {
    const linkedList = new LinkedList(faker.random.alphaNumeric());

    expect(linkedList).toBeInstanceOf(LinkedList);
  });

  test('should create a LinkedList with correct values', () => {
    const headValue = faker.random.alphaNumeric();

    const linkedList = new LinkedList(headValue);

    expect(linkedList.head.value).toBe(headValue);
    expect(linkedList.head.next).toBe(null);
    expect(linkedList.length()).toBe(1);
  });
});
