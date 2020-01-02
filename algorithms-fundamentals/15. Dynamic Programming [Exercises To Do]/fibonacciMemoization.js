let calculations = 0;
function fibonacci(n) { // Time Complexity --> O(2^n) Exponential Time
  calculations++;
  if (n < 2) {
    return n;
  }
  return fibonacci(n-1) + fibonacci(n-2);
}

// console.log(fibonacci(20));

function fibonacciMemoization() { // Time Complexity --> O(n)
    let cache = {};
    return function fib(n) {
      if (n in cache) {
        return cache[n];
      } else {
        if (n < 2) {
          return n;
        } else {
          calculations++;
          cache[n] = fib(n-1) + fib(n-2);
          return cache[n];
        }
      }
    }
}

function  fibonacciMemoization2(n) {
  let answer = [0, 1];
  for (let i = 2; i <= n; i++ ) {
    answer.push(answer[i-2] + answer[i-1]);
  }
  return answer.pop();
}



const fasterFibonacci = fibonacciMemoization();

console.log('Faster Fibonacci',fasterFibonacci(8));
console.log('Faster Fibonacci 2',fibonacciMemoization2(8));
console.log('Calculation', calculations);

