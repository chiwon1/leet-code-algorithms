/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) {
        return 0;
    }
    
    let maxDepthCount = 0;
    const stack = [];
    
    stack.push([root, 1]);
    
    while (stack.length > 0) {
        const [node, depth] = stack.pop();
        
        maxDepthCount = Math.max(maxDepthCount, depth);
        
        for (const child of node.children) {
            stack.push([child, depth + 1]);
        }
    }
    
    return maxDepthCount;
};

