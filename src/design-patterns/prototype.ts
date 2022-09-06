export class Prototype<T> {
  public primitive: T;

  public component: object;

  public circularReference: ComponentWithBackReference<T>;

  public clone(): this {
    const clone = Object.create(this);

    clone.component = Object.create(this.component);

    clone.circularReference = {
      ...this.circularReference,
      prototype: { ...this },
    };

    return clone;
  }
}

export class ComponentWithBackReference<T> {
  public prototype;

  constructor(prototype: Prototype<T>) {
    this.prototype = prototype;
  }
}
