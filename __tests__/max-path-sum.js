const { maxPathSum } = require('../Problems/Binary_Trees/max-path-sum');

describe('Max Path Sum Tests', () => {
  class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }

  it('should determine right result', () => {
    const a = new Node(3);
    const b = new Node(11);
    const c = new Node(4);
    const d = new Node(4);
    const e = new Node(-2);
    const f = new Node(1);

    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    c.right = f;

    const result = maxPathSum(a);

    expect(result).toEqual(18);
  });

  it('should determine right result', () => {
    const a = new Node(5);
    const b = new Node(11);
    const c = new Node(54);
    const d = new Node(20);
    const e = new Node(15);
    const f = new Node(1);
    const g = new Node(3);

    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    e.left = f;
    e.right = g;

    const result = maxPathSum(a);

    expect(result).toEqual(59);
  });

  it('should determine right result', () => {
    const a = new Node(-1);
    const b = new Node(-6);
    const c = new Node(-5);
    const d = new Node(-3);
    const e = new Node(0);
    const f = new Node(-13);
    const g = new Node(-1);
    const h = new Node(-2);

    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    c.right = f;
    e.left = g;
    f.right = h;

    const result = maxPathSum(a);

    expect(result).toEqual(-8);
  });
});
