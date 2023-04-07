/* 
Implement a MinHeap class that supports:
    - building a Min Heap from an input of array of integers
    - inserting integers in the heap
    - removing the heap's minimum / root value
    - peeking at the heap's minimum / root value
    - sifting integers up and down the heap, which is to be used when inserting and removing values

*/

class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }
  // O(n) time | O(1) space
  buildHeap(array) {
    // get first parent index
    const firstParentIdx = Math.floor((array.length - 2) / 2);
    for (let idx = firstParentIdx; idx >= 0; idx--) {
      // sift down each parent
      this.siftDown(idx, array.length - 1, array);
    }
    // return heapified array
    return array;
  }
  // O(log(n)) time | O(1) space
  siftDown(startIdx, endIdx, heap) {
    // determine child one
    let currentIdx = startIdx;
    let childOneIdx = currentIdx * 2 + 1;
    while (childOneIdx <= endIdx) {
      // get child two idx if valid
      const childTwoIdx = childOneIdx + 1 < heap.length ? childOneIdx + 1 : -1;
      // declare an idx to swap
      let idxToSwap;
      // compare two children to determine which index to swap
      if (childTwoIdx !== -1 && heap[childTwoIdx] < heap[childOneIdx]) {
        idxToSwap = childTwoIdx;
      } else {
        idxToSwap = childOneIdx;
      }
      // determine if a swap needs to be made
      if (heap[idxToSwap] < heap[currentIdx]) {
        // swap
        [heap[idxToSwap], heap[currentIdx]] = [
          heap[currentIdx],
          heap[idxToSwap],
        ];
        // update currentIdx and childOneIdx pointers
        currentIdx = idxToSwap;
        childOneIdx = currentIdx * 2 + 1;
      } else {
        return;
      }
    }
  }
  // O(log(n)) time | O(1) space
  siftUp(startIdx, heap) {
    // declare current and parent index pointers
    let currentIdx = startIdx;
    let parentIdx = Math.floor((currentIdx - 1) / 2);
    while (parentIdx >= 0 && heap[currentIdx] < heap[parentIdx]) {
      // swap
      [heap[parentIdx], heap[currentIdx]] = [heap[currentIdx], heap[parentIdx]];
      // update current and parent index pointers
      currentIdx = parentIdx;
      parentIdx = Math.floor((currentIdx - 1) / 2);
    }
  }
  // O(log(n)) time | O(1) space
  insert(val) {
    // push to end of heap
    this.heap.push(val);
    // sift up
    this.siftUp(this.heap.length - 1, this.heap);
  }
  // O(log(n)) time | O(1) space
  remove() {
    // swap first and last number
    [this.heap[0], this.heap[this.heap.length - 1]] = [
      this.heap[this.heap.length - 1],
      this.heap[0],
    ];
    // remove element
    const removedElement = this.heap.pop();
    // sift down
    this.siftDown(0, this.heap.length - 1, this.heap);
    // return removed element
    return removedElement;
  }
  // O(1) time | O(1) space
  peek() {
    return this.heap[0];
  }
}

module.exports = { MinHeap };
