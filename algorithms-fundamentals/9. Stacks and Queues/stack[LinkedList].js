//Discord
//Udemy
//google


class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  // See the very top node
  peek() {
    return this.top;
  }

  push(value){
    const newNode = new Node(value);

    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;  
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }

  pop(){
    if (this.length === 0) {
      return null;
    }
    
    if (this.top === this.bottom) {
      this.bottom = null;
    }

    //const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;
    return this;
    
  }

  printStack() {
    let currentNode = this.top;
    const stack = [];

    while (currentNode) {
      stack.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return stack;
  }

  //isEmpty
  isEmpty() {
    return !this.length > 0;
  }
}

const myStack = new Stack();
console.log('isEmpty', myStack.isEmpty());
console.log(myStack.push('Google'));
console.log(myStack.push('Udemy'));
console.log(myStack.push('Discord'));
console.log('Peek', myStack.peek());
console.log('isEmpty', myStack.isEmpty());
console.log('pop', myStack.pop());
console.log('pop', myStack.pop());
console.log('pop', myStack.pop());
console.log(myStack.printStack());
