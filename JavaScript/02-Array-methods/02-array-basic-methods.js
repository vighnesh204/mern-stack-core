// Push : add to end
// Pop : delete from end & returns it
// Unshift : add to start
// Shift : delete from start & returns it 

let anime = ["Solo Levelling", "Jujutsu Kaisen", "Demon Slayer"];

// push 
anime.push("Wind Breakers"); // 4

console.log(anime); // [ 'Solo Levelling', 'Jujutsu Kaisen', 'Demon Slayer', 'Wind Breakers' ]

// pop
anime.pop(); // Wind Breakers 

// unshift
anime.unshift("Attack on Titan"); // adds to start, returns new length -> 4

console.log(anime); // [ 'Attack on Titan', 'Solo Levelling', 'Jujutsu Kaisen', 'Demon Slayer' ]

// shift
anime.shift(); // removes "Attack on Titan" from start, returns it -> "Attack on Titan"

console.log(anime); // [ 'Solo Levelling', 'Jujutsu Kaisen', 'Demon Slayer' ]