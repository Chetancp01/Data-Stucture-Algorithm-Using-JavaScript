// // const binary = require('../BinarySearch/binary_search');
// // var diff = [];
// // function test(arr,arrlen,r) {
    
// //     for (var i = 0; i < arrlen; i++) {
// //         diff.push(Math.abs(arr[i] - r));
// //     }
    
// //     let temp = [];
// //     for(var i = 0; i < diff.length; i++) {
// //         let index = binary123(diff);
// //         diff[index] = null;
// //         temp.push(arr[index]);
// //     }
    
// //     console.log(temp);
// // }

// // function binary123 (arr) {
// //     let max = Number.MAX_VALUE +1 ;
// //     let index = 0;
// //     for (var i = 0; i < arr.length; i++) {
// //         if(arr[i] == null)
// //             continue;
// //         if(max > arr[i]) {
// //             max = arr[i];
// //             index = i;
// //         }
// //     }
// //     return index;
// // }


// // let arr = [1,2,3,4,5];
// // let arrlen = arr.length;
// // let r = 6;
// // test(arr,arrlen,r);

// // var arr = [{"name": "dep"},{"name": "dp"},{"name": "mv"},{"name": "dk"},{"name": "sk"},{"name": "cp"}];
// // console.log(arr[0].name);

// let te, n, b;
//  let a = new Array(100005);

//  function check(p) {
//      let c = 0;
//      for (let i = 0; i < n; i++)
//          c += Math.floor(a[i] / p);
//      return c >= b;
//  }
//  module.exports = {
//      //param A : array of integers
//      //param B : integer
//      //return an integer
//      solve: function (A, B) {
//          n = A.length;
//          let mn = 1000000000,
//              sm = 0;
//          for (let i = 0; i < n; i++) {
//              a[i] = A[i];
//              sm += a[i];
//              mn = Math.min(mn, a[i]);
//          }
//          b = B;
//          if (sm < b)
//              return 0;
//          let l = 1,
//              h = mn,
//              m;
//          while (h - l > 1) {
//              m = (l + h) >> 1;
//              if (check(m))
//                  l = m;
//              else
//                  h = m;
//          }
//          if (check(h))
//              return h;
//          else
//              return l;
//      }
//  };

// let obj = {
//     1:[1,2,1],
//     2:[0,6,2],
//     3:[3,4,3],
//     4:[8,9,4],
//     5:[5,7,5],
//     6:[8,9,6]
// };

// let len  = Object.keys(obj).length;

// for (let i = 1; i <= len; i++) {
//     let j = i+1;
//     while (j <= len) {
//         if(obj[i][1] > obj[j][1]) {
//             temp = obj[i];
//             obj[i] = obj[j];
//             obj[j] = temp;
//         }
//         j++;
//     }
// }

// console.log(obj);

// function main () {
//     let n = 3;
//     console.log("main Output:> ", sub(n));
// }

// function sub(n) {
//     if (n == 1)
//         return 3;
//     else
//         return sub(n-1) +1;
// }
// main();



// =====================================================================================================
// function SumNum(arr,archar,arrMain = []){
//     if (arr <= 0 || isNaN(arr))
//         return console.log("arrMain Res:> ", arrMain);

//     let arrVal = arr % 10;
//     let rem = parseInt(arr.toString().slice(0,-1));
//     let tempArr = [];
//     let flag = arrMain.length == 0 ? true : false;
//     let len = archar[arrVal.toString()].length;

//     for(var i = 0; i < len; i++) {
//         if (flag) {
//             arrMain.push(archar[arrVal.toString()][i]);
//         }else{
//             for(var j = 0; j < arrMain.length; j++) {
//                 tempArr.push(archar[arrVal.toString()][i] + arrMain[j.toString()]);
//             }
//         }
//         console.log(arrMain);
//     }
//     if(!flag)
//         arrMain = tempArr;
    
//     SumNum(rem,archar,arrMain);
// };
// let arr = 999999;
// let archar = {1 : "", 2 : "abc", 3 : "def", 4 : "ghi", 5 : "jkl", 6 : "mno", 7 : "pqrs", 8 : "tuv", 9 : "wxyz", 0 : ""};
// console.log(SumNum(arr,archar));

function grammerCheck (first, rem) {
    // console.log("first:> ", first);
    // console.log("rem:> ", rem);
    if (rem == '' && first == '') {
        // console.log("if str empty");
        return console.log(fasle);
    }
    if (rem == '') {
        // console.log("if rem empty");
        return console.log(true);
    }
    if (first == 'a' && rem.charAt(0) + rem.charAt(1) == 'bb') {
        // console.log("if a");
        first = 'bb';
        rem = rem.slice(2);
        // console.log("after silce:> ", rem);
        grammerCheck(first, rem);
    } else if (first == 'bb' && rem.charAt(0) == 'a') {

        first = 'a';
        rem = rem.slice(1);
        // console.log("after silce:> ", rem);
        grammerCheck(first, rem);
    } else {
        return console.log(false);
    }
    
}
let str = "abbab";
grammerCheck(str.charAt(0), str.slice(1));
