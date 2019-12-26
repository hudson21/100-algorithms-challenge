//Joy
//Matt
//Pavel
//Samir


class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
   return this.first; 
  }
  
  enqueue(value){// push
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  dequeue(){// Remove the first element from the que
    if (!this.first) {
      return null;
    }
    
    if (this.last === this.first) {
      this.last = null;
    }

    this.first = this.first.next;
    this.length--;
    return this;
  }

  printQueue() {
    let currentNode = this.first;
    const queue = [];
    while (currentNode) {
      queue.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return queue;
  }

  isEmpty() {
    return !this.length > 0;
  }
}

const myQueue = new Queue();
console.log('isEmpty', myQueue.isEmpty());
console.log('enqueue', myQueue.enqueue('Joy'));
console.log('enqueue', myQueue.enqueue('Matt'));
console.log('enqueue', myQueue.enqueue('Pavel'));
console.log('enqueue', myQueue.enqueue('Samir'));
console.log('peek', myQueue.peek());
console.log('isEmpty', myQueue.isEmpty());
console.log('dequeue', myQueue.dequeue());
console.log('peek', myQueue.peek());
console.log('dequeue', myQueue.dequeue());
console.log('dequeue', myQueue.dequeue());
console.log('dequeue', myQueue.dequeue());
console.log('printQueue', myQueue.printQueue());
console.log('peek', myQueue.peek());
