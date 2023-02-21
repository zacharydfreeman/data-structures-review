/*
 Write a function, bfs, that takes in the root of a binary tree.
 The function should return an array containing all values of the tree in breadth-first order.
      8
    /   \
   1     2
  / \     \
 9   4     3

 Output => [8, 1, 2, 9, 4, 3]
 */

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Approach: Iterative, First-in first-out queue
// Time & Space Complexity: O(n) time | O(n) space where n is the # of nodes
// ** we are ignoring the additional time complexity the native JS shift() method uses **
const bfs = (root) => {
  // if root is null return empty array
  if (!root) return [];
  // declare output variable that will contain values
  const output = [];
  // declare a queue intialized with root
  const queue = [root];
  // iterate while queue is not empty
  while (queue.length) {
    // grab first node in queue
    const current = queue.shift();
    // insert value into output array
    output.push(current.val);
    // add left and right nodes if they exist
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  // return output
  return output;
};
