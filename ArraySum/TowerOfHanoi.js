// Program for Tower of Hanoi
/* 
     => Tower of Hanoi is a mathematical puzzle where we have three rods and n disks. The objective of the puzzle is to move the entire stack to another rod, obeying the following simple rules: 

     => Only one disk can be moved at a time.
     => Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack i.e. a disk can only be moved if it is the uppermost disk on a stack.
     => No disk may be placed on top of a smaller disk.

*/
let from_rod = [];
let aux_rod = [];
let to_rod = [];
let count = 0;

makeBricks = async (numofbricks) => {
     for (let i = numofbricks; i > 0; i--) {
        from_rod.push(i);
     }
     return from_rod;
}

makeBricks(7).then((res) => {
     towerOfHanoi(from_rod.length, from_rod, to_rod, aux_rod).then((res) => {
         console.log("Main Res:> ",res);
         console.log("To_rod :> ", to_rod);
         console.log(count);
     });
});

let towerOfHanoi = async (n, from_rod,  to_rod,  aux_rod) => {

        count++;
        // console.log(count);
        if (n == 1)
        {
            to_rod.push(from_rod.pop());
            // console.log("Move disk 1 from rod " + from_rod +" to rod " + to_rod+"<br/>");
            return;
        }
        towerOfHanoi(n - 1, from_rod, aux_rod, to_rod);
            to_rod.push(from_rod.pop());
        // console.log("Move disk " + n + " from rod " + from_rod +" to rod " + to_rod+"<br/>");
        // to_rod.p
        towerOfHanoi(n - 1, aux_rod, to_rod, from_rod);

    }



// function towerOfHanoi(n, from_rod,  to_rod,  aux_rod) {
//         count++;
//         // console.log(count);
//         if (n == 1)
//         {
//             to_rod.push(to_rod.pop());
//             console.log("Move disk 1 from rod " + from_rod +" to rod " + to_rod+"<br/>");
//             return;
//         }
//         towerOfHanoi(n - 1, from_rod, aux_rod, to_rod);
//         console.log("Move disk " + n + " from rod " + from_rod +" to rod " + to_rod+"<br/>");
//         towerOfHanoi(n - 1, aux_rod, to_rod, from_rod);
//     }
    // Driver code
    // var n = 20; // Number of disks
    // towerOfHanoi(n, 'A', 'C', 'B');
    // console.log(count);

    // console.log(to_rod);
