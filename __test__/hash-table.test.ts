import { faker } from '@faker-js/faker';
import { HashTable } from '../src/data-structures/hash-table';

describe('HashTable Playground', () => {
  test('should create a HashTable', () => {
    const hashTable = new HashTable(10);

    expect(hashTable).toBeInstanceOf(HashTable);
  });

  test('should insert and get value from HashTable', () => {
    const key = faker.random.word();
    const value = faker.random.alphaNumeric();

    const hashTable = new HashTable(10);

    hashTable.set(key, value);

    expect(hashTable.get(key)).toEqual(value);
  });
});
