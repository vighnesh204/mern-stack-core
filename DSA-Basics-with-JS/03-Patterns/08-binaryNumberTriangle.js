let n = 6;
for (let i = 1; i <= n; i++) {
   let row = " ";
   let num = 1;
   for(let j = 0; j <= i; j++){
    row = row + num;
    if(num == 1){
        num = 0;
    } else {
        num = 1;
    }
   }
   console.log(row);
}


// for (let i = 1; i <= n; i++) {
//    let row = " ";
//    for (let j = 1; j <= i; j++) {
//    if (j % 2 != 0) {
//      row = row + "1";
//    } else {
//     row = row + "0"
//    }
//    }
//    console.log(row);
// }

