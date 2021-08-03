<<<<<<< HEAD
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
=======
function swap (odd, even) {
     let temp = arr[odd];
     arr[odd] = arr[even];
     arr[even] = temp;
}

function reArrangeOddEvenIndex(arr) {
     let len = arr.length;
     let even = 0;
     let odd = 1;

     while (1) {
          while (even < len && arr[even] % 2 == 0) {
               even += 2;
          }

          while (odd < len && arr[odd] % 2 == 1) {
               odd += 2;
          }

          if (even >= len || odd >= len) {
               return arr;
          }
          
          swap(odd, even);

     }
     

     // while (ei < len) {
     //      if (si % 2 == 0) {
     //           if (arr[ei] % 2 == 0) {
     //                let temp = arr[si];
     //                arr[si] = arr[ei];
     //                arr[ei] = temp;
     //                si++;
     //                ei++;
     //           } else {
     //                ei++;
     //           }
     //      } else {
     //           if (arr[ei] % 2 != 0) {
     //                let temp = arr[si];
     //                arr[si] = arr[ei];
     //                arr[ei] = temp;
     //                si++;
     //                ei++;
     //           } else {
     //                ei++;
     //           }
     //      }
     // }

     // return arr;
}

let arr = [10, 9, 7, 18, 13, 19, 4, 20, 21, 14];
console.log(reArrangeOddEvenIndex(arr));

// node reArr_odd_even.js
>>>>>>> 9b83787a5d6522d1cf62bbd1647de2e7129adfde
