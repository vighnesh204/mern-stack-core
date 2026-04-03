// Arrow function with one parameter
// this is arrow function with implicit return, if we have only one parameter we can skip the parentheses and if we have only one expression in the function body we can skip the curly braces and the return statement.

const abc = val =>{
    console.log(val);
}
abc("Gojo Satoru");


// Arrow function with more than one parameter

const def = (a,b) =>{
    console.log(a,b);
}
def(5,10);

// Arrow function with no parameter

const anime = () =>{
    console.log("Solo Leveling");
}
anime();

// Arrow function with default parameters
const greet = (name = "Gojo") =>{
    console.log(`I am, ${name}!`);
}
greet(); // Output: I am, Gojo!
greet("Jinwoo"); // Output: I am, Jinwoo!


