const { MinHeap } = require('../Heaps/min-heap');

describe('Min Heap tests', () => {
  it('should correctly build heap', () => {
    const array = [9, 3, 7, 1, 8, 2, 4, 5, 6];
    const minHeap = new MinHeap(array);
    expect(minHeap.heap).toEqual([1, 3, 2, 5, 8, 7, 4, 9, 6]);
  });

  it('should correctly insert element into heap', () => {
    const array = [1, 3, 2, 5, 6, 7, 4, 9, 8];
    const minHeap = new MinHeap(array);
    minHeap.insert(0);
    expect(minHeap.heap[0]).toEqual(0);
    expect(minHeap.heap).toEqual([0, 1, 2, 5, 3, 7, 4, 9, 8, 6]);
  });

  it('should correctly remove element from heap', () => {
    const array = [1, 3, 2, 5, 6, 7, 4, 9, 8];
    const minHeap = new MinHeap(array);
    const removedElement = minHeap.remove();
    expect(removedElement).toBe(1);
    expect(minHeap.heap).toEqual([2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('should correctly return the minimum element in heap', () => {
    const array = [1, 3, 2, 5, 6, 7, 4, 9, 8];
    const minHeap = new MinHeap(array);
    const minElement = minHeap.peek();
    expect(minElement).toBe(1);
  });

  it('peek() returns the minimum value in the heap', () => {
    const heap = new MinHeap([3, 1, 2]);
    expect(heap.peek()).toBe(1);
    heap.insert(-1);
    expect(heap.peek()).toBe(-1);
    heap.remove();
    expect(heap.peek()).toBe(1);
  });
});
