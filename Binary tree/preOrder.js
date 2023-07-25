class Node {
    constructor(val) {
        this.key = val;
        this.left = null;
        this.right = null;
    }
}
 
// Root of Binary Tree
var root = null;
 
// Given a binary tree, print its nodes in preorder
function printPreOrder(node) {
    const result = []
    if (node == null)
        return result;
 
    // First print data of node
    result.push(node.key);
 
    // Then recur on left subtree
    printPreOrder(node.left);
 
    // Now recur on right subtree
    printPreOrder(node.right);
}