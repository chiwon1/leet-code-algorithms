/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
const findContentChildren = function(greedyList, sizeList) {
    const sortedGreedyList = greedyList.sort((a, b) => a - b);
    const sortedSizeList = sizeList.sort((a, b) => a - b);

    let result = 0;

    for (let i = 0; i < sortedGreedyList.length; i++) {
        for (let j = 0; j < sortedSizeList.length; j++) {
            if (sortedGreedyList[i] <= sortedSizeList[j]) {
                sortedSizeList.splice(j, 1);
                result++;
                
                break;
            }
        }
    }
    
    return result;
};