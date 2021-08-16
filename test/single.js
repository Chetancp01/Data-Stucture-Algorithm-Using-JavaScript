class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class singleLinkList {

    constructor() {
        this.head = null;
        this.tail = null; 
        this.length = 0;
    }

    insertAt(index,value) {
        if (index < 0 || index > this.length) {
            return false;
        }
        if (index === this.length) {
            return !!this.push(value);
        }else if(index === 0) {
            return !!this.pushAtHead(value);
        }else{
            let newNode = new Node(value);
            let prevNode = this.getSpecificIndex(index - 1);
            let prevNext = prevNode.next;
            prevNode.next = newNode;
            newNode.next = prevNext;
            this.length++;
            return true;
        }

    }

    push(value) {

        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;

    }

    pushAtHead(value) {

        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }


    getSpecificIndex (index) {
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

}

const myList = new singleLinkList();
myList.push("Hi");
myList.push("My");
myList.push("Name");
myList.push("is");
myList.pushAtHead("Hello");
myList.insertAt(4,"deep");
console.log(myList.getSpecificIndex(4));
console.log(myList.push("Chetan"));
