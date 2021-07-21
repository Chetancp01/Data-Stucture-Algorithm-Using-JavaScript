class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SigleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push (value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head =  newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop () {
        if (!this.head)
            return undefined;
        
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if (this.length == 0) {
            this.tail = null;
            this.head = null;
        }

        return current;
    }

    pushAtHead(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
     
    shift() {
        if (!this.head)
            return undefined;

        this.head = this.head.next;
        this.length--;

        if (this.length == 0)
            this.tail = null;
        
        return this;
    }

    getSpecificIndex(index) {
        if (index < 0 || index >= this.length)
            return null;
        
        let count = 0;
        let current = this.head;
        while (count !== index) {
            current = current.next;
            count++;
        }
        return current;

    }

    setValue(index, value) {
        let fatchSetIndex = this.getSpecificIndex(index);
        if (fatchSetIndex) {
            fatchSetIndex.value = value;
            return this;
        } else {
            return undefined;
        }
    }

    insertAt(index, value) {
        if (index < 0 || index > this.length)
            return false;
        
        if (index === this,this.length)
            return !!this.push(value);
        else if (index === 0)
            return !!this.pushAtHead(value);
        else {
            let newNode = new Node(value);
            let prevNode = this.getSpecificIndex(index - 1);
            let prevNext = prevNode.next;
            prevNode.next = newNode;
            newNode.next = prevNext;
            this.length++;
            return true;
        } 
    }

    traverse () {
        let current = this.head;
        while(current) {
            console.log(current.value);
            current = current.next;
        }
    }
 }

 const myList = new SigleLinkedList();

 myList.push('Hello');
 myList.push('Last');
 myList.pushAtHead('World');
 console.log(myList);
 console.log(myList.setValue(2, 'Changed'));
//  console.log("Before POP", myList);
//  myList.shift();
//  console.log("After POP", myList);

//  myList.traverse();