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
    if (index === 0) {
      return this.prepend(value);
    }

    if (index >= this.length()) {
      return this.append(value);
    }

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

  public remove(index: number) {
    if (index > this.length()) {
      return;
    }

    this.count--;

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let previousNode = this.head;
    let atIndexNode = this.head.next;

    let counter = 0;

    while (counter !== index - 1) {
      previousNode = atIndexNode;
      atIndexNode = atIndexNode.next;
      counter++;
    }

    previousNode.next = atIndexNode.next;
  }

  public lookup(index: number) {
    if (index === 0) {
      return this.head.value;
    }

    if (index === this.length()) {
      return this.tail.value;
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

    return atIndexNode.value;
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
