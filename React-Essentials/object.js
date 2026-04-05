// how to return an object from arrow function

const anime = () => ({ name: "Gojo Saturo", description: "Strongest sorcerer" }) 

console.log(anime()) // Output: { name: 'Gojo Saturo', description: 'Strongest sorcerer' }

// how to return an object from normal function

function anime2(){
    return { name: "Gojo Saturo", description: "Strongest sorcerer" }
}

console.log(anime2()) // Output: { name: 'Gojo Saturo', description: 'Strongest sorcerer' }