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

  test('should append values to LinkedList correctly', () => {
    const headValue = faker.random.word();
    const appendValueOne = faker.random.word();
    const appendValueTwo = faker.random.word();

    const linkedList = new LinkedList(headValue);

    expect(linkedList.head.value).toBe(headValue);
    expect(linkedList.head.next).toBe(null);
    expect(linkedList.length()).toBe(1);

    linkedList.append(appendValueOne);

    expect(linkedList.tail.value).toBe(appendValueOne);
    expect(linkedList.length()).toBe(2);

    linkedList.append(appendValueTwo);

    expect(linkedList.tail.value).toBe(appendValueTwo);
    expect(linkedList.length()).toBe(3);
  });
});
