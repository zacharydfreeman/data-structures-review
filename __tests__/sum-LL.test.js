const { sumList } = require('../Linked_Lists/sum-LL');

describe('Sum List Tests', () => {
  class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }

  it('Should sum correctly', () => {
    const a = new Node(5);
    const b = new Node(4);
    const c = new Node(3);
    const d = new Node(-1);
    const e = new Node(7);

    a.next = b;
    b.next = c;
    c.next = d;
    d.next = e;

    const result = sumList(a);
    expect(result).toEqual(18);
  });

  it('Should sum correctly', () => {
    const a = new Node(38);
    const b = new Node(4);

    a.next = b;

    const result = sumList(a);
    expect(result).toEqual(42);
  });

  it('Should sum correctly', () => {
    const a = new Node(-100);

    const result = sumList(a);
    expect(result).toEqual(-100);
  });

  it('Should handly empty lists', () => {
    const result = sumList(null);
    expect(result).toEqual(0);
  });
});
