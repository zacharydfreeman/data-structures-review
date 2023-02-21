const { dfs } = require('../Problems/Binary_Trees/dfs');

describe('Depth First Search Tests', () => {
  class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }

  it('should handle null root', () => {
    const result = dfs(null);
    const expected = [];
    expect(result).toEqual(expected);
  });

  it('should return values in DFS order', () => {
    const eight = new Node(8);
    const one = new Node(1);
    const two = new Node(2);
    const nine = new Node(9);
    const four = new Node(4);
    const three = new Node(3);
    eight.left = one;
    eight.right = two;
    one.left = nine;
    one.right = four;
    two.right = three;
    const result = dfs(eight);
    const expected = [8, 1, 9, 4, 2, 3];
    expect(result).toEqual(expected);
  });

  it('should return values in DFS order', () => {
    const eight = new Node(8);
    const one = new Node(1);
    const two = new Node(2);
    const nine = new Node(9);
    const four = new Node(4);
    const three = new Node(3);
    eight.left = nine;
    eight.right = three;
    nine.left = one;
    nine.right = two;
    three.right = four;
    const result = dfs(eight);
    const expected = [8, 9, 1, 2, 3, 4];
    expect(result).toEqual(expected);
  });

  it('should return values in DFS order', () => {
    const eight = new Node(8);
    const one = new Node(1);
    const two = new Node(2);
    const nine = new Node(9);
    const four = new Node(4);
    const three = new Node(3);
    eight.right = one;
    one.right = two;
    two.right = nine;
    nine.right = four;
    four.right = three;
    const result = dfs(eight);
    const expected = [8, 1, 2, 9, 4, 3];
    expect(result).toEqual(expected);
  });
});
