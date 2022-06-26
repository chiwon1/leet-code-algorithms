/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = function(rowIndex) {
    let previousRow = [1];
    let currentRow = [1, 1];
    
    for (let i = 1; i < rowIndex + 1; i++) {
        for (let j = 1; j < currentRow.length - 1; j++) {
            currentRow[j] = previousRow[j - 1] + previousRow[j];
        }
        
        previousRow = currentRow;
        currentRow = new Array(previousRow.length + 1).fill(1);
    }
    
    return previousRow;
};

