const { linkedListCycle } = require('../Linked_Lists/has-cycle');

describe('Has Cycle Tests', () => {
  class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }

  it('Should determine if list has cycle', () => {
    const a = new Node(5);
    const b = new Node(4);
    const c = new Node(3);
    const d = new Node(-1);
    const e = new Node(7);

    a.next = b;
    b.next = c;
    c.next = d;
    d.next = e;

    const result = linkedListCycle(a);
    expect(result).toEqual(false);
  });

  it('Should determine if list has cycle', () => {
    const a = new Node('a');
    const b = new Node('b');
    const c = new Node('c');
    const d = new Node('d');

    a.next = b;
    b.next = c;
    c.next = d;
    d.next = b;

    const result = linkedListCycle(a);
    expect(result).toEqual(true);
  });

  it('Should determine if list has cycle', () => {
    const q = new Node('q');
    const r = new Node('r');
    const s = new Node('s');
    const t = new Node('t');
    const u = new Node('u');

    q.next = r;
    r.next = s;
    s.next = t;
    t.next = u;
    u.next = q;

    const result = linkedListCycle(q);
    expect(result).toEqual(true);
  });

  it('Should handly empty lists', () => {
    const result = linkedListCycle(null);
    expect(result).toEqual(false);
  });
});
