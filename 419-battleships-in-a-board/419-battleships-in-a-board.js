/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
    function dfs(x, y) {
        if (x <= -1 || x >= board.length || y <= -1 || y >= board[0].length) {
            return false;
        }

        if (board[x][y] === 'X') {
            board[x][y] = '.';

            dfs(x + 1, y);
            dfs(x, y + 1);

            return true;
        }

        return false;
    }
    
    let count = 0;
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (dfs(i, j)) {
                count++;
            }
        }
    }
    
    return count;
};

