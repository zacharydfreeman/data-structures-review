/**
Write a function, mergeLists, that takes in the head of two sorted linked lists as arguments.
The function should merge the two lists together into single sorted linked list.
The function should return the head of the merged linked list.

Do this in-place, by mutating the original Nodes.

You may assume that both input lists are non-empty and contain increasing sorted numbers.

5 -> 7 -> 10 -> 12 -> 20 -> 28
 6 -> 8 -> 9 -> 25

 output => 5 -> 6 -> 7 -> 8 -> 9 -> 10 -> 12 -> 20 -> 25 -> 28


 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Approach:
// Time & Space Complexity:
const mergeTwoLists = (head1, head2) => {
  // TO DO
};

module.exports = { mergeTwoLists };
