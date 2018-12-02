// https://leetcode.com/problems/reverse-linked-list

const assert = require("assert");

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head, prev) {
  if (!head) return prev;
  const result = head.next;
  head.next = prev;
  return reverseList(result, head);
};