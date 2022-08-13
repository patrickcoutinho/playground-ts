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
    this.head = new Node<T>(value);
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

    newNode.next = this.head;
    this.head = newNode;
    this.count++;
  }

  public insert(index: number, value: T) {
    const newNode = new Node<T>(value);

    let previousNode = this.head;

    for (let i = 0; i < index - 1; i++) {
      previousNode = previousNode.next;
    }

    const atIndexNode = previousNode.next;

    previousNode.next = newNode;
    newNode.next = atIndexNode;

    this.count++;
  }

  public toArray() {
    const array = [];
    let current = this.head;

    while (current !== null) {
      array.push(current.value);
      current = current.next;
    }

    return array;
  }
}
