// /**
//  * @param {number} capacity
//  */
// var LRUCache = function(capacity) {
//     this.limit = capacity;
//     this.size = 0;
//     this.storage = {};
//     this.LRUIndex = 0;
// };

// /** 
//  * @param {number} key
//  * @return {number}
//  */
// LRUCache.prototype.get = function(key) {
//     if (this.storage[key]) {
//         this.LRUIndex++;
        
//         this.storage[key].LRUIndex = this.LRUIndex;
        
//         return this.storage[key].value;
//     } else {
//         return -1;
//     }
// };

// /** 
//  * @param {number} key 
//  * @param {number} value
//  * @return {void}
//  */
// LRUCache.prototype.put = function(key, value) {
//     if (this.storage[key]) {
//         this.LRUIndex++;
        
//         this.storage[key] = {
//             LRUIndex: this.LRUIndex,
//             value: value
//         };
//     } else {
//         this.size++;
        
//         if (this.size > this.limit) {
//             let min = 99999;
//             let minKey = 0;
            
//             for (const key in this.storage) {
//                 if (this.storage[key].LRUIndex < min) {
//                     min = this.storage[key].LRUIndex,
//                     minKey = key;
//                 }
//             }
            
//             delete this.storage[minKey];
//             this.size--;
//         }

//         this.LRUIndex++;

//         this.storage[key] = {
//             LRUIndex: this.LRUIndex,
//             value: value
//         };
//     }
// };

// /** 
//  * Your LRUCache object will be instantiated and called as such:
//  * var obj = new LRUCache(capacity)
//  * var param_1 = obj.get(key)
//  * obj.put(key,value)
//  */

/**
 * @param {number} capacity
 */
function LRUCache(capacity) {
    this.cache = new Map();
    this.capacity = capacity;
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (!this.cache.has(key)) {
        return -1;
    }
    
    const value = this.cache.get(key);
    
    this.cache.delete(key);
    this.cache.set(key, value);
    
    return value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.cache.has(key)) {
        this.cache.delete(key);
        this.cache.set(key, value);
        
        return;
    }
    
    if (this.cache.size === this.capacity) {
        const [firstKey] = this.cache.keys();
        this.cache.delete(firstKey);
    }
    
    this.cache.set(key, value);
};