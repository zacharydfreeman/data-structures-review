/**
 Write a function, sumList, that takes in the head of a linked list containing numbers as an argument.
 The function should return the total sum of all values in the linked list.

 5 -> 4 -> 3 -> -1 -> 7
 Output => 18

 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Approach: Iterative, Pointers
// Time & Space Complexity: O(n) time | O(1) space where n is the # of nodes in linked list
const sumList = (head) => {
  // declare total sum variable and initialize to 0
  let sum = 0;
  // declare current variable that will be used to traverse linked list
  let current = head;
  // traverse linked list
  while (current) {
    // add current.val to sum
    sum += current.val;
    // update pointer
    current = current.next;
  }
  // return sum
  return sum;
};

// Approach: Recurisve
// Time & Space Complexity: O(n) time | O(n) space
const sumList2 = (head) => {
  // base case => if current node is null return 0
  if (!head) return 0;
  // return head.val + recursively call of head.next
  return head.val + sumList2(head.next);
};
