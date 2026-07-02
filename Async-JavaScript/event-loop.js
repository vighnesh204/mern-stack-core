// EVENT LOOP

// Sabse pehle yaad rakho: JavaScript ek SINGLE-THREADED,
// SYNCHRONOUS language hai. Ek time pe ek hi kaam kar sakti hai.
// Toh fir setTimeout, fetch, promises... yeh "async" kaise chalte
// hain? Iska jawab hai -> JS Engine akela nahi kaam karta,
// uske saath BROWSER (ya Node) ke APIs aur EVENT LOOP milke
// team banate hain. Chalo poori machinery samajhte hain.


// ============================================================
// 1️⃣ MAIN PLAYERS (Engine ke bahar ka setup)
// ============================================================
// 🟢 CALL STACK    -> Jahan code LIFO order mein execute hota hai.
//                     Jo bhi function chal raha hai, uska
//                     execution context yahin baithta hai.
//
// 🟢 WEB APIs       -> setTimeout, fetch, DOM events, localStorage
//                     yeh sab JS ka part NAHI hain! Yeh browser
//                     (ya Node ke case mein libuv) provide
//                     karta hai. JS bas inko "delegate" karta hai.
//
// 🟢 CALLBACK QUEUE (Macrotask Queue)
//                  -> setTimeout, DOM events, setInterval ke
//                     callbacks yahan aake line lagate hain.
//
// 🟢 MICROTASK QUEUE
//                  -> Promises (.then/.catch/.finally),
//                     async/await, queueMicrotask() ke
//                     callbacks yahan line lagate hain.
//
// 🟢 EVENT LOOP     -> Ek continuous watchman 👀 jo dekhta rehta
//                     hai: "Call stack khaali hai kya? Toh queue
//                     se kuch utha ke call stack mein daal do!"


// ============================================================
// 2️⃣ EK CLASSIC EXAMPLE SE SAMJHO
// ============================================================
console.log("Start");

setTimeout(() => {
    console.log("Timer callback (macrotask)");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise callback (microtask)");
});

console.log("End");

// OUTPUT:
// Start
// End
// Promise callback (microtask)
// Timer callback (macrotask)

// 🤔 Curious question: setTimeout ka time 0ms hai, fir bhi
// woh SABSE LAST mein kyun print hua?


// ============================================================
// 3️⃣ ANDAR KYA HO RAHA HAI? (Step by Step)
// ============================================================
// 1. "Start" -> call stack mein turant chala aur print hua.
// 2. setTimeout call hua -> JS isko turant Web API ko de deta
//    hai ("bhai 0ms baad iska callback macrotask queue mein
//    daal dena") aur AAGE badh jaata hai. Call stack block
//    NAHI hota.
// 3. Promise.resolve().then() -> promise turant resolve hui,
//    uska callback MICROTASK QUEUE mein chala jaata hai.
// 4. "End" -> print hua (synchronous code hamesha pehle chalta
//    hai, chahe async code upar likha ho).
// 5. Ab call stack KHAALI hai. Event Loop ka kaam start:
//       -> Pehle MICROTASK QUEUE poori KHALI karo (sab
//          microtasks ek-ek karke call stack mein daalo).
//       -> "Promise callback" print hota hai.
//       -> Tabhi jaake CALLBACK QUEUE (macrotask) se ek task
//          uthaya jaata hai.
//       -> "Timer callback" print hota hai.


// ============================================================
// 4️⃣ GOLDEN RULE 🏆
// ============================================================
// EVENT LOOP hamesha MICROTASK QUEUE ko PRIORITY deta hai
// CALLBACK QUEUE (macrotask) ke upar.
//
// Matlab: Jab tak microtask queue mein ek bhi task baaki hai,
// event loop macrotask queue ko HAATH tak nahi lagayega!
//
// Isliye Promise ka kaam (microtask) HAMESHA setTimeout(macrotask)
// se pehle chalega, chahe setTimeout ka time 0ms hi kyun na ho.


// ============================================================
// 5️⃣ STARVATION - Ek DANGEROUS gotcha ⚠️
// ============================================================
// Agar microtask queue mein koi task NAYA microtask add karta
// rahe (jaise ek .then() ke andar dubara .then() chain), toh
// EVENT LOOP hamesha usi mein busy rahega, aur CALLBACK QUEUE
// (setTimeout jaise tasks) ko chance hi nahi milega chalne ka!
// Isse UI freeze ho sakti hai. Isko "Microtask Starvation" kehte
// hain - real projects mein infinite promise chains se bachna
// chahiye.


// ============================================================
// 6️⃣ ASYNC/AWAIT KA CONNECTION EVENT LOOP SE
// ============================================================
// - "await" ke baad ka code EK MICROTASK ki tarah schedule hota
//   hai. Matlab async function ke andar await hit hote hi,
//   function "pause" ho jaata hai aur call stack se hat jaata
//   hai. Baaki synchronous code chalta rehta hai.
// - Jab awaited promise resolve hoti hai, uske baad ka code
//   microtask queue mein jaake apni baari ka wait karta hai -
//   exactly waise hi jaise .then() ka callback karta hai.
//
// 👉 Isiliye: async/await = Promises + Microtask Queue ka hi
//   syntactic sugar hai, koi naya mechanism nahi.


// ============================================================
// 7️⃣ QUICK PRIORITY ORDER (Yaad rakhne wali cheez) 📌
// ============================================================
// 1. Synchronous code (Call Stack)        -> HAMESHA sabse pehle
// 2. Microtask Queue (Promises, async/await) -> Uske baad
// 3. Macrotask/Callback Queue (setTimeout, setInterval, DOM events) -> Sabse last


// ============================================================
// 🔑 ONE-LINE SUMMARY (Interview mein bolne wali line)
// ============================================================
// "Event Loop ek continuous process hai jo Call Stack ko monitor
//  karta hai, aur jab woh khaali hota hai, tab pehle Microtask
//  Queue ko poora empty karta hai, uske baad hi Macrotask/Callback
//  Queue se ek task uthata hai — isi wajah se JS single-threaded
//  hoke bhi non-blocking asynchronous behavior dikha paati hai."