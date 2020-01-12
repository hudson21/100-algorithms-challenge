function arrayMaximalAdjacentDifference(inputArray: number[]): number {
  let maxAbs = Math.abs(inputArray[0] - inputArray[1]);

  for (let i = 0; i < inputArray.length; i++) {
    let result = Math.abs(inputArray[i] - inputArray[i + 1]);
    maxAbs = result > maxAbs ? result : maxAbs; 
  }

  return maxAbs;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));