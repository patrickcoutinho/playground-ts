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
  private count = 0;

  public head: Node<T> | undefined = undefined;

  public tail: Node<T> | undefined = undefined;

  constructor(value: T) {
    this.head = new Node<T>(value);
    this.tail = this.head;
    this.count++;
  }

  private lookupNode(index: number): Node<T> | undefined {
    if (index === 0) {
      return this.head;
    }

    if (index === this.length()) {
      return this.tail;
    }

    if (index > this.length()) {
      return undefined;
    }

    let atIndexNode = this.head;

    let counter = 0;
    while (counter < index) {
      atIndexNode = atIndexNode.next;

      counter++;
    }

    return atIndexNode;
  }

  public length(): number {
    return this.count;
  }

  public append(value: T): void {
    const newNode = new Node<T>(value);

    this.tail.next = newNode;
    this.tail = newNode;
    this.count++;
  }

  public prepend(value: T): void {
    const newNode = new Node<T>(value);

    newNode.next = this.head;
    this.head = newNode;
    this.count++;
  }

  public insert(index: number, value: T): void {
    if (index === 0) {
      return this.prepend(value);
    }

    if (index >= this.length()) {
      return this.append(value);
    }

    const newNode = new Node<T>(value);

    const previousNode = this.lookupNode(index - 1);
    const atIndexNode = previousNode.next;

    previousNode.next = newNode;
    newNode.next = atIndexNode;

    this.count++;
  }

  public remove(index: number): void {
    if (index > this.length()) {
      return;
    }

    this.count--;

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const previousNode = this.lookupNode(index - 1);
    const atIndexNode = previousNode.next;

    previousNode.next = atIndexNode.next;
  }

  public lookup(index: number): T {
    const node = this.lookupNode(index);
    return node?.value || undefined;
  }

  public reverse(): LinkedList<T> {
    let current = this.head;

    const reverseList = new LinkedList(this.head.value);

    current = current.next;

    while (current !== null) {
      reverseList.prepend(current.value);
      current = current.next;
    }

    return reverseList;
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
