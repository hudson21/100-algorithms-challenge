/* 1. Create a copy of the array with from index 0 to i
   2. Look for the number, if it is not found return -1 and if it is return the smaller number
*/

// My solution
function arrayPreviousLess(items: number[]): number[] {
  const lessThanList: number[] = [];

  for (let i = items.length - 1; i >= 0; i--) {
    for (let j = i; j >= 0; j--) {
      if (items[i] > items[j]) {
        lessThanList.unshift(items[j]);
        break;
      } else if (j === 0) {
        lessThanList.unshift(-1);
      }
    }
  }

  return lessThanList;
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));