
async function fetchData() {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    console.log(data);
}

fetchData();

// ============================================================
// 1️⃣ ASYNC FUNCTION KYA HOTI HAI?
// ============================================================
// - Kisi bhi normal function ke aage "async" keyword lagate hi
//   woh function "async function" ban jaata hai.
// - Async function HAMESHA ek PROMISE return karta hai.
//   Chahe tum andar "return 5" bhi likho, JS engine usko
//   khud-ba-khud "Promise.resolve(5)" mein wrap kar dega.
//
// Example:
async function getVal() {
    return 5;
}
getVal().then(val => console.log(val)); // 5

console.log(getVal()); // Promise {<fulfilled>: 5}

// - Agar function ke andar hum khud ek Promise return karte hain,
//   toh async function usko wapas wrap NAHI karega (double wrap
//   nahi hota), woh promise as-it-is resolve/reject hoga.

async function getPromise() {
    return new Promise((resolve) => {
        resolve("Hello from Promise");
    });
}
getPromise().then(res => console.log(res)); // Hello from Promise


// ============================================================
// 2️⃣ AWAIT KEYWORD - ASLI HERO
// ============================================================
// - "await" sirf async function ke ANDAR use hota hai
//   (top-level await ek exception hai, modules mein allowed).
// - "await" ek PROMISE ke aage lagta hai, aur jab tak woh
//   promise resolve/reject nahi hota, tab tak JS Engine
//   us async function ke execution ko WAIT karwa deta hai.
//
// ⚠️ IMPORTANT: "await" sirf USI function ko rokta hai jisme
// woh likha hai. Baaki ka JavaScript code (call stack ke bahar
// ka synchronous code) BLOCK nahi hota. Yeh non-blocking hai!

async function handlePromise() {
    console.log("Start");
    const val = await new Promise((resolve) => {
        setTimeout(() => resolve("Promise resolved value!!"), 3000);
    });
    console.log(val); // 3 sec baad print hoga
    console.log("End");
}

handlePromise();
console.log("Namaste JavaScript"); 
// Output order:
// Start
// Namaste JavaScript   <-- yeh await se pehle chal jayega!
// Promise resolved value!! (3 sec baad)
// End


// ============================================================
// 3️⃣ ASYNC/AWAIT KAAM KAISE KARTA HAI ANDAR SE?
// (Yeh interview mein sabse zyada pucha jaata hai 🔥)
// ============================================================
// - JS single-threaded hai, aur async/await koi naya thread
//   nahi banata. Yeh sirf syntactic sugar hai Promises ke upar.
//
// - Jab "await" hit hota hai:
//     1. Us function ka execution context CALL STACK se
//        (conceptually) hata diya jaata hai, taaki call stack
//        blocked na rahe.
//     2. Baaki synchronous code chalta rehta hai.
//     3. Jaise hi awaited promise SETTLE (resolve/reject) hoti
//        hai, function apne execution context ke saath wapas
//        call stack mein aata hai aur wahi se resume hota hai
//        jahan se ruka tha.
//
// - Iska matlab async/await, Promises + Microtask Queue ke
//   upar hi based hai. Callback Queue nahi, MICROTASK QUEUE
//   use hoti hai (jaise .then() ka callback jaata hai).
//
// - Isiliye async/await hamesha SETTIMEOUT (macrotask) se
//   pehle resolve hoga agar priority same event loop cycle
//   mein compare ho.


// ============================================================
// 4️⃣ ERROR HANDLING - try/catch (VERY IMPORTANT)
// ============================================================
// - Promise mein humne .catch() use kiya tha errors ke liye.
// - Async/Await mein hum "try...catch" block use karte hain.
// - Agar await wale promise REJECT ho jaaye, toh woh error
//   catch block mein pakda jaata hai (jaise normal JS error).

async function handlePromiseWithError() {
    try {
        const val = await new Promise((resolve, reject) => {
            reject("Promise rejected value!!");
        });
        console.log(val);
    } catch (err) {
        console.log(err); // Promise rejected value!!
    }
}
handlePromiseWithError();

// ⚠️ Common mistake: try/catch na lagana. Agar promise reject
// hui aur try/catch nahi hai, toh "Uncaught (in promise) Error"
// milega aur production app crash ho sakti hai (Node mein).


// ============================================================
// 5️⃣ ASYNC/AWAIT vs .then()/.catch() (PROMISE CHAINING)
// ============================================================
// Promise chaining se code likhna:
//
// function getData() {
//     fetch(url)
//         .then(res => res.json())
//         .then(data => console.log(data))
//         .catch(err => console.log(err));
// }
//
// Async/Await se same kaam - readable aur SYNCHRONOUS jaisa
// dikhta hai, isliye maintain karna aasan hota hai:
//
// async function getData() {
//     try {
//         const res = await fetch(url);
//         const data = await res.json();
//         console.log(data);
//     } catch (err) {
//         console.log(err);
//     }
// }
//
// 👉 Async/Await = Syntactic Sugar over Promises.
// Behind the scenes, JS engine isko Promises + generators
// jaisi mechanism se hi handle karta hai (via microtasks).


// ============================================================
// 6️⃣ MULTIPLE AWAITS - SEQUENTIAL vs PARALLEL (INDUSTRY IMP.)
// ============================================================

// ❌ SEQUENTIAL (Slow) - Ek ke baad ek await hoga
async function getSequential() {
    const p1 = await new Promise(res => setTimeout(() => res("P1"), 2000));
    const p2 = await new Promise(res => setTimeout(() => res("P2"), 2000));
    console.log(p1, p2); // Total time ~4 sec
}

// ✅ PARALLEL (Fast) - Promise.all() ka use karo jab
// dono calls ek dusre par depend nahi karte
async function getParallel() {
    const promise1 = new Promise(res => setTimeout(() => res("P1"), 2000));
    const promise2 = new Promise(res => setTimeout(() => res("P2"), 2000));

    const [p1, p2] = await Promise.all([promise1, promise2]);
    console.log(p1, p2); // Total time ~2 sec (dono parallel chalte hain)
}

// 🎯 INDUSTRY TIP: Agar 2nd API call, 1st ke result par depend
// nahi karta, toh HAMESHA Promise.all() use karo. Sequential
// await unnecessary lagana ek COMMON PERFORMANCE MISTAKE hai
// jo interviews aur real projects dono mein dekha jaata hai.


// ============================================================
// 7️⃣ Promise.all vs allSettled vs race vs any (BONUS - IMP)
// ============================================================
// - Promise.all([...])       -> Sab resolve hone chahiye, ek bhi
//                               reject hua toh turant reject.
// - Promise.allSettled([...])-> Sabka result milta hai (chahe
//                               resolve ho ya reject), koi bhi
//                               fail hone se poora nahi girta.
// - Promise.race([...])      -> Jo sabse pehle settle (resolve
//                               ya reject) hua, wahi result.
// - Promise.any([...])       -> Jo sabse pehle RESOLVE hua,
//                               wahi result. Sab reject ho jaayein
//                               tabhi AggregateError milega.


// ============================================================
// 8️⃣ REAL-WORLD FETCH EXAMPLE (Top se wapas connect karte hain)
// ============================================================
async function handlePromiseProper() {
    try {
        const data = await fetch('https://api.github.com/users/akshaymarch7');
        const jsonData = await data.json();
        console.log(jsonData);
    } catch (error) {
        console.log("Error hai bhai:", error);
    }
}
handlePromiseProper();

// Yahan do awaits hain:
// 1st await -> fetch() call ka response aane tak wait karega
//              (yeh Response object deta hai, direct data nahi)
// 2nd await -> .json() khud bhi ek promise return karta hai
//              (kyunki data stream ko parse karne mein time
//              lagta hai), isliye isko bhi await karna padta hai


// ============================================================
// 9️⃣ COMMON INTERVIEW GOTCHAS 🎯
// ============================================================
// Q1. Async function hamesha kya return karta hai?
//     -> Hamesha ek PROMISE (chahe value ho ya already promise).
//
// Q2. Kya await call stack ko block karta hai?
//     -> Nahi. Sirf uss async function ko "pause" karta hai,
//        JS ka main thread FREE rehta hai baaki kaam ke liye.
//
// Q3. Async/Await ke bina bhi async programming ho sakti hai?
//     -> Haan, Callbacks aur Promises se. Async/Await bas
//        readability improve karta hai (syntactic sugar).
//
// Q4. Agar try/catch nahi lagaya aur await wala promise reject
//     ho gaya toh?
//     -> Uncaught error milega, app crash ho sakti hai.
//
// Q5. Do independent awaits ko parallel kaise chalayein?
//     -> Promise.all() use karo, sequential await mat likho.


// ============================================================
// 🔑 QUICK SUMMARY (Revision ke liye)
// ============================================================
// ✔ async keyword function ko Promise-returning bana deta hai
// ✔ await sirf Promise ke aage lagta hai, function ko pause
//   karta hai (call stack ko nahi)
// ✔ Error handling ke liye try/catch use karo
// ✔ Async/Await = Promises ke upar Syntactic Sugar
// ✔ Sequential vs Parallel samajhna zaroori hai (Promise.all)
// ✔ Real projects mein API calls, DB calls sab yahi pattern
//   follow karte hain - isliye yeh topic INDUSTRY CRITICAL hai