const { heapSort } = require('../Heaps/heap-sort');

describe('heapSort', () => {
  it('sorts an unsorted array', () => {
    const unsortedArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
    const sortedArray = [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9];
    expect(heapSort(unsortedArray)).toEqual(sortedArray);
  });

  it('sorts a sorted array', () => {
    const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(heapSort(sortedArray)).toEqual(sortedArray);
  });

  it('sorts a reversed array', () => {
    const reversedArray = [9, 8, 7, 6, 5, 4, 3, 2, 1];
    const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(heapSort(reversedArray)).toEqual(sortedArray);
  });

  it('sorts an array of one element', () => {
    const oneElementArray = [1];
    expect(heapSort(oneElementArray)).toEqual(oneElementArray);
  });

  it('sorts an empty array', () => {
    const emptyArray = [];
    expect(heapSort(emptyArray)).toEqual(emptyArray);
  });
});
