//My Solution
function absoluteValuesSumMinimization(a: number[]): number {
    const length = a.length;
    const position = length / 2;
    if (length % 2 !==0) {
        return a[Math.floor(position)]; 
    } else {
        return a[position - 1] 
    }
}

// Professor's Solution 
function absoluteValuesSumMinimization1(a: number[]): number{
    const isEven = a.length % 2 === 0;

    return isEven ? a[a.length / 2 - 1] : a[Math.floor(a.length / 2)];
}

 console.log(absoluteValuesSumMinimization([2, 4, 7]));
 console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
 console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
 console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));

 console.log(absoluteValuesSumMinimization1([2, 4, 7]));
 console.log(absoluteValuesSumMinimization1([2, 4, 7, 6]));
 console.log(absoluteValuesSumMinimization1([2, 4, 7, 6, 6]));
 console.log(absoluteValuesSumMinimization1([2, 4, 7, 6, 6, 8]));