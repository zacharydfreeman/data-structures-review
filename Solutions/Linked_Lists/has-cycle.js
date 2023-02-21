/*
Write a function, linkedListCycle, that takes in the head of a linked list as an argument.
The function should return a boolean indicating whether or not the linked list contains a cycle.

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');

a.next = b;
b.next = c;
c.next = d;
d.next = b; // cycle

//         _______
//       /        \
// a -> b -> c -> d

*/

//Approach: Fast & slow pointers
// Time & Space Complexity: O(n) time | O(1) space
const linkedListCycle = (head) => {
  // declare fast and slow pointers set to head
  let slow = head;
  let fast = head;
  // iterate while fast and fast.next is not null
  while (fast && fast.next) {
    // update pointers
    slow = slow.next;
    // move fast twice ahead
    fast = fast.next.next;
    // if pointers ever equal, there is a cycle
    if (fast === slow) return true;
  }
  // if you make it out of the while loop there is no cycle
  return false;
};
