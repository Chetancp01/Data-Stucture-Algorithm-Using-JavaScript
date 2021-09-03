const SingleLinkedList = require('./single'); 

const node = new SingleLinkedList();
node.push(1);
node.push(2);
node.push(3);
node.push(2);
node.push(1);

function checkListPalindrom (n) {
     let [l1, l2] = findMid(n);
     // console.log("l1:>>>", l1, " || l2:>>>", l2);
     l2 = reverseLinkList(l2);
     while (l1.next != null && l2.next != null) {
          if (l1.value != l2.value)
               return console.log("Linked List is not palindrom!");
          l1 = l1.next;
          l2 = l2.next;
     }
     return console.log("Linked List is palindrom!");
}

function reverseLinkList (l2) {
     let [temp, prev] = [l2, null];
     while (l2 != null) {
          temp = l2;
          l2 = temp.next;
          temp.next = prev;
          prev = temp;
     }
     l2 = prev;
     // console.log("L2:>>> ", l2);
     return l2;
}

function findMid (n) {
     let [slow, fast, temp, n1, n2] = [n, n, null, n, null];
     while (fast.next != null) {
          temp = slow;
          slow = slow.next;
          fast = fast.next.next;
     }
     n2 = slow.next;
     temp.next = null;
     return [n1, n2];
}

checkListPalindrom(node.head)

//  node palindromLinkedList.js