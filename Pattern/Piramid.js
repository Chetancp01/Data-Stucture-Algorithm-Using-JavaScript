len = 10;

for (var i = 0; i < len; i++) {
     let space = '';
     for (let j = len; j > i; j--) {
          space += ' ';
     }
     
     // console.log(space);
    
     let star = '';
     for (let k = 0; k < i + 1; k++) {
          star += '* ';
     }
     console.log(space + star);
}