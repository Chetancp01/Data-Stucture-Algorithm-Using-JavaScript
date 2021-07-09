
class Node {
    constructor(element)
    {
        this.element = element;
        this.next = null
    }
}


class LinkListSingle {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        let newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;

        }else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }


}

const myList = new LinkListSingle();
myList.push('hello');
myList.push('last');
myList.push('world');

console.log(myList);