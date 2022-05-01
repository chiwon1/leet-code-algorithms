/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
const leafSimilar = function(root1, root2) {
    const root1Leaves = [];
    const root2Leaves = [];
    let reuslt = true;
    
    const getLeaves = (node, resultArr) => {
        if (!node.left && !node.right) {
            resultArr.push(node.val);

            return;
        }
        
        if (node.left) {
            getLeaves(node.left, resultArr);
        }
        
        if (node.right) {
            getLeaves(node.right, resultArr);
        }
    }
    
    getLeaves(root1, root1Leaves);
    getLeaves(root2, root2Leaves);
    
    if (root1Leaves.length !== root2Leaves.length) {
        return false;
    }
    
    root1Leaves.forEach((leaf, index) => {
        if (leaf !== root2Leaves[index]) {
            reuslt = false;
        }
    })
    
    return reuslt;
};