// Given the head of a sorted linked list, delete all duplicates such that each element appears only once.
// Return the linked list sorted as well.

// Example 1:
// Input: head = [1,1,2]   (1->1->2)
// Output: [1,2]           (1->2)

// Example 2:
// Input: head = [1,1,2,3,3] (1->1->2->3->3)
// Output: [1,2,3]           (1->2->3)

// Constraints:
// The number of nodes in the list is in the range [0, 300].
// -100 <= Node.val <= 100
// The list is guaranteed to be sorted in ascending order.

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
 */
var deleteDuplicates = function (head) {
    const value = {};

    const dummy = new ListNode(-1);
    let current = dummy;

    while (head !== null) {
        if (!(head.val in value)) {
            value[head.val] = head.val;

            current.next = head;
            current = current.next;
        }
        head = head.next;
    }

    current.next = null;
    return dummy.next;
};

//* Because it is an sorted list, don't need to create copy list. Just checked the element after the pointer
var deleteDuplicates2 = function (head) {
    let current = head;

    while (current !== null & current.next !== null) {
        if (current.val === current.next.val) {
            current.next = current.next.next;  // skiped the duplicate node
        } else {
            current = current.next;  // move the pointer to next node
        }
    }

    return head;
}