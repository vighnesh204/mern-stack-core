// Callback kuch khaas nhi blki sirf ek function hota hai, bs thoda special jo hai wo ise pass kiya ata hai as an argument to another function.
// Callback function is a function that is passed as an argument to another function and is executed after some operation has been completed.


/* ============================================================
   1️⃣ SYNCHRONOUS JAVASCRIPT
   ============================================================

   Sabse pehli baat samajh lo -> JS ek "SINGLE THREADED" language hai.
   Matlab ek time pe sirf EK kaam hi kar sakti hai. Ek hi "Call Stack" hoti hai.

   Synchronous ka matlab hai -> code EXACTLY us order me chalega
   jis order me likha gaya hai. Jab tak ek line ka kaam khatam nahi
   hota, agli line execute hi nahi hogi.

   Isko bolte hai -> "BLOCKING" behaviour.
   Jaise ek line me lage ho ration lene, jab tak tumhara number nahi
   aata, peeche wale ko serve nahi kiya jayega. Sabko wait karna padega.
*/

console.log("1. Namaste");
console.log("2. JavaScript");
console.log("3. Hai");

// Output hamesha yehi order me aayega:
// 1. Namaste
// 2. JavaScript
// 3. Hai

// Kyu? Kyunki Call Stack me pehle "1" execute hoga, stack se niklega,
// tab jaake "2" push hoga, aur so on. Koi bhi line skip nahi hogi
// aur order kabhi nahi badlega.


// 🔴 PROBLEM WITH SYNC CODE -> agar ek kaam me time lag gaya
// (jaise heavy calculation ya server se data mangwana), to
// PURI website "freeze" ho jayegi jab tak wo kaam khatam na ho.

/* Yehi wo problem hai jiski wajah se JavaScript me
   ASYNCHRONOUS behaviour ki zaroorat padi. */

/* ============================================================
   2️⃣ ASYNCHRONOUS JAVASCRIPT
   ============================================================

   Asynchronous ka matlab -> kisi bhi time-taking kaam (jaise API call,
   setTimeout, file read) ko "background" me bhej do, aur baaki ka
   code chalte rehne do. Jab wo background wala kaam complete ho
   jaye, tab uska result handle kar lenge.

   Isko bolte hai -> "NON-BLOCKING" behaviour.

   ⚙️ Yeh magic JS akele nahi karti! JS engine (jaise V8) ke paas
   khud yeh power nahi hai. Yeh sab hota hai BROWSER (ya Node.js)
   ki madad se, jisme hote hai:

     1. Web APIs        -> setTimeout, DOM events, fetch, etc.
     2. Callback Queue   -> jaha completed kaam ki callbacks line
                            lagati hai
     3. Microtask Queue  -> Promises yaha priority se khadi hoti hai
     4. Event Loop       -> ek "watchman" jo dekhta rehta hai ki
                            Call Stack khali hai kya, agar khali hai
                            to queue se kaam utha ke stack me daal do
*/

console.log("A. Order shuru hua");

setTimeout(function () {
  console.log("B. Yeh 2 second baad aayega (Web API ne handle kiya)");
}, 2000);

console.log("C. Order place ho gaya, aage ka kaam chalu");

/* OUTPUT ORDER:
   A. Order shuru hua
   C. Order place ho gaya, aage ka kaam chalu
   B. Yeh 2 second baad aayega (Web API ne handle kiya)

   👉 Dekho "C" pehle print hua "B" se, kyunki setTimeout ne apna
   kaam Web API ko de diya aur JS aage badh gayi. Jab timer complete
   hua, tab Event Loop ne us callback ko Call Stack me bheja.

   🍔 REAL LIFE ANALOGY (Akshay Saini favourite style):
   Tum restaurant me order dete ho (async request), waiter order
   kitchen (Web API) me bhej deta hai, aur TUM WAIT nahi karte -
   baithe baithe dosto se baat karte ho (baaki code execute hota
   hai). Jab khana ban jata hai (task complete), waiter tumhe serve
   karta hai (callback call hoti hai). Yehi hai non-blocking nature!
*/



/* ============================================================
   3️⃣ CALLBACK FUNCTION - Asynchronous ka "Backbone"
   ============================================================

   Callback = ek function jo dusre function ko ARGUMENT ki tarah
   pass kiya jata hai, taaki wo BAAD me (ya kaam complete hone ke
   baad) "call back" kiya ja sake.

   "Functions in JS are First Class Citizens" -> isi wajah se
   function ko variable ki tarah pass karna possible hai.
*/

// ---- Example 1: Simple Callback (Synchronous callback) ----
function greet(name, callback) {
  console.log("Namaste " + name);
  callback(); // yeh hai "calling back"
}

function afterGreet() {
  console.log("Callback function chal gaya!");
}

greet("Akshay", afterGreet);
// Output:
// Namaste Akshay
// Callback function chal gaya!


// ---- Example 2: Callback jo ASYNC kaam ko manage karta hai ----
// Yeh sabse common use-case hai. Jab result turant nahi milta,
// hum callback de dete hai jo baad me chalega.

function orderFood(item, callback) {
  console.log(item + " ka order place ho gaya...");

  setTimeout(function () {
    console.log(item + " ban gaya! 🍕");
    callback(); // ab jaake serve karo
  }, 3000);
}

function serveFood() {
  console.log("Khana serve kar diya gaya. Enjoy! 😋");
}

orderFood("Pizza", serveFood);

/* Yaha "serveFood" ek CALLBACK hai jo tabhi chalega jab pizza
   ban chuka hoga (3 second baad). Isse pata chalta hai ki
   Callback hi hai jo Asynchronous JS ko "control" karta hai -
   yani yeh batata hai ki async kaam poora hone ke baad
   AAGE kya karna hai. */



/* ============================================================
   4️⃣ CALLBACK HELL 😱 (Pyramid of Doom)
   ============================================================

   Jab bahut saare async kaam ek dusre par depend karte hai,
   aur hum callback ke andar callback likhte chale jate hai,
   to code "sideways" (right side) badhne lagta hai. Isse
   padhna aur maintain karna bahut mushkil ho jata hai.
*/

function step1(callback) {
  setTimeout(function () {
    console.log("Step 1: Login hua");
    callback();
  }, 1000);
}

function step2(callback) {
  setTimeout(function () {
    console.log("Step 2: Cart me item add hua");
    callback();
  }, 1000);
}

function step3(callback) {
  setTimeout(function () {
    console.log("Step 3: Payment hua");
    callback();
  }, 1000);
}

// 👇 Yeh dekho - Callback Hell / Pyramid of Doom
step1(function () {
  step2(function () {
    step3(function () {
      console.log("✅ Order complete! (Lekin code padhna mushkil hai)");
    });
  });
});

/* 🔴 PROBLEMS with Callback Hell:
   1. Readability kharab -> code triangle (>) shape me badhta jata hai
   2. Maintainability kam -> ek chhoti si change karna bhi risky ho jata hai
   3. "Inversion of Control" -> hum apna control kisi aur function
      (jaise setTimeout ya kisi library) ko de dete hai, aur
      trust karte hai ki wo callback ko sahi tarike se, sahi
      time pe, sirf EK BAAR call karega. Agar wo function buggy
      nikla, to hume pata bhi nahi chalega.

   💡 SOLUTION -> Isi problem ko solve karne ke liye JS me
   PROMISES aur ASYNC/AWAIT introduce kiye gaye (wo agla topic hai!)
*/



/* ============================================================
   5️⃣ QUICK REVISION TABLE
   ============================================================

   | Concept        | Matlab                          | Nature       |
   |----------------|----------------------------------|--------------|
   | Synchronous    | Line by line, order me execute    | Blocking     |
   | Asynchronous   | Background me chale, wait na kare | Non-Blocking |
   | Callback       | Function jo baad me call hoga     | Control flow |
   | Callback Hell  | Nested callbacks ka jaal          | Bad practice |

   ONE LINE SUMMARY:
   JS single-threaded hai (Synchronous), lekin Browser ke Web APIs,
   Callback Queue aur Event Loop ki madad se yeh Asynchronous
   behaviour bhi dikha sakti hai - aur is pure process ko chalane
   wala hero hota hai -> CALLBACK FUNCTION.
*/