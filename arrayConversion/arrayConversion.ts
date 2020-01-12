/*
  
  1. Create two functions: one for odd numbers and one for even numbers
  2. Call each function depending of the number of iteration
  3. oddFunction () --> for loop to sum each two numbers
  4. evenFunction () --> for loop to multiply each two numbers

*/

// My Apprach
function arrayConversion(inputArray: number[]): number {
  let isOdd = true;

  while(inputArray.length !== 1) {
    inputArray = sumProduct(inputArray, isOdd);
    isOdd = !isOdd;
  }

  return inputArray[0];
}

function sumProduct(nums: number[], isOdd: boolean): number[] {
  const sumProducts: number[] = [];

  if (isOdd) {
    for (let i = 0; i < nums.length; i += 2) {
      sumProducts.push(nums[i] + nums[i + 1]);
    }
  } else {
    for (let i = 0; i < nums.length; i += 2) {
      sumProducts.push(nums[i] * nums[i + 1]);
    }
  }

  return sumProducts;
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
