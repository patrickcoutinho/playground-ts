type QueueItems = {
  [key: number]: any;
};

export default class Queue {
  private count: number;
  private lowest: number;
  private items: QueueItems;

  constructor() {
    this.clear();
  }

  public queueUp(item: any) {
    this.items[this.count] = item;
    this.count++;
  }

  public dequeue() {
    if (this.isEmpty()) return undefined;

    const firstItem = this.items[this.lowest];
    delete this.items[this.lowest];
    this.lowest++;

    return firstItem;
  }

  public isEmpty() {
    return this.count === 0;
  }

  public size() {
    return this.count - this.lowest;
  }

  public clear() {
    this.count = 0;
    this.lowest = 0;
    this.items = {};
  }
}
