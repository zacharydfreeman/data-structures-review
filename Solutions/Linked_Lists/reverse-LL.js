/**
 * Write a function, reverseList, that takes in the head of a linked list as an argument.
 * The function should reverse the order of the nodes in the linked list in-place and return the new head of the reversed linked list.
 *
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Approach: Iterative, Two pointers
// Time & Space Complexity: O(n) time | O(1) space where n is # of nodes in linked list
const reverseList = (head) => {
  // declare prev and current pointers
  let prev = null; // prev should start at null because we want the head to point that
  let current = head;
  // traverse linked list
  while (current) {
    // save next node, so we dont lose it
    const next = current.next;
    // reverse. set current.next to prev
    current.next = prev;
    // update pointers
    prev = current;
    current = next;
  }
  // return the new head of linked list which is prev
  return prev;
};

// Approach: Recursive
// Time & Space Complexity: O(n) time | O(n) space where n is # of nodes in linked list
const reverseList2 = (head, prev = null) => {
  // base case => if current null return prev
  if (!head) return prev;
  // grab next node
  const next = head.next;
  // set current.next to prev
  head.next = prev;
  // return result from recursively calling function with updated pointers
  return reverseList2(next, head);
};
