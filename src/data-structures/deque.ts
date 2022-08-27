export default class Deque<T> {
  private count: number;

  private lowest: number;

  private items: {
    [name: string]: T;
  };

  constructor() {
    this.clear();
  }

  public size() {
    return this.count - this.lowest;
  }

  public clear() {
    this.count = 0;
    this.lowest = 0;
    this.items = {};
  }

  public isEmpty() {
    return this.count === 0;
  }

  public addFront(element: T) {
    if (this.isEmpty()) {
      return this.addBack(element);
    }

    if (this.lowest > 0) {
      this.lowest--;
      this.items[this.lowest] = element;

      return;
    }

    for (let i = this.count; i > 0; i--) {
      this.items[i] = this.items[i - 1];
    }

    this.count++;
    this.items[0] = element;
  }

  public addBack(element: T) {
    this.items[this.count] = element;
    this.count++;
  }

  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    }

    const result = this.items[this.lowest];
    delete this.items[this.lowest];
    this.lowest++;

    return result;
  }

  removeBack() {
    if (this.isEmpty()) {
      return undefined;
    }

    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];

    return result;
  }

  peekFront() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items[this.lowest];
  }

  peekBack() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items[this.count - 1];
  }
}
