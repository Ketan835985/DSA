class Node {
    constructor(val) {
        this.key = val;
        this.left = null;
        this.right = null;
    }
}
 
// Root of Binary Tree
var root = null;


function printInOrder(node) {
    let result = []
    if (node == null)
        return result;
 
    // First recur on left child */
    printInOrder(node.left);
 
    // Then print the data of node
    result.push(node.key);
 
    // Now recur on right child
    printInOrder(node.right);
}


