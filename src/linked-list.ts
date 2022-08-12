type Node<T> = {
  value: T;
  next: Node<any>;
};

export class LinkedList<T> {
  private count: number = 0;

  public head: Node<T> | undefined = undefined;

  constructor(value: T) {
    this.head = {
      value,
      next: null,
    };

    this.count++;
  }

  public length() {
    return this.count;
  }
}
