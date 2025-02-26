// Create the method get() and set in the HashTable Class

class HashTable {
    constructor(size) {
        this.data = new Array(size); // Another way to instantiate an array in JavaScript
    }

    _hash(key) {
        let hash = 0; 
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    } // O(1)

// My Approach
    // get(key) {
    //     for (let i = 0; i < this.data.length; i++) {
    //         console.log(this.data[i])
    //         if (this.data[key]) {
    //             return this.data[key];
    //         }
    //     }
    // }

    // set(key, item) {
    //     this.data.unshift([key, item]);
    //     return this.data[key];
    // }

// Andrei's Approach
    set(key, value) {
        let address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        return this.data;
    }// O(1)

    get(key) {
        let address = this._hash(key);
        const currentBucket = this.data[address];
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    }// O(1) --> If there is no Hash Table Collisions

    // Downside: We need to loop over all the elements in the array to find the keys no matter what
    keys() {
        const keysArray = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                keysArray.push(this.data[i][0][0]);
            }
        }
        return keysArray;
    }
}

const myHashTable = new HashTable(50);
console.log(myHashTable.set('grapes', 10000));
console.log(myHashTable.set('pineapple', 50));
console.log(myHashTable.set('oranges', 2));
console.log(myHashTable.set('cucumber', 10));
console.log(myHashTable.set('onion', 35));
console.log(myHashTable.get('grapes'));
console.log(myHashTable.get('pineapple'));
console.log(myHashTable.keys());