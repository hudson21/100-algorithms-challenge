// // -------------> Linear Time
// const nemo = ['nemo'];
// const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
// const large = new Array(10000).fill('nemo');

// function findNemo1(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === 'nemo') {
//       console.log('Found NEMO!!');
//     }
//   }
// }

// findNemo1(large);// O(n) --> Linear time


// -------------> Constant Time O(1)
const boxes = [0,1,2,3,4,5];

function logFirstTwoBoxes(boxes) {
    console.log(boxes[0]);// O(1)
    console.log(boxes[1]);// O(1)
}

logFirstTwoBoxes(boxes);// o(2)