//Discord
//Udemy
//google


class Stack {
  constructor(){
    this.array = [];
  }

  // See the very top node
  peek() {
    return this.array[this.array.length - 1];
  }

  push(value){
    this.array.push(value);
    return this;
  }

  pop(){
    this.array.pop();
    return this;
  }

  printStack() {
    return this.array;
  }

  //isEmpty
  isEmpty() {
    return !this.array.length > 0;
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
