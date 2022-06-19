/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function(n) {
    if (n === 1) {
        return 1;
    }
    
    if (n === 2) {
        return 2;
    }
    
    let preprev = 1;
    let prev = 2;
    let current = 0;
    
    for (let i = 3; i <= n; i++) {
        current = preprev + prev;
        
        preprev = prev;
        prev = current;
    }
    
    return current;
};