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
    if (this.isEmpty()) return undefined;

    const item = this.items[this.count - 1];

    delete this.items[this.count - 1];
    this.count--;

    return item;
  }

  public peek() {
    return this.items[this.count - 1] || undefined;
  }

  public size() {
    return this.count;
  }

  public isEmpty() {
    return this.count === 0;
  }
}
