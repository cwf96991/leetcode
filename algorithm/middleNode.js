/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * https://leetcode.com/study-plan/algorithm/?progress=7olgv93
 * Two pointer
 */
var middleNode = function (head) {
  let slow = head;
  let fast = head;
  //fast != null check for even case fast.next check for odd case
  while (fast != null && fast.next != null) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
};
