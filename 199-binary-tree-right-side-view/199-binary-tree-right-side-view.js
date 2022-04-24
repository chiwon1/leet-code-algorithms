/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    const result = [];
    const queue = [];
    
    if (root === null) {
        return result;
    };
    
    queue.push(root);
    
    while (queue.length > 0) {
        const levelLength = queue.length;

        for (let i = 0; i < levelLength; i++) {
            let node = queue.shift();
            
            if (i === levelLength - 1) {
                result.push(node.val)
            };
            
            if (node.left) {
                queue.push(node.left)
            };
            
            if (node.right) {
                queue.push(node.right)
            };
        }
    }
    
    return result;
};