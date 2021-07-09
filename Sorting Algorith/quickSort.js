// [4, 8, 1, 2, 7, 5, 9, 3]
//  P 
// [3, 1, 2, 4, 7, 5. 9, 8]
function pivotUtility(arr, start = 0, end = arr.length -1) {
    console.log("ArrayPivote---> " + arr);
    console.log("start---> " + start);
    console.log("end---> " + end);
    let pivotIndex = start;
    let pivot = arr[start];
    console.log("pivotIndexUty---> " + pivotIndex);
    console.log("pivot---> " + pivot);

    for (let i = start; i < arr.length; i++) {
        console.log("pivot---> " + pivot + " > " + "arr[i]" + arr[i]);
        if (pivot > arr[i]) {
            pivotIndex++;
            [arr[pivotIndex], arr[i]] = [arr[i], arr[pivotIndex]];

            console.log("Arr of PivoteIndex --->" + arr[pivotIndex] + "arr[i]" + arr[i]);
        }
    }

    [arr[pivotIndex], arr[start]] = [pivot, arr[pivotIndex]];
    console.log("Pivote Utility " + arr);
    return pivotIndex;
}




function quickSort(arr, left = 0, right = arr.length -1) {
    console.log("Array---> " + arr);
    console.log("Left Element---> " + left +" < "+ "Right Element---> " + right);
    if (left < right) {
        let pivotIndex =pivotUtility(arr, left, right);
        console.log("pivotIndex " + pivotIndex);
        quickSort(arr, left, pivotIndex -1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}


const res = quickSort([4, 8, 1, 2, 7, 5, 9, 3]);
console.log(res);