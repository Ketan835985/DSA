function removeDuplicates(head) {
  let current = head;
  let pre = null;
  let s = new Set();

  while (current != null) {
    let curr = current.data;
    if (s.has(curr)) {
      // Remove the current node by skipping it
      pre.next = current.next;
    } else {
      s.add(curr);
      // Update 'pre' to the current node
      pre = current;
    }
    current = current.next;
  }
  return head;
}
