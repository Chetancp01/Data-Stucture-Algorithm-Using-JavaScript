// Find the minimum distance between two numbers


// time complexity o(n2)
// function findMinimumDistancebtwTwoNum (arr, x, y,len) {
//      let min_len = 0;
//      for (let i = 0; i < len; i++) {
//           for (let j = i + 1; j < len; j++) { 
//                if (arr[i] == x && arr[j] == y || arr[i] == y && arr[j] == x && min_len > Math.abs(i-j)) {
//                     min_len = Math.abs(i-j);
//                }
//           }
//      }
//      return min_len;
// }

let arr = [3, 5, 4, 2, 6, 5, 6, 6, 5, 4, 8, 3];
console.log(findMinimumDistancebtwTwoNum(arr, 3, 6, arr.length));