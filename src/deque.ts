export default class Deque<T> {
  private count: number;
  private lowest: number;
  private items: any;

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
}
