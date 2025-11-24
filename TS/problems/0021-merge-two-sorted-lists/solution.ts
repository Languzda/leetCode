/**
 * Problem 21: Merge Two Sorted Lists
 *
 * Difficulty: Easy
 * Tags: [Linked List, Recursion]
 *
 * Description:
 *
 */

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (!list1) return list2;
  if (!list2) return list1;

  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
}

// Run only when executed directly
if (require.main === module) {
  console.log("Running solution...");
  console.log("No runnable example for this problem.");
}
