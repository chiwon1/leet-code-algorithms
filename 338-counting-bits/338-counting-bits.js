/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const result = [];
    
    for (let i = 0; i < n + 1; i++) {
        const binaryValue = i.toString(2);
        let count = 0;
        
        for (let j = 0; j < binaryValue.length; j++) {
            if (Number(binaryValue[j]) === 1) {
                count++;
            }
        }
        
        result.push(count);
    }
    
    return result;
};