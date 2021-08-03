
function smalllarge(arr,arrlen) {
    let odd = 1;
    let even = 0;
    let nwarr = [];
    for (var i = 0; i < arrlen/2; i++){
        // console.log(arr[i]);
        // console.log(arr[arrlen - 1 - i]);
        nwarr.push(arr[i],arr[arrlen - 1 - i]);

        // console.log(even,arr[i],odd,arr[arrlen - 1 - i]);
        // console.log(odd,arr[i]);
        // arr[even] = arr[i];
        // nwarr[even] = arr[i];
        // odd += 2;
        // arr[odd] = arr[arrlen - 1 - i];
        // nwarr[odd] = arr[arrlen - 1 - i];
        // even += 2;
    }

    return nwarr;

}

let arr = [1,2,3,4,5,6,7,8,9,10];
let arrlen = arr.length;
console.log(smalllarge(arr,arrlen));