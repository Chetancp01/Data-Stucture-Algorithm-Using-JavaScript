//misstingRepeating.js


function repeating(arr,len) {

<<<<<<< HEAD
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
=======
    let [sumN,sumN2,sumA,sumA2,x,y,sumOfxy,missingValue,repeatingValue] = [0,0,0,0,0,0,0,0,0];

    for (let i = 1; i <= len; i++) {
             let sqr = (i*i);
            sumN += i;
            sumN2 += sqr;
            sumA += arr[i - 1];
            sumA2 += arr[i - 1] * arr[i - 1];
>>>>>>> 2b517fea01fd8bcfad919165fbdfa691eff193d7
    }

    x = sumN - sumA;
    y = sumN2 - sumA2;

    sumOfxy = x + y;

    missingValue = sumOfxy / 2;
    repeatingValue = y - missingValue;

    console.log("Missing element:> ", missingValue);
    console.log("repeating element:> ", repeatingValue);

}

let arr = [1, 2, 3, 4, 4, 6];
// let arr = [1, 2, 2, 4];
let len = arr.length;
repeating(arr,len);


// node misstingRepeating.js