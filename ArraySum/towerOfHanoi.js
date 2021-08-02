let count = 0;
function towerOfHanoi(n, from_rod,  to_rod,  aux_rod)
{

        count++;
        if (n == 1)
        {
            console.log("Move disk 1 from rod " + from_rod +" to rod " + to_rod+"<br/>");
            return;
        }

        towerOfHanoi(n - 1, from_rod, aux_rod, to_rod);

        console.log("Move disk " + n + " from rod " + from_rod +" to rod " + to_rod+"<br/>");

        towerOfHanoi(n - 1, aux_rod, to_rod, from_rod);

    }
 
    // Driver code
    var n = 6; // Number of disks
    towerOfHanoi(n, 'A', 'C', 'B');
    console.log(count);