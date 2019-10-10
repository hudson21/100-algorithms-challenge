function addTwoDigits(n: any): number {
    const numbers = n.toString().split('');
    
    return numbers.reduce((acc: string, num: string) => {
        return parseInt(acc) + parseInt(num);
    })
}

//Another Approach
function addTwoDigits2(n: any): number {
    const numbers = n.toString().split('');
    
    return parseInt(numbers[0]) + parseInt(numbers[1])
}

 console.log(addTwoDigits(29));
 console.log(addTwoDigits2(29));