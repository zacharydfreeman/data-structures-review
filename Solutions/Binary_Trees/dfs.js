/*
 Write a function, dfs, that takes in the root of a binary tree.
 The function should return an array containing all values of the tree in breadth-first order.
      8
    /   \
   1     2
  / \     \
 9   4     3

 Output => [8, 1, 9, 4, 2, 3]
 */

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Approach: Iterative, First-in last-out stack
// Time & Space Complexity: O(n) time | O(n) space where n is the # of nodes
const dfs = (root) => {
  // if root is null return empty array
  if (!root) return [];
  // declare output variable that will contain values
  const output = [];
  // declare a stack intialized with root
  const stack = [root];
  // iterate while stack is not empty
  while (stack.length) {
    // grab first node in stack
    const current = stack.pop();
    // insert value into output array
    output.push(current.val);
    // add left and right nodes if they exist. Add right first in order to get correct DFS order
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }
  // return output
  return output;
};

// Approach: Recursive
// Time & Space Complexity: O(n) time | O(n) space where n is # of nodes
const dfs2 = (root) => {
  // base case => if root is null return empty array
  if (root === null) return [];
  // recursively call dfs on root.left
  const leftValues = dfs2(root.left);
  // recursively call dfs on root.right
  const rightValues = dfs2(root.right);
  // return array of the combined values
  return [root.val, ...leftValues, ...rightValues];
};
