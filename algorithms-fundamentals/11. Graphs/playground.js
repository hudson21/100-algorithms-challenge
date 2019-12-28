/*
     2 ------ 0
    / \
   /   \
  1 --- 3

*/

// Edge List
const graph = [[0,2], [2,3], [2,1], [1,3]];

// Adjacent List: The index of the array is the value of the actual Graph node.
const graph = [[2], [2,3], [0,1,3], [1,2]];

// Adjacent Matrix
const graph = [
  [0, 0, 1, 0], // Node 0 has connection with Node 2
  [0, 0, 1, 1], // Node 1 has connection with Node 2 and 3
  [1, 1, 0, 1], // Node 2 has connection with Node 0, 1, and 3
  [0, 1, 1, 0] // Node 3 has connection with Node 1 and 2
];

const graph = {
  0: [0, 0, 1, 0], // Node 0 has connection with Node 2
  1: [0, 0, 1, 1], // Node 1 has connection with Node 2 and 3
  2: [1, 1, 0, 1], // Node 2 has connection with Node 0, 1, and 3
  3: [0, 1, 1, 0] // Node 3 has connection with Node 1 and 2
};