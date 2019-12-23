// Google Question
// Given an array = [2,5,1,2,3,5,1,2,4];
// It should return 2;

// Given an array = [2,1,1,2,3,5,1,2,4];
// It should return 1

// Given an array = [2,3,4,5];
// It should return undefined

/*
Input: Array: [] int 
Output: Integer 2 (first number repeated)

O(n) 

1. Take the array
2. create the hash map object
3. Make the for loop to iterate the indexes in the array 
4. If the number is not found in the hash table, add it 
5. If it is found return the repeated number
6. If it is no consecutive number return undefined
*/

//---------------------------------------- My Approach
function findConsecutiveNumber(array) {
    const map = {};
    
    if (!Array.isArray(array)) {
        return 'You can only enter an array';
    }

    for (let i = 0; i < array.length; i++) {
        if (array[i] in map) {
            return array[i];
        }
        map[array[i]] = true;
    }
    return undefined;
}// O(n)

// console.log(findConsecutiveNumber([2,5,1,2,3,5,1,2,4]));
// console.log(findConsecutiveNumber([2,1,1,2,3,5,1,2,4]));
// console.log(findConsecutiveNumber([2,3,4,5]));
// console.log(findConsecutiveNumber([2,5,5,2,3,5,1,2,4]));
// console.log(findConsecutiveNumber([1]));

//----------------------------------------Naive-Brute Solution by Andrei
function firstRecurringCharacter(input) {
    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
            if (input[i] === input[j]) {
                return input[i];
            }
        }
    }
    return undefined;
} // Time Complexity --> O(n^2)
// Space Complexity --> O(1)

console.log(firstRecurringCharacter([2,5,1,2,3,5,1,2,4]));
console.log(firstRecurringCharacter([2,5,5,2,3,5,1,2,4]));

// --------------------------- Andrei's Approach using Hash Tables
function firstRecurringCharacter2(input) {
    let map = {};
    for (let i = 0; i < input.length; i++) {
        if (map[input[i]] !== undefined) { // If we get 0 it means 0 will be treated as falsy
            return input[i];
        } else {
            map[input[i]] = i;
        }
    }
    console.log(map);
    return undefined;
} //Time Complexity --> O(n)

// console.log(firstRecurringCharacter2([2,5,1,2,3,5,1,2,4]));


