const { invertTree } = require('../Problems/Binary_Trees/invert-tree');

describe('Invert Tree Tests', () => {
  class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }

  const isSameTree = (root1, root2) => {
    if (!root1 && !root2) return true;
    if (!root1 || !root2) return false;
    if (root1.val !== root2.val) return false;
    return (
      isSameTree(root1.left, root2.left) && isSameTree(root1.right, root2.right)
    );
  };

  it('should invert tree', () => {
    const a = new Node('a');
    const b = new Node('b');
    const c = new Node('c');
    const d = new Node('d');
    const e = new Node('e');
    const f = new Node('f');
    const g = new Node('g');
    const h = new Node('h');

    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    c.right = f;
    e.left = g;
    e.right = h;

    const result = invertTree(a);
    expect(result).toBeDefined();

    const a0 = new Node('a');
    const b0 = new Node('b');
    const c0 = new Node('c');
    const d0 = new Node('d');
    const e0 = new Node('e');
    const f0 = new Node('f');
    const g0 = new Node('g');
    const h0 = new Node('h');
    a0.left = c0;
    a0.right = b0;
    c0.left = f0;
    b0.left = e0;
    b0.right = d0;
    e0.left = h0;
    e0.right = g0;

    expect(isSameTree(result, a0)).toEqual(true);
  });

  it('should invert tree', () => {
    const u = new Node('u');
    const t = new Node('t');
    const s = new Node('s');
    const r = new Node('r');
    const q = new Node('q');
    const p = new Node('p');

    u.left = t;
    u.right = s;
    s.right = r;
    r.left = q;
    r.right = p;

    const result = invertTree(u);
    expect(result).toBeDefined();

    const u0 = new Node('u');
    const t0 = new Node('t');
    const s0 = new Node('s');
    const r0 = new Node('r');
    const q0 = new Node('q');
    const p0 = new Node('p');
    u0.left = s0;
    u0.right = t0;
    s0.left = r0;
    r0.left = p0;
    r0.right = q0;

    expect(isSameTree(result, u0)).toEqual(true);
  });
});
