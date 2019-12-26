/*
Level 0: 2^0 = 1;
Level 1: 2^1 = 2;
Level 2: 2^2 = 4;
Level 3: 2^3 = 8;

h: total of levels counting from 1
# of nodes = 2^h - 1;

log nodes = height;
*/

class BinaryTreeNode {
  constructor(value) {
    this.value = value
    this.left = null; 
    this.right = null;
  }
}