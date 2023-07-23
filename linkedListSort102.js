class Solution {
    segregate(head) {
        // Count the occurrences of 0, 1, and 2 in the linked list.
        let map = new Map();
        let current = head;
        while (current !== null) {
            map.set(current.data, (map.get(current.data) || 0) + 1);
            current = current.next;
        }

        // Rearrange the linked list based on the counts.
        current = head;
        while (current !== null) {
            if (map.get(0) > 0) {
                current.data = 0;
                map.set(0, map.get(0) - 1);
            } else if (map.get(1) > 0) {
                current.data = 1;
                map.set(1, map.get(1) - 1);
            } else if (map.get(2) > 0) {
                current.data = 2;
                map.set(2, map.get(2) - 1);
            }
            current = current.next;
        }

        return head;
    }
}