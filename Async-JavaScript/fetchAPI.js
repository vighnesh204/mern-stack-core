// // Fetch API => ye kisi aur url (API) par jaa kar kuchh data laayega ya data humaare paas se us url (API) par lekar jaayega
// kyuki ye internet pr jayega aur fir data ko lekar aayega to ismein time lagta hai to by default hi js mein fetch ko async banaaya gaya hai kyuki fetch ka kaam hai data laana wo bhi kisi url se ab aisa ho skta hai us url ki website slow ho, to data laane mein time lage aur agar fetch synchronous hota to uske baad ka code tab tak nhi chalta jab tak uska data nahi aajata, which is a big problem, poora code atak sakta tha

fetch(`https://jsonplaceholder.typicode.com/posts`)
.then(raw => raw.json())  // jb data aayega tb ye chalge 
// ye raw kya hai?
// => blob hai mtlb computer ka readable format stream 
// ye hmare readable format me nhi hai hme is data ko convert krna padega hmare readable format me => raw.json()
.then(readable => {
    console.log(readable);  // ab ye data humare paas aa chuka hai  
})

// first .then() mtlb fetch krne ke baad
// second .then() mtlb json bnne ke baad


// fetch(`https://jsonplaceholder.typicode.com/posts`)
// .then(raw => raw.json())  
// .then(readable => {
//     // perform any operation on readable data
//     console.log(readable[0]); 
//     console.log(readable[0].title);  
// })

// fetch() ye url se data aayega
// .then() mujhe pta hai ki raw format me aayega to raw.json() krke readable format me convert krunga
// .then() ab wo convert ho chuka hai to ab is readable data pr koi bhi operation kr skta hu