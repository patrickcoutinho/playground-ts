export abstract class Creator {
  public abstract create(): Product;

  public someOperation(): string {
    const product = this.create();

    return `Creator: The same creator's code has just worked with ${product.operation()}`;
  }
}

export class ConcreteCreator1 extends Creator {
  public create(): Product {
    return new ConcreteProduct1();
  }
}

export class ConcreteCreator2 extends Creator {
  public create(): Product {
    return new ConcreteProduct2();
  }
}

export interface Product {
  operation(): string;
}

export class ConcreteProduct1 implements Product {
  public operation(): string {
    return '{Result of the ConcreteProduct1}';
  }
}

export class ConcreteProduct2 implements Product {
  public operation(): string {
    return '{Result of the ConcreteProduct2}';
  }
}

export function clientCode(creator: Creator) {
  return creator;
}
