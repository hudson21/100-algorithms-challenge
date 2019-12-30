/* Given a number N return the index value of the fibonacci sequence, where the sequence is: 

   0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...

   The pattern of the sequence is that each value is the sum of the 2 previous values, that means for
   N = 5 -> 2 + 3
*/

function fibonacciIterative(position) {
  let array = [0, 1];
  for (let i = 2; i < position + 1; i++) {
    array.push(array[i-2] + array[i-1]);
  }
  return array[position]; 
} // Time Complexity --> O(n)

console.log('iterative',fibonacciIterative(3));
console.log('iterative',fibonacciIterative(8));

function fibonacciRecursive(position) {
  //Base case
  if (position < 2) {
    return position;
  }

  return fibonacciRecursive(position-1) + fibonacciRecursive(position-2); 
}// Time Complexity --> O(2^n)

console.log('recursive',fibonacciRecursive(3));
console.log('recursive',fibonacciRecursive(8));