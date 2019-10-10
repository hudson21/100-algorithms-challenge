// My solution
function adjacentElementsProduct(inputArray: number[]): number {
    // If we use 0 we are skipping the negative values. Better to do this way:
    let result = inputArray[0] * inputArray[1];

    for (let i = 1; i < inputArray.length; i++) {
        if (inputArray[i - 1] * inputArray[i] > result) {
            result = inputArray[i - 1] * inputArray[i]
        }
    }
    return result;
}

//Professor's Approach 
function adjacentElementsProduct2(inputArray: number[]): number {
    let largestProduct = inputArray[0] * inputArray[1];

    for (let i = 1; i < inputArray.length - 1; i++) {
        const product = inputArray[i] * inputArray[i +1];

        largestProduct = largestProduct < product ? product : largestProduct;
    }

    return largestProduct;
}


console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
console.log(adjacentElementsProduct2([3, 6, -2, -5, 7, 3]));