/* 
Implement a MaxHeap class that supports:
    - building a Max Heap from an input of array of integers
    - inserting integers in the heap
    - removing the heap's maximum / root value
    - peeking at the heap's maximum / root value
    - sifting integers up and down the heap, which is to be used when inserting and removing values

*/

class MaxHeap {
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

module.exports = { MaxHeap };
