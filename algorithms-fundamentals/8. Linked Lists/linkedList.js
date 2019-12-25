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
    }
}

class LinkedList {
    constructor(value) {
       this.head = new Node(value);
       this.tail = this.head;
       this.length = 1; 
    }

    append(value) { 
        // Every time we create a new node is a must to implement a class for the node itself
        const newNode = new Node(value); 
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    } // O(1)

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
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
        const holdingPointer = leaderNode.next;
        leaderNode.next = newNode;
        newNode.next = holdingPointer;
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
        } else {
            const leaderNode = this.traverseToIndex(index - 1);
            const nextNode = leaderNode.next.next;
            leaderNode.next = nextNode;
        }
        this.length--;
        return this.printList();
    }

    reverse() {
        if (!this.head.next) {
            return this.head;
        } 

        let first = this.head;
        this.tail = this.head;
        let second = first.next;
        
        while(second) {
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first;  
        return this.printList();
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
// console.log(myLinkedList.printList());
myLinkedList.insert(2, 50);
myLinkedList.insert(200, 99);
// console.log(myLinkedList.printList());
myLinkedList.remove(0);
// console.log(myLinkedList.printList());
myLinkedList.remove(1);
console.log(myLinkedList.printList());
console.log(myLinkedList.reverse());