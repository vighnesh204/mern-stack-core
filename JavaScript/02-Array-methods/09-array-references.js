// array-reference : arrays are REFERENCE type (not primitive/value type)

let anime = ['Demon Slayer', 'Solo Levelling', 'Jujutsu Kaisen', 'Wind Breaker'];

let anime2 = anime;
// anime2 ko naya array NAHI mila, bas anime ka MEMORY ADDRESS (reference) copy hua
// dono variables ab SAME array ko point kar rahe hain

anime2.push('One Piece');
// anime2 mein push kiya, but kyunki reference same hai...
console.log(anime);
// Output: ['Demon Slayer', 'Solo Levelling', 'Jujutsu Kaisen', 'Wind Breaker', 'One Piece']
// anime bhi change ho gaya! kyunki anime aur anime2 EK HI array ko point kar rahe the

console.log(anime === anime2);
// Output: true
// == ya === reference ko compare karta hai, content ko nahi


// ------------------ Proper COPY kaise banaye ------------------

let original = ['Demon Slayer', 'Solo Levelling', 'Jujutsu Kaisen'];

let copy1 = original.slice();
// slice() -> shallow copy banata hai (NAYA array, alag memory address)

let copy2 = [...original];
// spread operator (...) -> yeh bhi shallow copy banata hai

let copy3 = Array.from(original);
// Array.from() -> yeh bhi ek tarika hai shallow copy banane ka

copy1.push('Wind Breaker');

console.log(original);
// Output: ['Demon Slayer', 'Solo Levelling', 'Jujutsu Kaisen']
// original untouched raha, kyunki copy1 ek ALAG array hai memory mein

console.log(copy1);
// Output: ['Demon Slayer', 'Solo Levelling', 'Jujutsu Kaisen', 'Wind Breaker']


/* ------------------ NOTES ------------------

1. Arrays JavaScript mein REFERENCE type hote hain (objects ki tarah)
   - Primitive types (number, string, boolean, etc.) VALUE se store/copy hote hain
   - Arrays aur Objects MEMORY ADDRESS (reference) se store/copy hote hain

2. Jab ek array ko doosre variable mein assign karte ho (`let b = a`)
   - Naya array NAHI banta
   - Dono variables SAME array ko point karte hain (heap memory mein)
   - Ek variable se change karoge toh doosre mein bhi reflect hoga

3. Comparison (`===` ya `==`)
   - Reference compare hota hai, content nahi
   - Do alag arrays jinke elements SAME hain, wo bhi `===` mein FALSE denge
     Example: [1,2,3] === [1,2,3]  -> false (dono alag memory locations)

4. Proper (shallow) copy banane ke tarike:
   - arr.slice()
   - [...arr]        (spread operator)
   - Array.from(arr)
   - arr.concat()
   -> In sabse NAYA array banta hai, original se koi reference link nahi rehta

5. SHALLOW copy ka matlab
   - Top-level elements copy ho jaate hain
   - Agar array ke andar NESTED objects/arrays hain, unka reference wahi rehta hai
   - Deep copy ke liye: structuredClone(arr) ya JSON.parse(JSON.stringify(arr))

6. Yeh concept important hai kyunki:
   - Function mein array pass karoge toh reference jaata hai, copy nahi
   - Isliye function ke andar array modify karne se original bhi badal sakta hai
   - Bugs se bachne ke liye hamesha soch samajh ke copy banao jab mutation avoid karna ho

------------------------------------------------ */