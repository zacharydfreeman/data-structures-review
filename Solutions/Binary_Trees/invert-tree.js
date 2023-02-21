/**
Write a function, invertTree, that takes in the root of a binary tree.
The function should flip the binary tree, turning left subtrees into right subtrees and vice-versa. This flipping should occur in-place by modifying the original tree. The function should return the root of the tree


     a
   /    \
  b      c
 / \      \
d   e      f
   / \
   g  h

flipTree(a);

      a
   /    \
  c      b
 /     /   \
f     e    d
    /  \
   h    g
 * */

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Approach: Recursive
// Time & Space Complexity: O(n) time | O(h) space where n is the # of nodes and h is the height of the tree
const invertTree = (root) => {
  // base case => if root is null return null
  if (root === null) return null;
  // recursively call function on left and right subtree and save to variables
  const left = invertTree(root.left);
  const right = invertTree(root.right);
  // set current root.right to left and current root.left to right
  root.right = left;
  root.left = right;
  // return root
  return root;
};

// Approach: Iteratively with helper function to swap left and right nodes
// Time & Space Complexity: O(n) time | O(n) space where n is # of nodes
const invertTree2 = (root) => {
  // declare a queue initialized with the root node
  const queue = [root];
  while (queue.length) {
    // grab current node
    const current = queue.shift();
    // if current is null, continue
    if (!current) continue;
    // swap left and right node
    swapNodes(current);
    queue.push(current.left);
    queue.push(current.right);
  }
  return root;
};

const swapNodes = (node) => {
  const rightNode = node.right;
  node.right = node.left;
  node.left = rightNode;
};
