import Queue from './queue';

describe('Queue Playground Tests', () => {
  test('should queue up an item', () => {
    const queue = new Queue();

    expect(queue.size()).toEqual(0);

    queue.queueUp(4);

    expect(queue.size()).toEqual(1);
  });

  test('should dequeue the first item', () => {
    const queue = new Queue();

    expect(queue.size()).toEqual(0);

    queue.queueUp(4);
    queue.queueUp(56);

    expect(queue.size()).toEqual(2);

    const item = queue.dequeue();

    expect(item).toEqual(4);
    expect(queue.size()).toEqual(1);
  });

  test('should return the queue size', () => {
    const queue = new Queue();

    expect(queue.size()).toEqual(0);

    queue.queueUp(4);
    queue.queueUp(6);
    queue.queueUp(99);

    expect(queue.size()).toEqual(3);
  });

  test('should return if queue is empty', () => {
    const queue = new Queue();

    expect(queue.isEmpty()).toBeTruthy();

    queue.queueUp(4);

    expect(queue.isEmpty()).toBeFalsy();
  });

  test('should clear the queue', () => {
    const queue = new Queue();

    queue.queueUp(4);
    queue.queueUp(5);

    expect(queue.isEmpty()).toBeFalsy();
    expect(queue.size()).toBe(2);

    queue.clear();

    expect(queue.isEmpty()).toBeTruthy();
    expect(queue.size()).toBe(0);
  });
});
