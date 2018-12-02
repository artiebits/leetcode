// https://leetcode.com/problems/merge-two-sorted-lists

const assert = require("assert");

/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;

  let result;

  if (l1.val < l2.val) {
    result = new ListNode(l1.val);
    result.next = mergeTwoLists(l1.next, l2);
  } else {
    result = new ListNode(l2.val);
    result.next = mergeTwoLists(l2.next, l1);
  }

  return result;
};

const l1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 4,
      next: null
    }
  }
};

const l2 = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 4,
      next: null
    }
  }
};

const expectedResult = {
  val: 1,
  next: {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: {
          val: 4,
          next: {
            val: 4,
            next: null
          }
        }
      }
    }
  }
};

assert.deepEqual(mergeTwoLists(l1, l2), expectedResult);
