type Node<T> = {
  value: T;
  next: Node<any>;
};

export class LinkedList<T> {
  private count: number = 0;

  public head: Node<T> | undefined = undefined;
  public tail: Node<T> | undefined = undefined;

  constructor(value: T) {
    this.head = {
      value,
      next: null,
    };

    this.tail = this.head;
    this.count++;
  }

  public length() {
    return this.count;
  }

  public append(value: T) {
    const newNode = {
      value,
      next: null,
    };

    this.tail.next = newNode;
    this.tail = newNode;
    this.count++;
  }

  public prepend(value: T) {
    const newNode = {
      value,
      next: this.head,
    };

    this.head = newNode;
    this.count++;
  }
}
