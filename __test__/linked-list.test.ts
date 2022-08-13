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

  test('should insert a value to LinkedList in the correct index', () => {
    const insertValue = faker.random.word();

    const linkedList = new LinkedList(faker.random.word());

    linkedList.append(faker.random.word());
    linkedList.append(faker.random.word());
    linkedList.append(faker.random.word());
    linkedList.append(faker.random.word());
    linkedList.append(faker.random.word());

    expect(linkedList.length()).toBe(6);

    linkedList.insert(3, insertValue);

    expect(linkedList.length()).toBe(7);
    expect(linkedList.toArray()[3]).toBe(insertValue);
  });

  test('should insert a value to LinkedList in the index 0', () => {
    const insertValue = faker.random.word();

    const linkedList = new LinkedList(faker.random.word());

    linkedList.append(faker.random.word());
    linkedList.append(faker.random.word());
    linkedList.append(faker.random.word());
    linkedList.append(faker.random.word());
    linkedList.append(faker.random.word());

    expect(linkedList.length()).toBe(6);

    linkedList.insert(0, insertValue);

    expect(linkedList.length()).toBe(7);
    expect(linkedList.toArray()[0]).toBe(insertValue);
  });

  test('should insert a value to index >= the LinkedList length', () => {
    const insertValue = faker.random.word();

    const linkedList = new LinkedList(faker.random.word());

    linkedList.append(faker.random.word());
    linkedList.append(faker.random.word());
    linkedList.append(faker.random.word());
    linkedList.append(faker.random.word());
    linkedList.append(faker.random.word());

    expect(linkedList.length()).toBe(6);

    linkedList.insert(99, insertValue);

    const array = linkedList.toArray();

    expect(linkedList.length()).toBe(7);
    expect(array[array.length - 1]).toBe(insertValue);
  });

  test('should remove a value from the correct index', () => {
    const index3Value = faker.random.word();
    const index4Value = faker.random.word();

    const linkedList = new LinkedList(faker.random.word());

    linkedList.append(faker.random.word());
    linkedList.append(faker.random.word());
    linkedList.append(index3Value);
    linkedList.append(index4Value);
    linkedList.append(faker.random.word());

    expect(linkedList.length()).toBe(6);

    linkedList.remove(3);

    expect(linkedList.length()).toBe(5);
    expect(linkedList.toArray()[3]).toBe(index4Value);
  });

  test('should remove a value from the index 0', () => {
    const index0Value = faker.random.word();
    const index1Value = faker.random.word();

    const linkedList = new LinkedList(index0Value);

    linkedList.append(index1Value);
    linkedList.append(faker.random.word());
    linkedList.append(faker.random.word());
    linkedList.append(faker.random.word());
    linkedList.append(faker.random.word());

    expect(linkedList.length()).toBe(6);

    linkedList.remove(0);

    expect(linkedList.length()).toBe(5);
    expect(linkedList.head.value).toBe(index1Value);
  });

  test('should do nothing when trying to remove a non-existent index', () => {
    const index0Value = faker.random.word();
    const index1Value = faker.random.word();

    const linkedList = new LinkedList(index0Value);

    linkedList.append(index1Value);
    linkedList.append(faker.random.word());
    linkedList.append(faker.random.word());
    linkedList.append(faker.random.word());
    linkedList.append(faker.random.word());

    expect(linkedList.length()).toBe(6);

    linkedList.remove(99);

    expect(linkedList.length()).toBe(6);
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
