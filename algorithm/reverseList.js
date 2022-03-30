/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * https://leetcode.com/problems/reverse-linked-list/
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let cur= null;
  while (head) {
    let next = head.next;
    head.next = cur;
    cur = head;
    head = next;
  }
  return cur;
};
