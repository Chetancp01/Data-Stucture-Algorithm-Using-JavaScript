function countDigits (number) {
     if (number === 0)
          return 1;
     return Math.floor(Math.log10(Math.abs(number))) + 1;
}

function getDigit(number, index) {

     const stringnumber = Math.abs(number).toString();
     const currentIndex = stringnumber.length - 1 - index;
     return stringnumber[currentIndex] ? parseInt(stringnumber[currentIndex]) : 0;
}

function maxDigit(array) {
     let maxNumber = 0;
     for(let i = 0; i < array.length; i++) 
          maxNumber = Math.max(maxNumber, countDigits(array[i]));
     
     return maxNumber;
}

function redixSort(array) {
     let maxDigitCount = maxDigit(array);
     // console.log('maxDigitCount', maxDigitCount);
     for (let i = 0; i < maxDigitCount; i++) {
          let digitBucket = Array.from({length: 10}, () => []);
          for (let j = 0; j < array.length; j++) {
              let lastDigit = getDigit(array[j],i);
              digitBucket[lastDigit].push(array[j]);
          }
          // console.log("digitBucket--->", digitBucket);
          // console.log("main--->", [].concat(...digitBucket));
          array = [].concat(...digitBucket);
     }
     return array;
}
console.trace(array);

console.log(redixSort([1, 121, 1444, 123, 57, 65, 757, 0]));