const { isBinarySearchTree } = require('../Problems/Binary_Trees/is-bst');

describe('Is Binary Search Tree Tests', () => {
  class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }

  it('should determine if BST', () => {
    const a = new Node(12);
    const b = new Node(5);
    const c = new Node(18);
    const d = new Node(3);
    const e = new Node(9);
    const f = new Node(19);

    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    c.right = f;

    const result = isBinarySearchTree(a);

    expect(result).toEqual(true);
  });

  it('should determine if BST', () => {
    const a = new Node(12);
    const b = new Node(5);
    const c = new Node(18);
    const d = new Node(3);
    const e = new Node(15);
    const f = new Node(19);

    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    c.right = f;

    const result = isBinarySearchTree(a);

    expect(result).toEqual(false);
  });

  it('should determine if BST', () => {
    const a = new Node(12);
    const b = new Node(5);
    const c = new Node(19);
    const d = new Node(3);
    const e = new Node(9);
    const f = new Node(19);

    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    c.right = f;

    const result = isBinarySearchTree(a);

    expect(result).toEqual(true);
  });

  it('should determine if BST', () => {
    const a = new Node(12);
    const b = new Node(5);
    const c = new Node(10);
    const d = new Node(3);
    const e = new Node(9);
    const f = new Node(19);

    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    c.right = f;

    const result = isBinarySearchTree(a);

    expect(result).toEqual(false);
  });

  it('should determine if BST', () => {
    const a = new Node(12);
    const b = new Node(5);
    const c = new Node(19);
    const d = new Node(5);
    const e = new Node(9);
    const f = new Node(19);

    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    c.right = f;

    const result = isBinarySearchTree(a);

    expect(result).toEqual(false);
  });
});
