// https://leetcode.com/problems/add-two-numbers/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let dummyHead = new ListNode(0);
  let current = dummyHead;
  let carry = 0;
  let p = l1;
  let q = l2;
  let sum = 0;

  while (p || q) {
    const x = p ? p.val : 0;
    const y = q ? q.val : 0;
    sum = x + y + carry;
    carry = parseInt(sum / 10);
    current.next = new ListNode(parseInt(sum % 10));
    current = current.next;
    if (p) {
      p = p.next;
    }
    if (q) {
      q = q.next;
    }
  }
  if (carry > 0) {
    current.next = new ListNode(carry);
  }
  return dummyHead.next;
};
