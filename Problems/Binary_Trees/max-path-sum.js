/**
 Write a function, maxPathSum, that takes in the root of a binary tree that contains number values.
 The function should return the maximum sum of any root to leaf path within the tree.
 You may assume that the input tree is non-empty.



      3
   /    \
  11     4
 / \      \
4   -2     1

maxPathSum(a); // -> 18

 */

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Approach:
// Time & Space Complexity:
const maxPathSum = (root) => {
  // TO DO
};

module.exports = { maxPathSum };
