// trappingRainWater.js

function trappingRain(arr,len){

    let curr = 0;
    let curr1 = 0;
    let sum = 0;

    for (let i = 0; i < len; i++) {

        if (arr[i] > curr) {
            curr1 = curr;
            curr = arr[i];
            console.log("curr"+ curr1,"arr[i]"+ arr[i]);
        }
        
        
        sum += curr - arr[i];
        
    }
    console.log("sum", sum);

}

let arr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
let arrlen = arr.length;

trappingRain(arr,arrlen);