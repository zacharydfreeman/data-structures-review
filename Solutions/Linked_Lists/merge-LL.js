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

// Approach: Iterative, dummy node, pointers
// Time & Space Complexity: O(min(n, m)) time | O(1) space where n is length of list 1 and m is length of list 2
const mergeTwoLists = (head1, head2) => {
  // declare dummy node. Doesnt matter what the value is set to
  const dummyNode = new Node(null);
  // declare tail and current pointers
  let tail = dummyNode;
  let current1 = head1;
  let current2 = head2;
  // iterate while either exists
  while (current1 || current2) {
    // get both values. If either pointer doesnt exist, set value to Infinity
    const val1 = current1 ? current1.val : Infinity;
    const val2 = current2 ? current2.val : Infinity;

    if (val1 < val2) {
      // update tail.next to be current1
      tail.next = current1;
      // update current1 pointer
      current1 = current1.next;
    } else {
      // update tail.next to be current2
      tail.next = current2;
      // update current1 pointer
      current2 = current2.next;
    }
    // update tail pointer
    tail = tail.next;
  }
  // return dummy.next
  return dummyNode.next;
};

// Approach: Recursive
// Time & Space Complexity: O(min(n, m)) time | O(1) space where n is length of list 1 and m is length of list 2
const mergeTwoLists2 = (head1, head2) => {
  // base cases => if both nodes are null return null
  if (!head1 && !head2) return null;
  // if either of them is null, return the other list
  if (!head1) return head2;
  if (!head2) return head1;

  if (head1.val < head2.val) {
    // grab next node
    const next1 = head1.next;
    // head1.next will result of recursively calling function with updated pointers
    head1.next = mergeTwoLists2(next1, head2);
    // return head1
    return head1;
  } else {
    // grab next node
    const next2 = head2.next;
    // head2.next will result of recursively calling function with updated pointers
    head2.next = mergeTwoLists2(head1, next2);
    // return head2
    return head2;
  }
};
