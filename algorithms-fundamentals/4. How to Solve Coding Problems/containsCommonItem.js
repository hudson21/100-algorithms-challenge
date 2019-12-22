// Given 2 arrays, create a function that let's a user know (true/false) whether two arrays contain any common items
/*For Example: 
    const array1 = ['a','b','c','x'];
    const array2 = ['z','y','i'];
    Should return false
------------------------------------------------
    const array1 = ['a','b','c','x'];
    const array2 = ['z','y','x'];
    Should return true
                ^
                |
                |
                |
    
    1. Write down the key points at the top
    2. What are the inputs and outputs 
        2 parameters - arrays - no size limit
        return true or false
    3. Most important value of the problem: Ask about the input size, time complexity, space complexity
    4. Dont ask too many questions
    5. Naive Brute force (Speak about it), O(n^2) is the brute force approach
    6. Explain why the brute force approach is not the best
    7. Explain deeper the reason of why this approach is not the best one to solve the problem
    8. List the steps you are gonna follow in the new approach before coding
    9. Modulariza your code into small pieces to have a better understanding of the solution overall
        (Talk about this at the final of the interview if there is the chance )
    10. Write your code
    11. Check about error input scenarios
    12. Write code that reads well. Used related variable names
    13. Test yout code: no params, 0, null, undefined, etc...


*/

//--------------Brute Force Solution (You don't have to code this one!!)----------------------------------

function containsCommonItem(array1, array2) {
    for (let i=0; i < array1.length; i++) {
        for (let j=0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                return true
            }
        }
    }
    return false;
} 

// O(a*b) --> Because of nested loops
// Space Complexity --> O(1) because there is not a creation of any variable

// console.log(containsCommonItem(['a','b','c','x'],['z','y','x']));

// There is a pattern with nested loops where it can be used hash tables (in javascript are objects)

// ------------------------------Faster Approach-------------------------------------------------------

const array1 = ['a','b','c','x'];
const array2 = ['z','y','x'];

// array1 ==> obj {
//     a: true, 
//     b: true,
//     c: true,
//     x: true
// }
// array2[index] === obj.properties

function containsCommonItem2(arr1, arr2) {
    // loop through first array and create object where properties === items in the array 
    // can we assume always 2 params ?
    let map = {};
    for (let i=0; i < arr1.length; i++) {
        if (!map[arr1[i]]) {
            const item = arr1[i];
            map[item] = true;
        }
    }
    // loop through second array and check if item in second array exists on created object.
    for (let j=0; j < arr2.length; j++) {
        if (map[arr2[j]]) {
            return true
        }
    }
    return false;
}

// console.log(containsCommonItem2(['a','b','c','x'],['z','y','x']));
// O(a + b) Time Complexity
// O(a) --> Space Complexity (because the map object is created)

// ----------------------------- More Readable Approach ---------------------------------------------------------

// Hints some() and includes()
function containsCommonItem3(arr1, arr2) {
    // loop through first array and create object where properties === items in the array 
    // can we assume always 2 params ?
    return arr1.some(item => arr2.includes(item));
    // loop through second array and check if item in second array exists on created object.
}

console.log(containsCommonItem3(['a','b','c','x'],['z','y','x']));


