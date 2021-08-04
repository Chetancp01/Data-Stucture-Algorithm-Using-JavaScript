
function gcd(a, b){
    console.log(a,b);
    if (b == 0)
        return a;
    else
        return gcd(b, a % b);
}


function leftRotate(arr, d, n){
    d = d % n;
    console.log("D"+d);
    let g_c_d = gcd(d, n);
    console.log("GCD"+g_c_d);
    for (let i = 0; i < g_c_d; i++) {
        let temp = arr[i];
        let j = i;
 
        while (1) {
            let k = j + d;
            if (k >= n)
                k = k - n;
 
            if (k == i)
                break;
 
            arr[j] = arr[k];
            j = k;
        }
        arr[j] = temp;
    }
}
 

function printArray(arr, size){
    for (let i = 0; i < size; i++){

    }
        // console.log(arr[i] +" ");
}
 

let arr = [ 1, 2, 3, 4, 5, 6, 7 ];
let n = arr.length;

leftRotate(arr, 3, n);
printArray(arr, n);