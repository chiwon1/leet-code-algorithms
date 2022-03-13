
var MyQueue = function() {
    this.input = [];
    this.output = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.input.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {       
    while (this.input.length) {
        this.output.push(this.input.pop());
    }
    
    const result = this.output.pop();
    
    while (this.output.length) {
       this.input.push(this.output.pop());
    }

    return result;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    const stack1Copy = this.input.slice();
    
    while (stack1Copy.length) {
        this.output.push(stack1Copy.pop());
    }
    
    const result = this.output.at(-1);
    
    this.output = [];
    
    return result;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.input.length > 0 ? false : true;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */