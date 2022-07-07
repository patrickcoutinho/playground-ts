type QueueItems = {
  [key: number]: any;
};

export default class Queue {
  private count: number;
  private lowest: number;
  private items: QueueItems;

  constructor() {
    this.count = 0;
    this.lowest = 0;
    this.items = {};
  }

  public queueUp(item: any) {
    this.items[this.count] = item;
    this.count++;
  }

  public size() {
    return this.count;
  }
}
