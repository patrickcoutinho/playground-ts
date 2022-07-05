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
    delete this.items[this.count];
    this.count--;
  }

  public size() {
    return this.count;
  }
}
