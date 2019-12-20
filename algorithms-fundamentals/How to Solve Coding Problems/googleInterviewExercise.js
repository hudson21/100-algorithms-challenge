// Based in two arrays find the pair of two numbers which make a sum established
/*
Example:
[1,2,3,9]   Sum: 8 --> must return false
[1,2,4,4]   Sum: 8 --> muest return false

*/

/*
1. Input --> array[int], sum
   Output --> Boolean value (true, false)

5. Nested loops to compare each element of the array with the remaining ones O(n^2) Quadratic Time

*/


// Hints the set() --> const mySet = new Set();
/*
    set.add()
    set.delete()
    set.has()
*/
function findPairNumbersWithSum(arr, sum) {
// Create the variabe object:
    const mySet = new Set();
//1. Compare each number in the array and find the missing number to make the sum (index: 1, sum: 8, numb: 7)
    for (let i of arr) {
        //2. Save the missing number in an object or array.
        if (mySet.has(i)) {    
        //4. If there is a match, It is returned true
            return true
        }
        mySet.add(sum - i);
    }
//5. If there is not a match. it is returned false
    return false;
}

console.log(findPairNumbersWithSum([1,2,4,2], 8));

// Time Complexity is O(n) --> Because there is only one for loop 
// Space Complexity --> O(a)
