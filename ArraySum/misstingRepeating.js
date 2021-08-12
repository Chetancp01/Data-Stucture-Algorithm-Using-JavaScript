//misstingRepeating.js


function repeating(arr,len) {

    // let {sumN,sumN2,sumA,sumA2,x,y,sumOfxy,missingValue,repeatingValue} = [0,0,0,0,0,0,0,0,0];
    let sumN = 0;
    let sumN2 = 0;
    let sumA = 0;
    let sumA2 = 0;
    let x = 0;
    let y = 0;
    let sumOfxy = 0;
    let missingValue = 0;
    let repeatingValue = 0;

    let i = 1;
    while (i < len) {
        let index = i;
        sumN += i;
        sumN2 += i * i;
        sumA += arr[index];
        sumA2 += arr[index] * arr[index];
        console.log(i, arr[index]);
        i++;
    }
    console.log(sumN,sumN2,sumA,sumA2);
    x = sumN - sumA;
    y = sumN2 - sumA2;

    sumOfxy = x + y;

    missingValue = sumOfxy / 2;
    repeatingValue = y - missingValue;

    console.log(missingValue,repeatingValue);

}


let arr = [1,2,3,4,4,6];
let len = arr.length;
repeating(arr,len);
