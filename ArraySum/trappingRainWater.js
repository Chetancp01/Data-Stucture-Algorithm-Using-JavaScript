// trappingRainWater.js

function trappingRain(arr,len){

    let curr = 0;
    let curr1 = 0;
    let sum = 0;

    for (let i = 0; i < len; i++) {

        if (arr[i] > curr) {
            curr1 = curr;
            curr = arr[i];
        }
        
        console.log("curr"+ curr1,"arr[i]"+ arr[i]);

        sum += curr1 - arr[i];
        
    }
    console.log("sum", sum);

}

let arr = [3, 0, 2, 0, 4];
let arrlen = arr.length;

trappingRain(arr,arrlen);