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
 * @return {number}
 */
const longestZigZag = function(root) {
    let result = 0;
    const LEFT = 'left';
    const RIGHT = 'right';

    const traverseAndGetZigZag = function (node, previous, length = 0) {
        if (!node) {
            return;
        }
        
        result = Math.max(result, length);
        
        traverseAndGetZigZag(node.left, LEFT, previous === RIGHT ? length + 1 : 1);
        traverseAndGetZigZag(node.right, RIGHT, previous === LEFT ? length + 1 : 1);
    }
    
    traverseAndGetZigZag(root);
    
    return result;
};