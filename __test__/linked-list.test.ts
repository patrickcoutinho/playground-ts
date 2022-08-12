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

  test('should prepend values to LinkedList correctly', () => {
    const headValue = faker.random.word();
    const prependValueOne = faker.random.word();
    const prependValueTwo = faker.random.word();

    const linkedList = new LinkedList(headValue);

    expect(linkedList.head.value).toBe(headValue);
    expect(linkedList.head.next).toBe(null);
    expect(linkedList.length()).toBe(1);

    linkedList.prepend(prependValueOne);

    expect(linkedList.head.value).toBe(prependValueOne);
    expect(linkedList.length()).toBe(2);

    linkedList.prepend(prependValueTwo);

    expect(linkedList.head.value).toBe(prependValueTwo);
    expect(linkedList.length()).toBe(3);
  });

  test('should convert LinkedList to array', () => {
    const startValue = faker.random.word();
    const appendValue = faker.random.word();
    const prependValue = faker.random.word();

    const linkedList = new LinkedList(startValue);

    linkedList.append(appendValue);
    linkedList.prepend(prependValue);

    expect(linkedList.toArray()).toEqual([
      prependValue,
      startValue,
      appendValue,
    ]);

    expect(linkedList.toArray()).toHaveLength(3);
  });
});
