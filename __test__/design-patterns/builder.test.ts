import { ConcreteBuilder1, Director } from '../../src/design-patterns/builder';

describe('Builder Playground', () => {
  test('should build a Minimal Viable Product', () => {
    const builder = new ConcreteBuilder1();
    const director = new Director();

    director.setBuilder(builder);
    director.buildMinimalViableProduct();

    const mvp = builder.getProduct();

    expect(mvp.listParts()).toEqual('Product parts: PartA1');
  });

  test('should build a Full Product', () => {
    const builder = new ConcreteBuilder1();
    const director = new Director();

    director.setBuilder(builder);
    director.buildFullFeaturedProduct();

    const full = builder.getProduct();

    expect(full.listParts()).toEqual('Product parts: PartA1, PartB1, PartC1');
  });
});
