// My Solution
function add(param1: number, param2: number): number {
    return param1 + param2;
}

// My Solution
function add2(param1: number[]): number {
    let result: number = 0; 
    param1.forEach(num => result += num);
    return result;
}

// Professor's Solution 
function add3(...param1: number[]): number {
    let result = 0; 
    param1.forEach(num => result += num);
    return result;
}

 console.log(add(1, 2));
 console.log(add(3, 2));

 console.log(add2([1,2,3,4,5]));
 console.log(add2([2,3]));

 console.log(add3(1,2,3,4,5));
 console.log(add3(2,3));

