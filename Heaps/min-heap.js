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

  buildHeap() {}

  siftDown() {}

  siftUp() {}

  insert() {}

  remove() {}

  peek() {}
}

module.exports = { MinHeap };
