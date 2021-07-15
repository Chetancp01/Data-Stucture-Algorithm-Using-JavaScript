class Node {
    constructor(value) {
        this.value = value;
        this.next = null;

    }
}

const nodeObj = new Node('Mehul');
nodeObj.next = new Node('Patel');
console.log(nodeObj);

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
 myList.push('World');
 console.log(myList);


 myList.traverse();