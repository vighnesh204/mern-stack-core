// sort : sorts an array

let anime = ['Demon Slayer', 'Solo Levelling', 'Jujutsu Kaisen', 'Wind Breaker'];

anime.sort();
// koi comparator function nahi diya -> default sorting hoti hai
// default sort hamesha elements ko STRING mein convert karke, UNICODE / alphabetical order mein karta hai
// Output: ['Demon Slayer', 'Jujutsu Kaisen', 'Solo Levelling', 'Wind Breaker']
// (D -> J -> S -> W, alphabetical order)

let numbers = [40, 1, 5, 200];

numbers.sort();
// numbers ko bhi STRING bana ke compare karta hai by default!
// '40' vs '1' vs '5' vs '200' -> string comparison mein '200' < '40' hota hai (kyunki '2' < '4')
// Output: [1, 200, 40, 5]  <- galat lagega but yehi hai default behavior, isliye numbers ke liye comparator zaroor do

numbers.sort((a, b) => a - b);
// comparator diya -> ab proper NUMERIC ascending sort hoga
// agar (a - b) negative -> a pehle aayega
// agar (a - b) positive -> b pehle aayega
// Output: [1, 5, 40, 200]

numbers.sort((a, b) => b - a);
// comparator reverse kiya -> descending order mil gaya
// Output: [200, 40, 5, 1]

// Note: sort() bhi splice() jaisa hai -> original array ko DIRECTLY modify karta hai (mutating)


/* ------------------ NOTES ------------------

1. Bina comparator ke (default behavior)
   - Elements ko string mein convert karke, UTF-16 / alphabetical order mein compare karta hai
   - Numbers pe bina comparator ke sort karoge toh galat result milega
     Example: [40, 1, 5, 200].sort() -> [1, 200, 40, 5] (kyunki '2' < '4' string comparison mein)

2. Comparator function ke saath
   - Syntax: arr.sort((a, b) => { ... })
   - Rule:
       return < 0 -> a pehle
       return > 0 -> b pehle
       return 0   -> order same
   - Ascending:  (a, b) => a - b
   - Descending: (a, b) => b - a

3. Internal working (V8 engine)
   - Chhoti array (<= 10 elements) -> Insertion Sort
   - Badi array -> Timsort (Merge Sort + Insertion Sort ka hybrid)
   - Stable sort (ES2019+) -> equal elements ka original order preserve hota hai

4. Important points
   - Mutating hai -> original array change ho jaata hai
   - Original array safe rakhna ho toh copy banao: [...arr].sort(...)
   - Time Complexity: O(n log n) average case

------------------------------------------------ */