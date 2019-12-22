// Given two arrays sorted, cam you merge this two arrays into one
/*
    For example: [0,3,4,41], [4,6,30]
    Result: [0, 3, 4, 4, 6, 30, 31]
*/

/*
Input: two arrays 
Output: MergeArray

1. Merge the arrays into a new one with the spread operator
2. Order the array
2. Return the array merged and ordered

*/

// My Approach
function mergeSortedArrays(arr1, arr2){

    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return 'You can only enter arrays'
    }

    if (arr1.length === 0) {
        return arr2;
    }
    
    if (arr2.length === 0) {
        return arr1;
    }

    const mergeArray = [...arr1, ...arr2];
    return mergeArray.sort((a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    })
}

//console.log(mergeSortedArrays([0,3,4,41], [4,6,30]));

//Andrei's Approach
function mergeSortedArrays2(arr1, arr2) {
    const mergedArray = [];
    let array1Item = arr1[0];
    let array2Item = arr2[0];
    let i = 1;
    let j = 1;

    // Check input
    if (arr1.length === 0) {
        return arr2;
    }
    
    if (arr2.length === 0) {
        return arr1;
    }

    while(array1Item || array2Item) {
        console.log(array1Item, array2Item);
        // If the position in the second array is undefined or major than the first one:
        if (array2Item === undefined || array1Item < array2Item) {
            mergedArray.push(array1Item);
            array1Item = arr1[i];
            i++;
        } else {
            mergedArray.push(array2Item);
            array2Item = arr2[j];
            j++;
        }
    } 

    return mergedArray;
}

console.log(mergeSortedArrays2([0,3,4,41], [4,6,30]));