// Reverse a linked list

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 * return this
 * }
 * function
 * 
 * var list = new ListNode
 * **/


// function reverse(head, k) {
//     let current = head;
//     let prev = null;
//     let next = null;
//     let count = 0;
    
//     while (count < k && current !== null) {
//         next = current.next;
//         current.next = prev;
//         prev = current;
//         current = next;
//         count++;
//     }
    
//     if (next !== null) {
//         head.next = reverse(next, k);
//     }
    
//     return prev;
// }



function reverse(node){
    let prev = null;
    let current = node;
    let next = null;
    while(current!== null){
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}



