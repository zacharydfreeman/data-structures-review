const { mergeTwoLists } = require('../Linked_Lists/merge-LL');

describe('Merege Two Lists Tests', () => {
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

  it('Should merge lists', () => {
    const a = new Node(5);
    const b = new Node(7);
    const c = new Node(10);
    const d = new Node(12);
    const e = new Node(20);
    const f = new Node(28);
    a.next = b;
    b.next = c;
    c.next = d;
    d.next = e;
    e.next = f;

    const q = new Node(6);
    const r = new Node(8);
    const s = new Node(9);
    const t = new Node(25);
    q.next = r;
    r.next = s;
    s.next = t;

    const a0 = new Node(5);
    const b0 = new Node(7);
    const c0 = new Node(10);
    const d0 = new Node(12);
    const e0 = new Node(20);
    const f0 = new Node(28);
    const q0 = new Node(6);
    const r0 = new Node(8);
    const s0 = new Node(9);
    const t0 = new Node(25);

    a0.next = q0;
    q0.next = b0;
    b0.next = r0;
    r0.next = s0;
    s0.next = c0;
    c0.next = d0;
    d0.next = e0;
    e0.next = t0;
    t0.next = f0;

    const result = mergeTwoLists(a, q);
    expect(result).toBeDefined();
    expect(isSameList(result, a0)).toEqual(true);
  });

  it('Should merge lists', () => {
    const a = new Node(5);
    const b = new Node(7);
    const c = new Node(10);
    const d = new Node(1);
    const e = new Node(20);
    const f = new Node(28);
    a.next = b;
    b.next = c;
    c.next = d;
    d.next = e;
    e.next = f;

    const q = new Node(6);
    const r = new Node(8);
    const s = new Node(9);
    const t = new Node(25);
    q.next = r;
    r.next = s;
    s.next = t;

    const a0 = new Node(5);
    const b0 = new Node(7);
    const c0 = new Node(10);
    const d0 = new Node(12);
    const e0 = new Node(20);
    const f0 = new Node(28);
    const q0 = new Node(6);
    const r0 = new Node(8);
    const s0 = new Node(9);
    const t0 = new Node(25);

    a0.next = q0;
    q0.next = b0;
    b0.next = r0;
    r0.next = s0;
    s0.next = c0;
    c0.next = d0;
    d0.next = e0;
    e0.next = t0;
    t0.next = f0;

    const result = mergeTwoLists(a, q);
    expect(result).toBeDefined();
    expect(isSameList(result, a0)).toEqual(false);
  });

  it('Should merge lists', () => {
    const a = new Node(5);
    const b = new Node(7);

    a.next = b;

    const a0 = new Node(5);
    const b0 = new Node(7);

    a0.next = b0;

    const result = mergeTwoLists(a, null);
    expect(result).toBeDefined();
    expect(isSameList(result, a0)).toEqual(true);
  });
});
