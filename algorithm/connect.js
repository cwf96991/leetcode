/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 * https://leetcode.com/problems/populating-next-right-pointers-in-each-node/
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  dfs(root, null);
  return root;
};
function dfs(curr, next) {
  if (curr == null) return;
  curr.next = next;
  dfs(curr.left, curr.right);
  dfs(curr.right, curr.next == null ? null : curr.next.left);
}
