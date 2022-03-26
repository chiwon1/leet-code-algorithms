
var FreqStack = function() {
    this.frequency = {};
    this.stack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function(val) {
    this.frequency[val] = this.frequency[val] ? this.frequency[val] + 1 : 1;
    frequency = this.frequency[val];
    
    if (!this.stack[frequency]) {
        this.stack[frequency] = [];
    }
    
    this.stack[frequency].push(val);
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {
    const result = this.stack.at(-1).pop();
    
    this.frequency[result] = this.frequency[result] - 1;

    if (!this.stack.at(-1).length) {
        this.stack.pop();
    }

    return result;
};

/** 
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */