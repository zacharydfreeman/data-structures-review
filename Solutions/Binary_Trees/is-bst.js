/**
 Write a function, isBinarySearchTree, that takes in the root of a binary tree.
 The function should return a boolean indicating whether or not the tree satisfies the
 binary search tree property. A Binary Search Tree is a binary tree where all values within
 a node's left subtree are smaller than the node's value and all values in a node's right subtree
 are greater than or equal to the node's value.

     12
   /   \
  5     18
 / \     \
3   9     19

Output => true

     12
   /   \
  5     18
 / \     \
3   1     19

Output => false
 */

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Approach: Recursive
// Time & Space Complexity: O(n) time | O(h) where n is # of nodes and h is height of the tree
const isBinarySearchTree = (root, minVal = -Infinity, maxVal = Infinity) => {
  // base case if root is null return true
  if (!root) return true;
  // base case if root val <= minVal or root val > maxVal
  if (root.val < minVal || root.val >= maxVal) return false;
  // recursively call function to check if left is valid
  const leftIsValid = isBinarySearchTree(root.left, minVal, root.val);
  // recursively call function to check if right is valid
  const rightIsValid = isBinarySearchTree(root.right, root.val, maxVal);
  // return if both results are true
  return leftIsValid && rightIsValid;
};
