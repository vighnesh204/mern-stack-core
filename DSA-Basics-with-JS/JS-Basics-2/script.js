// ============================================================
//   LOOPS IN JAVASCRIPT 
//   Whenever you have to do a repetative task you need a loop
//   Loop means doing things over and over again
// ============================================================


// -------------------------------------------------------
//  1. FOR LOOP — Jab pata ho kitni baar iterate karna hai
// -------------------------------------------------------

// Structure: for (initialization; condition; update)

for (let i = 0; i < 5; i++) {
    console.log("React js", i);
}
// Output: React js 0 → 1 → 2 → 3 → 4

// Mental Model:
// Socho ek countdown timer hai.
// i = 0 se start karo, jab tak i < 5 hai tab tak chalo, har baar i++ karo.
// Condition false hote hi — loop band.

// Gotcha:
// 'var i' use kiya toh loop ke baad bhi i accessible rahega — scope leak!
// 'let i' use karo — block ke andar hi rahega. Always use let.


// -------------------------------------------------------
//  2. WHILE LOOP — Jab pata na ho kitni baar, bas condition pata ho
// -------------------------------------------------------

// Structure: while (condition) { ... }
// Sirf condition andar, init aur update bahar manage karo khud.

let i = 0;                      // init — bahar

while (i < 5) {                 // condition — yahan check hoti hai
    console.log("React js", i);
    i++;                        // update — andar likhna padega khud
}
// Same output as for loop

// Mental Model:
// While ek security guard ki tarah hai —
// "Jab tak condition true hai, andar aao."
// Condition false? Gate band. Loop exit.

// Gotcha — Infinite Loop Trap:
// Agar i++ bhool gaye andar likhna,
// toh condition kabhi false nahi hogi.
// Browser freeze. Tab crash. Bahut bura hoga.
// Hamesha apna update step double-check karo.


// -------------------------------------------------------
//  3. FOREACH — Arrays ke liye banaya gaya hai yaar
// -------------------------------------------------------

// Structure: array.forEach(callback)
// Har element ko ek-ek karke callback function ko deta hai.
// Tum sirf socho "har item ke saath kya karna hai" — loop ki tension nahi.

const items = ["HTML", "CSS", "JavaScript"];

// Normal function style:
items.forEach(function(item, index) {
    console.log(index, item);
});

// Arrow function style — cleaner aur modern:
items.forEach((item, index) => {
    console.log(index, item);
});

// Callback ke 3 parameters milte hain:
// (currentValue, index, originalArray)
// Mostly pehle do hi use hote hain.

// Mental Model:
// forEach array ke har item ko uthata hai,
// aur teri callback ko deta hai — ek-ek karke.
// Tu bas kaam kar item ke saath, loop JS handle karta hai.

// Gotcha:
// forEach mein 'break' aur 'continue' kaam nahi karte.
// Beech mein loop todna hai? Toh normal for loop use karo.
// Aur yaad raho — forEach UNDEFINED return karta hai, naya array nahi.
// Naya array chahiye? Tab map() use karo.


// ============================================================
//  QUICK COMPARISON — Teen loops ek nazar mein
// ============================================================

//  Loop      | Best For                        | Break? | Returns
//  --------- | ------------------------------- | ------ | -------
//  for       | Known count, index control      | Yes    | Nothing
//  while     | Condition-based, unknown count  | Yes    | Nothing
//  forEach   | Arrays, clean functional style  | No     | undefined

// THE REAL INSIGHT:
// Teeno loops ka kaam ek hi hai — repeat karo.
// Fark sirf itna hai ki kitna control tum rakhte ho
// aur kitna JavaScript ko de dete ho.

// Bonus — for...in vs for...of confusion:

// ============================================================
//   FOR...IN LOOP — Namaste JavaScript Style Notes
//   "Object ke andar kya kya hai — yeh jaanna ho toh for...in lagao"
// ============================================================


// -------------------------------------------------------
//  FOR...IN — Object ki KEYS nikalta hai
// -------------------------------------------------------

// Structure: for (let key in object)
// Har iteration mein ek key milti hai — value nahi, sirf key.

const naruto = {
    name: "Naruto Uzumaki",
    village: "Konoha",
    jutsu: "Rasengan",
    rank: "Hokage"
};

// Sirf keys chahiye:
for (let key in naruto) {
    console.log(key);
}
// Output:
// name
// village
// jutsu
// rank

// Key aur value dono chahiye:
for (let key in naruto) {
    console.log(key, "→", naruto[key]);
}
// Output:
// name    → Naruto Uzumaki
// village → Konoha
// jutsu   → Rasengan
// rank    → Hokage


// -------------------------------------------------------
//  MENTAL MODEL
// -------------------------------------------------------

// Socho tum Naruto ki profile ka form dekh rahe ho.
// for...in har field ka NAAM padhta hai ek ek karke —
// "name", "village", "jutsu", "rank"
// Value baad mein dekhni ho toh manually kholna padega: naruto[key]


// -------------------------------------------------------
//  GOTCHA — Array pe mat lagao
// -------------------------------------------------------

const members = ["Itachi", "Pain", "Konan"];

for (let key in members) {
    console.log(key);       // "0", "1", "2" — indexes milte hain strings ke roop mein!
    console.log(members[key]); // "Itachi", "Pain", "Konan"
}

// Yeh technically kaam karta hai, but WRONG practice hai.
// Array ke indexes strings ke roop mein aate hain — confusing aur buggy behavior.
// Array ke liye hamesha for...of ya forEach use karo.


// ============================================================
//  QUICK SUMMARY
// ============================================================

//  for...in   →   OBJECTS ke liye
//  Milta kya  →   Keys (property names)
//  Value?     →   Khud likhna padega: obj[key]
//  Array pe?  →   Avoid karo — indexes aate hain strings mein

// ============================================================
//   FOR...OF LOOP — Namaste JavaScript Style Notes
//   "Array ki seedhi values chahiye? for...of lagao — khatam baat"
// ============================================================


// -------------------------------------------------------
//  FOR...OF — Iterable ki VALUES nikalta hai
// -------------------------------------------------------

// Structure: for (let value of iterable)
// Seedhi value milti hai — koi index nahi, koi bracket notation nahi.

const akatsuki = ["Itachi", "Pain", "Konan", "Kisame", "Deidara"];

for (let member of akatsuki) {
    console.log(member);
}
// Output:
// Itachi
// Pain
// Konan
// Kisame
// Deidara


// -------------------------------------------------------
//  STRING PE BHI CHALTA HAI
// -------------------------------------------------------

// Strings bhi iterable hoti hain JavaScript mein!
const jutsu = "Sharingan";

for (let char of jutsu) {
    console.log(char);
}
// Output: S h a r i n g a n (ek ek character)


// -------------------------------------------------------
//  INDEX BHI CHAHIYE? — entries() use karo
// -------------------------------------------------------

// Agar value ke saath index bhi chahiye toh:
for (let [index, member] of akatsuki.entries()) {
    console.log(index, member);
}
// Output:
// 0 Itachi
// 1 Pain
// 2 Konan
// 3 Kisame
// 4 Deidara


// -------------------------------------------------------
//  MENTAL MODEL
// -------------------------------------------------------

// Socho Akatsuki ki attendance list hai.
// for...of ek ek member ko stage pe bhejta hai — seedha.
// Tu sirf unka naam bol — koi index likhne ki zaroorat nahi,
// koi arr[i] nahi, koi bracket notation nahi. Clean aur simple.


// -------------------------------------------------------
//  GOTCHA — Plain Object pe kaam nahi karta
// -------------------------------------------------------

const naruto = {
    name: "Naruto",
    village: "Konoha"
};

// for (let val of naruto) { } — TYPEERROR aayega!
// Plain objects iterable nahi hote JavaScript mein.
// Object ke liye for...in use karo, ya Object.values() + for...of

for (let val of Object.values(naruto)) {
    console.log(val);
}
// Output:
// Naruto
// Konoha


// ============================================================
//  QUICK SUMMARY
// ============================================================

//  for...of   →   ARRAYS, Strings, Maps, Sets ke liye
//  Milta kya  →   Values seedhi (actual data)
//  Object pe? →   Kaam nahi karta — TypeError aayega
//  forEach vs for...of? →   for...of mein break/continue kaam karta hai — more powerful