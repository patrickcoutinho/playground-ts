export default class Stack {
  private count: number;
  private items: object;

  constructor() {
    this.count = 0;
    this.items = {};
  }

  public push(value: any) {
    this.items[this.count] = value;
    this.count++;
  }

  public pop() {
    const item = this.items[this.count - 1] || undefined;

    delete this.items[this.count - 1];
    this.count--;

    return item;
  }

  public size() {
    return this.count;
  }

  public isEmpty() {
    return this.count === 0;
  }
}
