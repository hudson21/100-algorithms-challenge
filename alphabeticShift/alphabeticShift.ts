/*
  1. Define a dictionary
  2. Split the word in characters
  3. Look for the character in the dictionary add + 1 to replace with the next one
*/

// My Approach
function alphabeticShift(inputString: string): string {
  const dictionary = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let word = inputString.split('');
  let indexOfCharacter = -1;

  for (let i = 0; i < word.length; i++) {
    
    if (word[i] === 'z') {
      word[i] = 'a';
    } else {
      indexOfCharacter = dictionary.indexOf(word[i]);

      if (indexOfCharacter !== -1) {
        word[i] = dictionary[indexOfCharacter + 1];
      }
    }
  }

  return word.join('');
} // Time Complexity --> O(n^2)
  // Space Complexity --> O(n)

console.log(alphabeticShift('crazy'));
console.log(alphabeticShift('abcde'));
console.log(alphabeticShift('abcdz'));


// Professor's Approach
function alphabeticShift1(inputString: string): string {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let inputShifted = inputString.split('');

  for (let i = 0; inputShifted.length; i++) {
    let index = 0;

    if (inputShifted[i] !== 'z') {
      index = alphabet.indexOf(inputShifted[i] + 1); 
    }

    inputShifted
  }
}

