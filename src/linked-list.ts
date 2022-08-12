class Node<T> {
  public next: Node<T>;
  public value: T;

  constructor(value: T) {
    this.value = value;
    this.next = null;

    return this;
  }
}

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
    const newNode = new Node<T>(value);

    this.tail.next = newNode;
    this.tail = newNode;
    this.count++;
  }

  public prepend(value: T) {
    const newNode = new Node<T>(value);

    this.head = newNode;
    this.count++;
  }
}
