const { MaxHeap } = require('../Heaps/max-heap');

describe('Max Heap tests', () => {
  it('should correctly build heap', () => {
    const array = [9, 3, 7, 1, 8, 2, 4, 5, 6];
    const maxHeap = new MaxHeap(array);
    expect(maxHeap.heap).toEqual([9, 8, 7, 6, 3, 2, 4, 5, 1]);
  });

  it('should correctly insert element into heap', () => {
    const array = [1, 3, 2, 5, 6, 7, 4, 9, 8];
    const maxHeap = new MaxHeap(array);
    maxHeap.insert(10);
    expect(maxHeap.heap[0]).toEqual(10);
  });

  it('should correctly remove element from heap', () => {
    const array = [1, 3, 2, 5, 6, 7, 4, 9, 8];
    const maxHeap = new MaxHeap(array);
    const removedElement = maxHeap.remove();
    expect(removedElement).toBe(9);
    expect(maxHeap.heap).toEqual([8, 6, 7, 5, 3, 2, 4, 1]);
  });

  it('should correctly return the maximum element in heap', () => {
    const array = [1, 3, 2, 5, 6, 7, 4, 9, 8];
    const maxHeap = new MaxHeap(array);
    const maxElement = maxHeap.peek();
    expect(maxElement).toBe(9);
  });

  it('peek() returns the maximum value in the heap', () => {
    const heap = new MaxHeap([3, 1, 2]);
    expect(heap.peek()).toBe(3);
    heap.insert(4);
    expect(heap.peek()).toBe(4);
    heap.remove();
    expect(heap.peek()).toBe(3);
  });
});
