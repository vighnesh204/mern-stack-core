let obj = {
    name : "Gojo",
    skills : {
        first : "Cursed Energy",
        second : "Domain Expansion"
     }
    }

// Object Destructuring
// const { name, skills } = obj
// const { first, second } = skills

const { second } = obj.skills

console.log(second) // Domain Expansion

// Array Destructuring

let arr = [5, function(){}, "React"]

// agr mujhe sirf first aur third element bahr nikalna hai 

const [first, , third] = arr
console.log(first) // 5
console.log(third) // React 