/// find Spiral binary tree

function findSpiralBinaryTree(root) {
  // ======================== first approach ========================
  //   if (!root) {
  //     return null;
  //   }
  //   let queue = [];
  //   queue.push(root);
  //   let result = [];
  //   while (queue.length) {
  //     
  //       let node = queue.shift();
  //       result.push(node.val);
  //       if (node.left) {
  //         queue.push(node.left);
  //       }
  //       if (node.right) {
  //         queue.push(node.right);
  //       }
  //   
  //   }
  //   return result;

  //================ Second approach =============================
  if (!root) return [];

  let result = [];
  let stack1 = [root];
  let stack2 = [];
  let level = 0;

  while (stack1.length !== 0) {
    let node = stack1.pop();
    result.push(node.data);

    if (level % 2 === 0) {
      if (node.right) stack2.push(node.right);
      if (node.left) stack2.push(node.left);
    } else {
      if (node.left) stack2.push(node.left);
      if (node.right) stack2.push(node.right);
    }

    if (stack1.length === 0) {
      level++;
      [stack1, stack2] = [stack2, stack1.reverse()];
    }
  }

  return result;
}
