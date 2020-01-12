/*
  1. create a variable to store the counts
  2. Make a for loop to analize each number
  3. sum + 1 each number to determine the next value and add that move to the count variable
  4. return the number of moves
*/

// My Solution
function arrayChange(inputArray: number[]): number {
 let count: number = 0;

 for (let i = 1; i < inputArray.length; i++) {
  let sum = inputArray[i - 1] + 1;
  inputArray[i] = sum;
  count += sum - inputArray[0];
 }
 return count;

}

console.log(arrayChange([1, 1, 1]));
console.log(arrayChange([1, 1, 1, 1]));

// Dylan's Approach
function arrayChange1(inputArray: number[]): number {
  let count: number = 0;
 
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] >= inputArray[i + 1]) {
      const difference = (inputArray[i] + 1) - inputArray[i + 1];
      inputArray[i + 1] = inputArray[i] + 1;
      count += difference;
    }
  }

  return count;
 
}

console.log(arrayChange1([1, 1, 1]));
console.log(arrayChange1([1, 1, 1, 1]));