//     9
//  4     20
//1  6  15  170

class Node {
  constructor(value){
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }
  insert(value){
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while(true) {
        if (value < currentNode.value) {
          // Left 
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else { // If the value is greater or equal to the currentNode
          // Right 
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
  lookup(value){
    if (!this.root) {
      return false;
    } 

    let currentNode = this.root;
    //While there is a node to loop through. Divide and Conquer Approach
    while (currentNode) {
      if (value < currentNode.value) {
        // Go Left
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        // Go Right
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        // Return the Node
        return currentNode
      }
    }

    return false;
  }
  
  remove() {
    
  }
}

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
console.log('lookup', tree.lookup(200));
// console.log(JSON.stringify(traverse(tree.root)));


