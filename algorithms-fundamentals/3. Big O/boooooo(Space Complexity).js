function booooo(n) {
    for (let i = 0; i < n.length; i++) {
        console.log('boooooooo!');
    }
}

booooo([1,2,3,4,5]); // Space Complexity of O(1)

function arrayOfHiNTimes(n) {
    let hiArray = [];
    for (let i = 0; i < n; i++) {
        hiArray[i] = 'hi';
    }
    return hiArray;
}

console.log(arrayOfHiNTimes(6)); // Space Complexity --> O(n)