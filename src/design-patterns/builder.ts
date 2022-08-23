interface Builder {
  producePartA(): Builder;
  producePartB(): Builder;
  producePartC(): Builder;
}

export class ConcreteBuilder1 implements Builder {
  private product: Product1;

  constructor() {
    this.reset();
  }

  public reset(): void {
    this.product = new Product1();
  }

  public producePartA(): Builder {
    this.product.parts.push('PartA1');
    return this;
  }

  public producePartB(): Builder {
    this.product.parts.push('PartB1');
    return this;
  }

  public producePartC(): Builder {
    this.product.parts.push('PartC1');
    return this;
  }

  public getProduct(): Product1 {
    const result = this.product;
    this.reset();

    return result;
  }
}

class Product1 {
  public parts: string[] = [];

  public listParts(): string {
    return `Product parts: ${this.parts.join(', ')}`;
  }
}

export class Director {
  private builder: Builder;

  public setBuilder(builder: Builder): void {
    this.builder = builder;
  }

  public buildMinimalViableProduct(): void {
    this.builder.producePartA();
  }

  public buildFullFeaturedProduct(): void {
    this.builder.producePartA().producePartB().producePartC();
  }
}
