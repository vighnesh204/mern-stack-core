let n = 5;
for (let i = 0; i < n; i++) {
    let row = " ";
    // Adding spaces for right alignment
    for (let j = 0; j < n - (i+1); j++) {
        row = row + " ";
    }
    // Adding stars for the pyramid
    for (let k = 0; k < i+1; k++) {
        row = row + "*";
    }
    console.log(row);
}

// output:
//     *
//    **
//   ***
//  ****
// *****