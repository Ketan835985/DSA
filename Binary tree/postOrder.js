class Node {
    constructor(val) {
        this.key = val;
        this.left = null;
        this.right = null;
    }
}
 
// Root of Binary Tree
var root = null;
     
// Given a binary tree, print its nodes according
// to the "bottom-up" postorder traversal
function printPostOrder(node) {
    const result = []
    if (node == null)
        return result;
 
    // First recur on left subtree
    printPostOrder(node.left);
 
    // Then recur on right subtree
    printPostOrder(node.right);
 
    // Now deal with the node
    result.push(node.key);
}
 