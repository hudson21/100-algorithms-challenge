/*
1. Create an array to push the longest strings
2. Count the longest length
3. Push the longest strings into the array
*/

// My approach
function allLongestStrings(inputArray: string[]): string[] {
  let length = 0;
  const array = [];
  inputArray.forEach(index => {
    length = index.length > length ? index.length : length; 
  })

  inputArray.forEach((index: string) => {
    if (index.length === length) {
      array.push(index);
    }
  });

  return array;
} // Time Complexity --> O(n)



console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));