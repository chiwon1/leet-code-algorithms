/**
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare = function(num) {
    const squareRoot = Math.sqrt(num);
    
    return squareRoot % 1 === 0 ? true : false;
};
