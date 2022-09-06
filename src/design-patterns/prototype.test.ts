import { ComponentWithBackReference, Prototype } from './prototype';

describe('Prototype Playground', () => {
  test('should ', () => {
    const prototype = new Prototype();

    prototype.primitive = 245;
    prototype.component = new Date();

    prototype.circularReference = new ComponentWithBackReference(prototype);

    const clone = prototype.clone();

    expect(prototype.primitive).toStrictEqual(clone.primitive);
    expect(prototype.component).not.toStrictEqual(clone.component);
    expect(prototype.circularReference).not.toStrictEqual(
      clone.circularReference,
    );
    expect(prototype.circularReference.prototype).not.toStrictEqual(
      clone.circularReference.prototype,
    );
  });
});
