/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function(difficulty, profit, worker) {
    const difficultyAndProfitList = [];
    let result = 0;
    
    for (let i = 0; i < difficulty.length; i++) {
        difficultyAndProfitList[i] = {
            difficulty: difficulty[i],
            profit: profit[i]
        }
    }
    
    const sortedDifficultyAndProfitList = difficultyAndProfitList.sort((a, b)=> b.profit - a.profit);
    
    console.log("difficultyAndProfitList", difficultyAndProfitList);
    
    for (let i = 0; i < worker.length; i++) {
        const targetWorker = worker[i];
        
        for (let j = 0; j < sortedDifficultyAndProfitList.length; j++) {
            if (targetWorker >= sortedDifficultyAndProfitList[j].difficulty) {
                result += sortedDifficultyAndProfitList[j].profit;
                
                break;
            }
        }
    }
    
    
    return result;
};