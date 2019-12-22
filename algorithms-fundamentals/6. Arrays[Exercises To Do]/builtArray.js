class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    unshift(item){
        this.moveItems();
        this.data[0] = item;
    }

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    delete(index) {
        const item = this.data[index];
        this.shiftItems(index);
    }

    moveItems() {
        for (let i = 1; i < this.length + 1; i++) {
            this.data[i] = this.data[i-1];
        }
        this.length++;
    }

    shiftItems(index) {
        for (let i = index; i < this.length -1; i++) {
            // He we are shifting the items one to the left
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}

const newArray = new MyArray();
newArray.push('hi');
newArray.push('You');
// console.log(newArray.pop());
newArray.delete(1);
newArray.push('You');
newArray.push('are');
newArray.push('funny');
newArray.unshift('Baby,')
console.log(newArray);