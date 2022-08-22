import { Singleton } from '../../src/design-patterns/singleton';

describe('Singleton Playground', () => {
  test('should be the same instance', () => {
    const singleton1 = Singleton.getInstance();
    const singleton2 = Singleton.getInstance();

    expect(singleton1).toStrictEqual(singleton2);
  });
});
