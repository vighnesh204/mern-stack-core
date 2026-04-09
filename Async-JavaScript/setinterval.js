// setInterval => Executes a function repeatedly at a specified interval (in milliseconds)
// syntax: setInterval(() => { /* code to be executed */ }, intervalInMilliseconds);

setInterval(()=>{
    console.log("ReactJS")
}, 2000);

// let count = 0;
// const interval = setInterval(()=>{
//     ++count;    
//     console.log(count)
//     if(count === 5) clearInterval(interval); // Stops the interval after 5 executions   
// }, 1000);