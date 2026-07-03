let n = 4; // Size of the square
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//         process.stdout.write("* "); // Print a star for each column
//     }
//     console.log(""); // Add a newline after each row
// }

for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
        row = row + "* "; // Append a star for each column
        // row += "* "; // Append a star for each column
    }
    // console.log(row.trim()); // Print the row and trim any trailing spaces
    console.log(row); // Print the row without trimming
}