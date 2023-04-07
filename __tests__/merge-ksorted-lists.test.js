const { mergeKLists } = require('../Heaps/merge-ksorted-lists');

describe('mergeKLists', () => {
  class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }

  it('merges three sorted linked lists', () => {
    const list1 = new ListNode(1);
    list1.next = new ListNode(4);
    list1.next.next = new ListNode(5);

    const list2 = new ListNode(1);
    list2.next = new ListNode(3);
    list2.next.next = new ListNode(4);

    const list3 = new ListNode(2);
    list3.next = new ListNode(6);

    const mergedList = mergeKLists([list1, list2, list3]);

    expect(mergedList.val).toBe(1);
    expect(mergedList.next.val).toBe(1);
    expect(mergedList.next.next.val).toBe(2);
    expect(mergedList.next.next.next.val).toBe(3);
    expect(mergedList.next.next.next.next.val).toBe(4);
    expect(mergedList.next.next.next.next.next.val).toBe(4);
    expect(mergedList.next.next.next.next.next.next.val).toBe(5);
    expect(mergedList.next.next.next.next.next.next.next.val).toBe(6);
    expect(mergedList.next.next.next.next.next.next.next.next).toBeNull();
  });

  it('merges two sorted linked lists', () => {
    const list1 = new ListNode(1);
    list1.next = new ListNode(3);
    list1.next.next = new ListNode(5);

    const list2 = new ListNode(2);
    list2.next = new ListNode(4);
    list2.next.next = new ListNode(6);

    const mergedList = mergeKLists([list1, list2]);

    expect(mergedList.val).toBe(1);
    expect(mergedList.next.val).toBe(2);
    expect(mergedList.next.next.val).toBe(3);
    expect(mergedList.next.next.next.val).toBe(4);
    expect(mergedList.next.next.next.next.val).toBe(5);
    expect(mergedList.next.next.next.next.next.val).toBe(6);
    expect(mergedList.next.next.next.next.next.next).toBeNull();
  });

  it('merges one sorted linked list', () => {
    const list = new ListNode(1);
    list.next = new ListNode(2);
    list.next.next = new ListNode(3);

    const mergedList = mergeKLists([list]);

    expect(mergedList.val).toBe(1);
    expect(mergedList.next.val).toBe(2);
    expect(mergedList.next.next.val).toBe(3);
    expect(mergedList.next.next.next).toBeNull();
  });

  it('returns null for an empty list', () => {
    const mergedList = mergeKLists([]);

    expect(mergedList).toBeNull();
  });
});
