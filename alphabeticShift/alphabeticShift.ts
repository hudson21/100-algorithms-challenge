/*
  1. Define a dictionary
  2. Split the word in characters
  3. Look for the character in the dictionary add + 1 to replace with the next one
*/

// My Approach
// Time Complexity --> O(n^2)
// Space Complexity --> O(n)

function alphabeticShift(inputString: string): string {
  const dictionary = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let word = inputString.split('');
  let indexOfCharacter = -1;

  for (let i = 0; i < word.length; i++) {
    
    if (word[i] === 'z') {
      word[i] = 'a';
    } else {
      indexOfCharacter = dictionary.indexOf(word[i]) + 1;
      word[i] = dictionary[indexOfCharacter];
    }
  }

  return word.join('');
} 

console.log(alphabeticShift('crazy'));
console.log(alphabeticShift('abcde'));
console.log(alphabeticShift('abcdz'));

//Professor's Approach
function alphabeticShift1(inputString: string): string {
  const alphabet: string[] = ['a','b','c','d','e','f','g','h','i','j','k','l','m',
                    'n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let inputShifted = inputString.split('');

  for (let i = 0; i < inputShifted.length; i++) {
    let index = 0;

    if (inputShifted[i] !== 'z') {
      index = alphabet.indexOf(inputShifted[i]) + 1;
    }

    inputShifted[i] = alphabet[index];
  }

  return inputShifted.join('');
}

console.log(alphabeticShift1('crazy'));


// Approach using an object
function alphabeticShift2(inputString: string): string {
  const alphabet: object = {
    'a': 'b', 'b': 'c', 'c': 'd', 
    'd': 'e', 'e': 'f', 'f': 'g', 
    'g': 'h', 'h': 'i', 'i': 'j', 
    'j': 'k', 'k': 'l', 'l': 'm', 
    'm': 'n', 'n': 'o', 'o': 'p', 
    'p': 'q', 'q': 'r', 'r': 's', 
    's': 't', 't': 'u', 'u': 'v', 
    'v': 'w', 'w': 'x', 'x': 'y', 
    'y': 'z', 'z': 'a'
  }

  let inputShifted = inputString.split('');

  for (let i = 0; i < inputShifted.length; i++) {
   console.log(inputShifted[i]);
   inputShifted[i] = alphabet[inputShifted[i]];
  }

  return inputShifted.join('');
}

console.log(alphabeticShift2('crazy'));

