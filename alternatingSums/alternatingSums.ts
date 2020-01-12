/**
 1. Divide the array into two teams
 2. Team one no multiples of 2
 3. Team two mulptiples of 2
 4. Push them into an array 
 5. Sum each number which is arriving to each team
 6. Return the array with the total sum of each team
 */

function alternatingSums(a: number[]): number[] {
  const result: number[] = [0,0];

  for (let i = 0; i < a.length; i++) {
    if (i % 2 === 0) {
      result[0] += a[i];
    } else {
      result[1] += a[i];
    }
  }

  return result;

}

console.log(alternatingSums([50, 60, 60, 45, 70]));

// Dylan's Approach
function alternatingSums1(a: number[]): number[] {
  let evenSum = 0;
  let oddSum = 0;

  a.forEach((element, index) => {
    if (index % 2 === 0) {
      evenSum += element;
    } else {
      oddSum += element;
    }
  }); 

  return [evenSum, oddSum];
}

console.log(alternatingSums([50, 60, 60, 45, 70]));