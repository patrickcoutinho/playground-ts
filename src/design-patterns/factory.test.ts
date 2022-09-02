import {
  clientCode,
  ConcreteCreator1,
  ConcreteCreator2,
  ConcreteProduct1,
  ConcreteProduct2,
} from './factory';

describe('Factory Playground', () => {
  test('should call operation from ConcreteProduct1', () => {
    const product = clientCode(new ConcreteCreator1()).create();

    expect(product).toBeInstanceOf(ConcreteProduct1);
    expect(product.operation()).toEqual('{Result of the ConcreteProduct1}');
  });

  test('should call operation from ConcreteProduct2', () => {
    const product = clientCode(new ConcreteCreator2()).create();

    expect(product).toBeInstanceOf(ConcreteProduct2);
    expect(product.operation()).toEqual('{Result of the ConcreteProduct2}');
  });

  test('should call someOperation from Creator using correct product', () => {
    const product1 = clientCode(new ConcreteCreator1());
    const product2 = clientCode(new ConcreteCreator2());

    expect(product1.someOperation()).toEqual(
      "Creator: The same creator's code has just worked with {Result of the ConcreteProduct1}",
    );

    expect(product2.someOperation()).toEqual(
      "Creator: The same creator's code has just worked with {Result of the ConcreteProduct2}",
    );
  });
});
