const { reverseList } = require('../Problems/Linked_Lists/reverse-LL');

describe('Reverse List Tests', () => {
  class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }

  const isSameList = (head1, head2) => {
    let current1 = head1;
    let current2 = head2;

    while (current1 && current2) {
      if (current1.val !== current2.val) return false;
      current1 = current1.next;
      current2 = current2.next;
    }

    if (current1 || current2) return false;

    return true;
  };

  it('Should reverse list', () => {
    const a = new Node(5);
    const b = new Node(4);
    const c = new Node(3);
    const d = new Node(-1);
    const e = new Node(7);

    a.next = b;
    b.next = c;
    c.next = d;
    d.next = e;

    const a0 = new Node(7);
    const b0 = new Node(-1);
    const c0 = new Node(3);
    const d0 = new Node(4);
    const e0 = new Node(5);

    a0.next = b0;
    b0.next = c0;
    c0.next = d0;
    d0.next = e0;

    const result = reverseList(a);
    expect(result).toBeDefined();
    expect(isSameList(result, a0)).toEqual(true);
  });

  it('Should reverse list', () => {
    const a = new Node(5);
    const b = new Node(4);
    const c = new Node(3);
    const d = new Node(-1);
    const e = new Node(7);

    a.next = b;
    b.next = c;
    c.next = d;
    d.next = e;

    const a0 = new Node(7);
    const b0 = new Node(-1);
    const c0 = new Node(3);
    const d0 = new Node(4);

    a0.next = b0;
    b0.next = c0;
    c0.next = d0;

    const result = reverseList(a);
    expect(result).toBeDefined();
    expect(isSameList(result, a0)).toEqual(false);
  });

  it('Should reverse list', () => {
    const a = new Node(5);
    const a0 = new Node(5);
    const result = reverseList(a);
    expect(result).toBeDefined();
    expect(isSameList(result, a0)).toEqual(true);
  });

  it('Should handle empty list', () => {
    const result = reverseList(null);
    expect(result).toBeNull();
  });
});
