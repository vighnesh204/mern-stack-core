// slice : copies a portion of an array

let anime = ['Demon Slayer', 'Solo Levelling', 'Jujutsu Kaisen', 'Wind Breaker'];

anime.slice();
// koi argument nahi -> pura array as it is copy kar diya
// Output: ['Demon Slayer', 'Solo Levelling', 'Jujutsu Kaisen', 'Wind Breaker']

anime.slice(2);
// index 2 se end tak utha liya
// Output: ['Jujutsu Kaisen', 'Wind Breaker']

anime.slice(2, 3);
// start = 2, end = 3 -> end index EXCLUDE hota hai, sirf index 2 mila
// Output: ['Jujutsu Kaisen']

anime.slice(-2);
// negative index -> end se count, end ke 2 elements utha liye
// Output: ['Jujutsu Kaisen', 'Wind Breaker']

// Note: slice() original array ko touch nahi karta, hamesha NEW copy return karta hai (non-mutating)


// splice: removes / replaces / add elements in place

let anime = ['Demon Slayer', 'Solo Levelling', 'Jujutsu Kaisen', 'Wind Breaker'];

// splice(start, deleteCount, item0...itemN)

anime.splice(2);
// start = 2, deleteCount nahi diya -> index 2 se end tak SAB kuch remove kar diya
// Output (return value - removed items): ['Jujutsu Kaisen', 'Wind Breaker']
// anime ab: ['Demon Slayer', 'Solo Levelling']

let anime2 = ['Demon Slayer', 'Solo Levelling', 'Jujutsu Kaisen', 'Wind Breaker'];

anime2.splice(1, 1);
// start = 1, deleteCount = 1 -> index 1 se sirf 1 element remove
// Output (removed items): ['Solo Levelling']
// anime2 ab: ['Demon Slayer', 'Jujutsu Kaisen', 'Wind Breaker']

let anime3 = ['Demon Slayer', 'Solo Levelling', 'Jujutsu Kaisen', 'Wind Breaker'];

anime3.splice(1, 2, 'Attack on Titan');
// start = 1, deleteCount = 2 -> 2 elements remove kiye (Solo Levelling, Jujutsu Kaisen)
// aur unki jagah 'Attack on Titan' insert kar diya (replace wala kaam)
// Output (removed items): ['Solo Levelling', 'Jujutsu Kaisen']
// anime3 ab: ['Demon Slayer', 'Attack on Titan', 'Wind Breaker']

let anime4 = ['Demon Slayer', 'Solo Levelling', 'Jujutsu Kaisen', 'Wind Breaker'];

anime4.splice(2, 0, 'One Piece');
// deleteCount = 0 -> kuch remove nahi kiya, bas index 2 par NAYA element ADD kar diya
// Output (removed items): [] (kyunki kuch delete hi nahi hua)
// anime4 ab: ['Demon Slayer', 'Solo Levelling', 'One Piece', 'Jujutsu Kaisen', 'Wind Breaker']

// Note: splice() original array ko DIRECTLY modify karta hai (mutating)
// aur return value hamesha "removed elements" ka array hota hai, naya array nahi