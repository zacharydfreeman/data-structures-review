/* 
https://leetcode.com/problems/merge-k-sorted-lists/description/

You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

*/
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Approach: Min Heap
// Time & Space Complexity: O(nlog(k)) time | O(k) space
const mergeKLists = (lists) => {
  // put head nodes in each list into an array
  const array = [];

  for (let k = 0; k < lists.length; k++) {
    const head = lists[k];
    if (head) array.push(head);
  }
  // create min heap
  const specialMinHeap = new SpecialMinHeap(array);
  // declare head variable
  const dummyNode = new ListNode(0);
  let current = dummyNode;

  // while there are still nodes in the heap
  while (specialMinHeap.heap.length) {
    const smallestNode = specialMinHeap.remove();
    // update list
    current.next = smallestNode;
    // update current pointer
    current = current.next;
    // add next node to heap if not null
    if (smallestNode.next) specialMinHeap.insert(smallestNode.next);
  }

  return dummyNode.next;
};

class SpecialMinHeap {
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
      // compare two children node values to determine which index to swap
      if (childTwoIdx !== -1 && heap[childTwoIdx].val < heap[childOneIdx].val) {
        idxToSwap = childTwoIdx;
      } else {
        idxToSwap = childOneIdx;
      }
      // determine if a swap needs to be made
      if (heap[idxToSwap].val < heap[currentIdx].val) {
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
    while (parentIdx >= 0 && heap[currentIdx].val < heap[parentIdx].val) {
      // swap
      [heap[parentIdx], heap[currentIdx]] = [heap[currentIdx], heap[parentIdx]];
      // update current and parent index pointers
      currentIdx = parentIdx;
      parentIdx = Math.floor((currentIdx - 1) / 2);
    }
  }
  // O(log(n)) time | O(1) space
  insert(node) {
    // push to end of heap
    this.heap.push(node);
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
    const removedNode = this.heap.pop();
    // sift down
    this.siftDown(0, this.heap.length - 1, this.heap);
    // return removed element
    return removedNode;
  }
  // O(1) time | O(1) space
  peek() {
    return this.heap[0];
  }
}
