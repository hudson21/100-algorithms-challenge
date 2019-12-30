/* Write two functions that finds the factorial of any number. One should use recursive, the other should
   just use a foor loop
*/

function findFactorialRecursive(number) {
  // This is the base case. When we stop
  if (number === 2) {
    return 2;
  }

  return number * findFactorialRecursive(number-1);
} // O(n)

function findFactorialIterative(number) {
  let factorial = 1;

  if (number === 2) {
    factorial = 2;
  }

  for (let i = number; i > 1; i--) {
    factorial = factorial * i;
  }

  return factorial;
} // TIme Complexity --> O(n)

console.log(findFactorialIterative(3));
console.log(findFactorialIterative(5));