// 10 --> 5 --> 16

// let myLinkedList = {
//     head: {
//         value: 10, 
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// };

class Node {
    constructor(value) {
        this.value = value; 
        this.next = null;
        this.previous = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
       this.head = new Node(value);
       this.tail = this.head;
       this.length = 1; 
    }

    append(value) { 
        // Every time we create a new node is a must to implement a class for the node itself
        const newNode = new Node(value);
        newNode.previous = this.tail; 
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    } // O(1)

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.previous = newNode;
        this.head = newNode;
        this.length++;
        return this;
    } // O(1)

    printList() {
        const array = [];
        let currentNode = this.head;
        
        while(currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }

    insert(index, value) {
        //check params
        if (index >= this.length) {
            // If the index of the insert is greater or equal than this.length
            return this.append(value);
        }

        const newNode = new Node(value);
        // To get the node previous to the index we want to insert
        const leaderNode = this.traverseToIndex(index - 1); 
        const follower = leaderNode.next;
        leaderNode.next = newNode;
        newNode.previous = leaderNode;
        newNode.next = follower;
        follower.previous = newNode;
        this.length++;
        return this.printList();
    }

    traverseToIndex(index) {
        // Check for params 
        let counter = 0; 
        let currentNode = this.head;
        while(counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    remove(index) {
        //Check Params 

        if (index === 0) {
            this.head = this.head.next;
            this.head.previous = null;
        } else {
            const leaderNode = this.traverseToIndex(index - 1);
            const nextNode = leaderNode.next.next;
            nextNode.previous = leaderNode;
            leaderNode.next = nextNode;
        }
        this.length--;
        console.log('delete', this);
        return this.printList();
    }
}

const myDoublyLinkedList = new DoublyLinkedList(10);
myDoublyLinkedList.append(5);
myDoublyLinkedList.append(16);
// console.log(myDoublyLinkedList.printList());
myDoublyLinkedList.prepend(1);
// console.log(myDoublyLinkedList.printList());
myDoublyLinkedList.insert(2, 50);
myDoublyLinkedList.insert(200, 99); 
console.log('normal', myDoublyLinkedList.printList());
myDoublyLinkedList.remove(0);
console.log(myDoublyLinkedList.printList());
myDoublyLinkedList.remove(1);
console.log(myDoublyLinkedList.printList());