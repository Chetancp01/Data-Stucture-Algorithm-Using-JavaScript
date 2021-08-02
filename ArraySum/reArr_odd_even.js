const redix = require('../SortingAlgorith/redixSort');


function oddevenIndex(arr,arrlen) {

    arr = redix.redixSort(arr);

    let arr1 = arr.map(arr => arr % 2 == 1 ? "ODD" : "EVEN");
    console.log(arr);
    // return;

    let permition = "Possible";
    
    for (var i = 0; i < arr1.length; i++) {

        if (arr1[i] == arr1[i + 1]) {
            permition = "Not Posible";
        }
        
    }
    return permition;
}


let arr = [2,5,6,8,7,3,9,10,16,21];
let arrlen = arr.length;

console.log(oddevenIndex(arr,arrlen));
