// array
// array aisa data structure hai jo ki ek se jyada elements rkh skta hai
// array me elements ko index ke through access kiya jata hai

const arr1 = [1, 2, 3, 4, 5]

// Javascript me arrays dynamic hote hai

const arr2 = [1 , 2, 3, 4, 5, "react", [], function(){}]

// immutable vs mutable
// Primitive and reference 
// immutable data structure wo hote hai jisme data ko change nahi kiya ja sakta hai
// mutable data structure wo hote hai jisme data ko change kiya ja sakta hai

const arr = [1, 2, 3, 4, 5]

const newArr = arr // newArr me arr ka reference store hota hai

newArr.pop() // newArr me pop karne se arr bhi change ho jata hai

console.log(arr) // [1, 2, 3, 4]
console.log(newArr) // [1, 2, 3, 4]

// Spread Operator - ... (three dots) - isse hum array ya object ko copy kar sakte hai

const state = [1, 2, 3, 4, 5]

const copy = [...state] // copy me state ka copy store hota hai

copy.pop() // copy me pop karne se state change nahi hota hai

console.log(state) // [1, 2, 3, 4, 5]
console.log(copy) // [1, 2, 3, 4]

// yha pr array copy kr rhe hai isliye [...state] use kr rhe hai
// agr hum object copy kr rhe hote to {...state} use krte
// agar hum state ko directly copy krte to state aur copy dono same reference point krte aur dono me changes hote 
// isliye spread operator use kr rhe hai taki state aur copy alag alag reference point kre aur dono me changes na ho
