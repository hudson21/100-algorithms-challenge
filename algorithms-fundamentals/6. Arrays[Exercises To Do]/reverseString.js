//Create a function that reverses a string
// 'Hi My name is Carlos Hudson' should be: 
// nosduH solraC si eman yM iH

/*
Input: String
Ouput: Resverse String 

Ask about the time complexity and the space complexity

O(n) --> Split() function

Steps to solve the problem
1. Use the split to divice the characters
2. Use a for loop to change the indexes
3. Return the array traversed

*/

//Andrei's Approach
function reverse(str) {
    // Check input
    if (!str || str.length < 2 || typeof str !== 'string') {
        return 'hmm that is not good'
    }
    
    const backwards = [];
    const totalItems = str.length - 1;

    for (let i = totalItems; i >= 0; i--) {
        backwards.push(str[i]);
    }

    return backwards.join('');
}

// Built method
function reverse2(str) {
    return str.split('').reverse().join('');
}

// Using ES6
const reverse3 = str => str.split('').reverse().join('');

console.log(reverse('Hi My name is Carlos Hudson'));
console.log(reverse2('Hi My name is Carlos Hudson'));
console.log(reverse3('Hi My name is Carlos Hudson'));