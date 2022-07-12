export default class Deque<T> {
  private count: number;
  private lowest: number;
  private items: any;

  constructor() {
    this.count = 0;
    this.lowest = 0;
    this.items = {};
  }
}
