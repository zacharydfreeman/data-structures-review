/* 
Implement Heap Sort
*/

// Approach: Build a max heap and swap pointers and reduce max heap size
// Time & Space Complexity: O(nlog(n)) time | O(1) space
const heapSort = (array) => {
  // build max heap
  buildMaxHeap(array);
  // declare a idx variable that will track the end of the current max heap
  let endIdx = array.length - 1;
  while (endIdx >= 0) {
    // swap first element and idx
    [array[0], array[endIdx]] = [array[endIdx], array[0]];
    // sift down
    siftDown(0, endIdx - 1, array);
    endIdx--;
  }
  // return array
  return array;
};

const buildMaxHeap = (array) => {
  const firstParentIdx = Math.floor((array.length - 2) / 2);
  for (let startIdx = firstParentIdx; startIdx >= 0; startIdx--) {
    siftDown(startIdx, array.length - 1, array);
  }
};

const siftDown = (startIdx, endIdx, heap) => {
  let currentIdx = startIdx;
  let childOneIdx = currentIdx * 2 + 1;
  while (childOneIdx <= endIdx) {
    const childTwoIdx = childOneIdx + 1 <= endIdx ? childOneIdx + 1 : -1;
    let idxToSwap;
    if (childTwoIdx !== -1 && heap[childTwoIdx] > heap[childOneIdx]) {
      idxToSwap = childTwoIdx;
    } else {
      idxToSwap = childOneIdx;
    }
    if (heap[idxToSwap] > heap[currentIdx]) {
      [heap[currentIdx], heap[idxToSwap]] = [heap[idxToSwap], heap[currentIdx]];
      currentIdx = idxToSwap;
      childOneIdx = currentIdx * 2 + 1;
    } else {
      return;
    }
  }
};

module.exports = { heapSort };
