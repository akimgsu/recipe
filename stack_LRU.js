/*
146. LRU Cache :https://leetcode.com/problems/lru-cache/#
https://www.youtube.com/watch?v=3Z9G5qRmI-I&list=PLrClazTqVpJnoLCprxP1yIjIzAU8HINcY&index=5
Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.
LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
int get(int key) Return the value of the key if the key exists, otherwise return -1.
void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
The functions get and put must each run in O(1) average time complexity
Explanation
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1);    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
*/
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
    }
    get(key) {
        if (this.map.has(key)) {
            let val = this.map.get(key);
            this.map.delete(key);
            this.map.set(key, val);
            return val;
        } else {
            return -1;
        }
    }
    put(key, val) {
        if (this.get(key) === -1) {
            if (this.capacity === this.map.size) {
                for (let keyVal of this.map) {
                    this.map.delete(keyVal[0]);
                    break;
                }
            }
        }
        this.map.set(key, val);
    }
}



/**
 * @param {number} capacity
 */
var LRUCacheOld = function (capacity) {

};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCacheOld.prototype.get = function (key) {

};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCacheOld.prototype.put = function (key, value) {

};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
