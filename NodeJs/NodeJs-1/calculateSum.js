console.log("calculateSum Module Executed 🚀")

var x = 5;

const calculateSum = (a, b) =>{
    const sum = a + b;

    console.log("Sum is : ", sum);
}

module.exports = {
    calculateSum,
    x,
}