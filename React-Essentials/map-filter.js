// map filter - dono hi array pe chalte hai, aur dono kaa kaam hai array par kuchh perform karna and "ek naya array return karna"

// map - hr element par kuchh perform karna and ek naya array return karna

const arr = [1, 2, 3, 4, 5];

const newArr = arr.map(val => val * 2);
// yha pr ek he kaam krna tha isliye return nhi likha, agar return krna hota to is tarah se likhte
// yha pr arrow ke turnt baad likha hai isliye return ho gaya, agar arrow ke turnt baad curly braces lagate to return krna padta

// const newArr2 = arr.map((val)=> {
//     return val * 2;
// })

// map ke andar return krne ke wajah se hi elements naye array mein place hote hai
console.log(newArr); // [2, 4, 6, 8, 10]

// ek array hai saare numbers jo ki 5 se bade ho unke 5 jod dena and baaki numbers waise ke waise return karo naye array mein

const state = [1, 2, 3, 4, 5, 6, 7, 8];

// const newArray = state.map(val => {
//     if(val > 5){
//         return val + 5;
//     }
//     return val;
// });

const newArray = state.map(val => val > 5 ? val + 5 : val); // ternary operator ka use karke bhi same kaam kar sakte hai
console.log(newArray); // [1, 2, 3, 4, 5, 11, 12, 13]

// map aur filter me ek he farak hai ki map saare elements ko return karta hai chahe wo condition ko satisfy kare ya na kare, jabki filter sirf unhi elements ko return karta hai jo condition ko satisfy karte hai

// filter - condition ko satisfy karne wale elements ko return karta hai aur ek naya array return karta hai

// ek array me se saare wo numbers hta do jo ki 5 se chhote ho
const array = [1, 2, 3, 4, 5, 6, 7, 8];
const filteredArray = array.filter(val => val >= 5);
console.log(filteredArray); // [5, 6, 7, 8]