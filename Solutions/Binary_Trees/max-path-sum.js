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

// Approach: Recursive
// Time & Space Complexity: O(n) time | O(h) space where n is # of nodes and h is height of tree
const maxPathSum = (root) => {
  // base case => if root is null return -Infinity
  if (!root) return -Infinity;
  // base case => if root is leaf node return root.val
  if (!root.left && !root.right) return root.val;
  // recursively call function on left subtree
  const leftSum = maxPathSum(root.left);
  // recursively call function on right subtree
  const rightSum = maxPathSum(root.right);
  // return root.val plus the max of the left and right sums
  return root.val + Math.max(leftSum, rightSum);
};
